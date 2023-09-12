import { QueryClient } from "@tanstack/react-query";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface Context extends GetStaticPathsContext {
  queryClient: QueryClient;
}

export const getStaticPathsFunc = <
  Params extends ParsedUrlQuery = ParsedUrlQuery
>(
  fetchProps: (context: Context) => Promise<GetStaticPathsResult<Params>>
): GetStaticPaths<Params> => {
  return async (context: GetStaticPropsContext) => {
    const queryClient = new QueryClient();
    return fetchProps({ ...context, queryClient });
  };
};
