import axios from "axios";
import { print } from "graphql";

import { APP_ENV } from "~/configs";
import {
  ComponentComponentsMetaData,
  GetPagesDocument,
  GetPagesQuery,
  GetPagesQueryVariables
} from "~/graphql/generated/schema";

interface IFetchWithAxios {
  query: string;
  variables: GetPagesQueryVariables;
}

export const fetchWithAxios = async ({ query, variables }: IFetchWithAxios) => {
  try {
    const response = await axios.post(APP_ENV.BACKEND_URL, {
      query,
      variables
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchPageComponents = async (
  slug: string | null = null
): Promise<GetPagesQuery> =>
  fetchWithAxios({ query: print(GetPagesDocument), variables: { slug } });

export const getPageComponents = async (slug: string | null = null): Promise<any> => {
  const data = await fetchPageComponents(slug);

  return {
    metaData: data?.pages?.[0]?.metaData as ComponentComponentsMetaData,
    contents: data?.pages?.[0]?.content
  };
};
