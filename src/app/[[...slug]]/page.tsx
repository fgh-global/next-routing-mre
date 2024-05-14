import { notFound } from "next/navigation";
import generateMarkup from "../markup";
import pages from "../data";
import renderingEngine from "@/util/rendering-engine";

export type PageProps = {
  params: { id: string; slug: string[] };
};

// Force cache-on-demand!
export function generateStaticParams() {
  return [];
}

export default function Page({ params }: PageProps) {
  const slug =
    !params.slug || !params.slug.length ? "/" : params.slug.join("/");

  // "Fetch" Page from data
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      {generateMarkup(page)}
      {renderingEngine(page.components)}
    </>
  );
}
