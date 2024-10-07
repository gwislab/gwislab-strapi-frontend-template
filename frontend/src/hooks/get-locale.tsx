import { useSearchParams } from "next/navigation";

const useGetLocalParams = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const appRouter = ({ locale }: { locale?: string }) => {
    const url = new URL(window.location.href);

    // Update or set the query parameter
    if (locale) {
      url.searchParams.set("lang", locale);
    }

    // Reload the page with the updated URL
    window.location.href = url.toString();
  };

  return {
    locale: lang || "en",
    appRouter
  };
};

export default useGetLocalParams;
