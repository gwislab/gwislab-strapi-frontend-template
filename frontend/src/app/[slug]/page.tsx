import { redirect } from "next/navigation";

import { RenderPageComponents } from "~/components/pages";
import { APP_ENV } from "~/configs";
import { getPageComponents } from "~/lib/apollo-server-fetch";

export const metadata = {
  metadataBase: new URL(APP_ENV.FRONTEND_URL!),
  title: {
    default: APP_ENV.APP_NAME,
    template: `%s | ${APP_ENV.APP_NAME}`
  },
  description: APP_ENV.APP_DEFAULT_DESCRIPTION
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
