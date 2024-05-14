import React from "react";
import pageConfig from "./config";
// import { getPageContext } from "util/app-router/server-context";

// TYPES
import { type CommonComponentProps, type SectionConfig } from "./types";

/** Register components here to assemble dynamic renderer.
 *
 * `key`: Value of component type indicator, ie. `text-and-media`,
 * pulled from `switchKey`, ie. `__typename` (Strapi, Payload).
 *
 * `value`: Imported server wrapper component whose primary responsibility will be
 * transforming data into props for the presentational component.
 * (It may also handle config from `config.ts`, fetch additional data, etc.)
 *
 * EXAMPLE:
 * `{ "text-and-media": TextAndMediaBlockWrapper }`
 */
let componentMap: Partial<
  Record<string, React.ComponentType<CommonComponentProps>>
>;

function initDynamicRenderingEngine(map: typeof componentMap) {
  componentMap = map;
}

export { componentMap, initDynamicRenderingEngine };

/**
 * Renderer for use with CMS's without a native rendering engine (Strapi, Payload)
 *
 * Config is coupled with page context/routing. Use it to provision non-CMS managed,
 * page-specific props or css down to presentational components.
 *
 * Handle fetching or mutating additional section-specific data in
 * individual server components, rather than the parent/page
 * */
export function renderingEngine<DynamicBlocksUnionType extends Record<string, any>>(
  cmsBlocks: DynamicBlocksUnionType[] | DynamicBlocksUnionType,
  switchKey = "__typename",
): React.ReactNode[] | React.ReactNode {
  // const { routeParams } = getPageContext();
  const routeParams: string[] = [];
  const pageSlug = routeParams?.join("/");

  let config = pageConfig[pageSlug];

  function generateWildcardRouteRegex(pattern: string) {
    // Replace wildcard pattern with regex equivalent
    const regexPattern = pattern.replace("*", ".+");
    return new RegExp("^" + regexPattern + "$");
  }

  // Look for a wildcard config that matches
  if (!config) {
    Object.keys(pageConfig).forEach((slug) => {
      if (generateWildcardRouteRegex(slug).test(pageSlug)) {
        config = pageConfig[slug];
        return;
      }
    });
  }

  if (!cmsBlocks) return null;

  function getMatchingComponent(block: DynamicBlocksUnionType): {
    Component: React.ComponentType<CommonComponentProps>;
    data: DynamicBlocksUnionType;
    config?: SectionConfig;
  } {
    if (!block) {
      throw new Error("No block provided")
    };

    const typename: string = block[switchKey];

    if (typename in componentMap) {
      return {
        Component: componentMap[typename] as React.ComponentType<CommonComponentProps>,
        data: block,
        config: config?.[typename],
      };
    }

    throw new Error("No matching block component");
  }

  if (!Array.isArray(cmsBlocks)) {
    const { Component, data, config } = getMatchingComponent(cmsBlocks);
    return <Component data={data} config={config} />;
  }

  return cmsBlocks
    .map(getMatchingComponent)
    .filter((result) => !!result)
    .map(({ Component, data, config }, index) => (
      <Component key={index} data={data} config={config} />
    ));
}

export default renderingEngine;
