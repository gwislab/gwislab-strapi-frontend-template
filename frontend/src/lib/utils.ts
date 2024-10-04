import { ApolloError } from "@apollo/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { APP_ENV } from "~/configs";
import { UploadFile } from "~/graphql/generated/schema";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const extractAssetUrl = (asset?: Partial<UploadFile> | null) => {
  return asset?.url ? `${APP_ENV.BACKEND_BASE}${asset?.url}` : undefined;
};

export const extractErrorMessage = (error: ApolloError) => {
  console.log({ error });
  return error.message;
};
