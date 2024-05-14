export interface Config {
  [pageSlug: string]: {
    [sectionTypename: string]: SectionConfig;
  };
}

export interface SectionConfig {
  className?: string;
  [property: string]: any;
}

/** Component returned from rendering engine should expect a
 * `data` prop with all CMS data for that block,
 * and an optional `config` prop
 */
export interface CommonComponentProps {
  data: any;
  config?: Config;
}