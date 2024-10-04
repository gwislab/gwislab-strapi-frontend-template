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

const Home = async () => {
  const result = await getPageComponents();

  return (
    <main>
      <RenderPageComponents contents={result.contents} />
    </main>
  );
};

export default Home;
