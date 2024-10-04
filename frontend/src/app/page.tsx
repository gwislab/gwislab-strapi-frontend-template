import { RenderPageComponents } from "~/components/pages";
import { getPageComponents } from "~/lib/apollo-server-fetch";

export const metadata = {
  metadataBase: new URL("http://vzzbrokerage.com"),
  title: {
    default: "VZZ Brokerage",
    template: "%s | VZZ Brokerage"
  },
  description: "Let us help you achieve your real estate goals today."
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
