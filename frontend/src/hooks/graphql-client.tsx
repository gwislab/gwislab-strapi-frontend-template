"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

import { APP_ENV } from "~/configs";

export const useApolloClientInstance = (): ApolloClient<any> => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const apolloClient = new ApolloClient({
      uri: APP_ENV.BACKEND_URL,
      cache: new InMemoryCache()
    });

    console.log(" *********** apollo client created ***********");

    setClient(apolloClient);

    return () => {};
  }, []);

  return client as ApolloClient<NormalizedCacheObject>;
};
