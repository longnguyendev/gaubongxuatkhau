import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.gaubongthuonghieu.com/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          endpoint: "https://api.gaubongthuonghieu.com/graphql",
          fetchParams: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        },
        exposeFetcher: true,
        exposeQueryKeys: true,
        addInfiniteQuery: true,
      },
    },
  },
};

export default config;
