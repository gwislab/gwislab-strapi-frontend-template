import { useCallback, useEffect } from "react";

import useGetLocalParams from "./get-locale";
import useReactiveVariables from "./reactive-variable";
import { useGetHeaderFooterLazyQuery } from "~/graphql/generated/schema";
import { extractAssetUrl } from "~/lib/utils";

export const useGetHeaderFooterContent = () => {
  const { setVariables } = useReactiveVariables();
  const [getHeaderInfo, { data, loading }] = useGetHeaderFooterLazyQuery();
  const { locale } = useGetLocalParams();

  const initializeQuery = useCallback(async (lang: string) => {
    try {
      const { data: info } = await getHeaderInfo({
        variables: { locale: lang }
      });

      setVariables({
        logoUrl: extractAssetUrl(info?.headerFooter?.header?.logo)
      });
    } catch (error: any) {
      if (error.message) {
        setVariables({ error: error.message });
      }
    }
    return true;
  }, []);

  useEffect(() => {
    initializeQuery(locale);
    return () => {};
  }, [locale]);

  return {
    header: data?.headerFooter?.header,
    footer: data?.headerFooter?.footer,
    loading
  };
};
