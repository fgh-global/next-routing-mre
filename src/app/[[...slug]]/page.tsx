import { notFound } from "next/navigation";
import generateMarkup from "../markup";
import pages from "../data";

export type PageProps = {
  params: { id: string; slug: string[] };
  /** Destructuring searchParams in a Page or Layot will trigger dynamic rendering
   * https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering#what-is-dynamic-rendering
   */
  searchParams?: { [key: string]: string | string[] | undefined };
};

// export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
//   // Fetch all pages to generate static params
// }

export default async function Page({ params }: PageProps) {
  const slug =
    !params.slug || !params.slug.length ? "/" : params.slug.join("/");

  // Fetch Page from data
  const page = pages[slug];

  // Generate markup
  const markup = generateMarkup(page);

  if (!markup || !page) {
    notFound();
  }

  return (
    <>
      {/* {renderingEngine<TDynamicBlocksUnion>(page, "type")} */}
      <header>Slug: {params.slug}</header>
      <br />
      <br />
      {markup}
    </>
  );
}
