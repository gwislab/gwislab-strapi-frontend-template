import { useCallback, useEffect } from "react";

import useReactiveVariables from "./reactive-variable";
import { useGetHeaderFooterLazyQuery } from "~/graphql/generated/schema";
import { extractAssetUrl } from "~/lib/utils";

export const useGetHeaderFooterContent = () => {
  const { setVariables } = useReactiveVariables();
  const [getHeaderInfo, { data, loading }] = useGetHeaderFooterLazyQuery();

  const initializeQuery = useCallback(async () => {
    try {
      const { data: info } = await getHeaderInfo();

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
    initializeQuery();
    return () => {};
  }, []);

  return {
    header: data?.headerFooter?.header,
    footer: data?.headerFooter?.footer,
    loading
  };
};
