import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());
  console.log({ searchParams });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/post/${product.slug}`,
      languages: {
        en: `/post/${product.slug}`,
        fr: `/post/${product.slug}`
      }
    },
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages]
    }
  };
}
