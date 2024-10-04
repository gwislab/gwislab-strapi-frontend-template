"use client";

import React, { useEffect } from "react";

import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";

import Footer from "../footer";
import Header from "../header";
import Loader from "../loader";
import { useApolloClientInstance } from "~/hooks";
import useReactiveVariables from "~/hooks/reactive-variable";

const SubAppRoot = ({ children }: any) => {
  const { loading, setVariables } = useReactiveVariables();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setVariables({ loading: false });
      }, 20000);
    }

    return () => {};
  }, [loading]);

  return (
    <div>
      {loading ? <Loader /> : undefined}
      {children}
    </div>
  );
};

const GraphqlClient = ({ children }: any) => {
  const client = useApolloClientInstance();

  return client ? (
    <ApolloProvider client={client}>
      <Header />
      <SubAppRoot>{children}</SubAppRoot>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </ApolloProvider>
  ) : (
    <Loader />
  );
};

export default GraphqlClient;
