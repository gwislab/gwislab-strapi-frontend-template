import { makeVar, useReactiveVar } from "@apollo/client";

import { ComponentComponentsMetaData } from "~/graphql/generated/schema";

interface ReactiveVariableProps {
  loading: boolean;
  logoUrl?: string;
  error?: string;
  success?: string;
  pageMetaData?: ComponentComponentsMetaData;
}

const initialValues: ReactiveVariableProps = {
  loading: false
};

const reactiveVariable = makeVar<ReactiveVariableProps>(initialValues);

const useReactiveVariables = () => {
  const variableValues = useReactiveVar(reactiveVariable);

  const setVariables = (value: Partial<ReactiveVariableProps>) => {
    reactiveVariable({ ...variableValues, ...value });
  };

  const resetVariables = async () => {
    reactiveVariable(initialValues);
  };

  return {
    ...variableValues,
    setVariables,
    resetVariables
  };
};

export default useReactiveVariables;
