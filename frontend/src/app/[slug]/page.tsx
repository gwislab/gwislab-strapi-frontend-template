import { redirect } from "next/navigation";

import { RenderPageComponents } from "~/components/pages";
import { getPageComponents } from "~/lib/apollo-server-fetch";

export const metadata = {
  metadataBase: new URL("http://vzzbrokerage.com"),
  title: {
    default: "VZZ Brokerage",
    template: "%s | VZZ Brokerage"
  },
  description: "This is a description"
};

interface PageProps {
  params: { slug: string };
}

const Pages = async ({ params }: PageProps) => {
  const slug = params.slug;
  if (!slug) {
    // if slug is empty load Home page
    redirect("/");
  }
  const result = await getPageComponents(slug);

  return (
    <main>
      <RenderPageComponents contents={result.contents} />
    </main>
  );
};

export default Pages;
