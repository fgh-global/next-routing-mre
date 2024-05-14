import styles from "./styles.module.scss";
import { Config } from "./types";

/**
 * OPTIONAL CONFIG
 *
 * Add unique configuration, props, and styles for instances of components
 * that appear only on this page.
 *
 * USE AT YOUR OWN RISK: 
 * By default, we want to build configuration into a component's CMS model
 * to empower content managers as much as possible. 
 * However, some site design systems make this either difficult or very bloated, and
 * page- or section-specific component configuration may be served better
 * from the code in certain cases.
 * 
 * WILDCARDS:
 * Match a wildcard route using the convention [route]/*, for example:
 * "team-members/*" will match routes like "team-members/jane-smith"
 */
const config: Config = {
  // // EXAMPLES (feel free to delete):
  // // Page Slug
  // home: {
  //   // CMS Component name
  //   Hero: {
  //     className: styles["homepage-hero"],
  //   },
  // },
  // // Wildcard
  // "about/projects/*": {
  //   TextAndMedia: {
  //     className: styles["projects-media"]
  //   }
  // }
} as Config;

export default config;
