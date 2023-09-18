import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Folder, WatchLater } from "@mui/icons-material";

import { Link, PageTitle } from "@/components";
import { useBlogsQuery } from "@/generated/graphql";
import { getStaticPathsFunc, getStaticPropsFunc } from "@/lib";

export default function BlogDetailPage() {
  const route = useRouter();

  const slug = route.query.slug;

  const { data } = useBlogsQuery({
    filters: {
      slug: {
        eq: String(slug),
      },
    },
  });

  return (
    <>
      <PageTitle title={data?.blogs?.data?.[0]?.attributes?.title ?? ""}>
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
        >
          <Folder fontSize="small" color="disabled" />
          <Link
            href={`/blog/?category=${
              data?.blogs?.data?.[0]?.attributes?.blog_category?.data
                ?.attributes?.slug ?? ""
            }`}
            color="secondary"
            sx={{ textDecoration: "none", fontWeight: 500 }}
          >
            {data?.blogs?.data?.[0]?.attributes?.blog_category?.data?.attributes
              ?.name ?? ""}
          </Link>
          <WatchLater fontSize="small" color="disabled" />
          <Typography fontSize="15px">
            {new Date(
              Date.parse(data?.blogs?.data?.[0]?.attributes?.createdAt ?? "")
            ).toLocaleDateString("us-UK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Stack>
      </PageTitle>
      <Container maxWidth="lg">
        <Box padding="60px 0">
          <Box
            component="img"
            src={`https://api.gaubongthuonghieu.com${data?.blogs?.data?.[0]?.attributes?.image?.data?.attributes?.url}`}
            width="100%"
            sx={{ borderRadius: "6px" }}
          />
          <Box
            component={ReactMarkdown}
            sx={{
              img: {
                width: "100%",
              },
              p: {
                whiteSpace: "pre-wrap",
              },
            }}
          >
            {data?.blogs?.data?.[0]?.attributes?.content?.replaceAll(
              "/uploads",
              "https://api.gaubongthuonghieu.com/uploads"
            ) ?? ""}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export const getStaticPaths = getStaticPathsFunc(async ({ queryClient }) => {
  const data = await queryClient.fetchQuery(
    useBlogsQuery.getKey(),
    useBlogsQuery.fetcher()
  );

  return {
    paths: (data.blogs?.data ?? []).map((blog) => ({
      params: {
        slug: blog.attributes?.slug ?? "",
      },
    })),
    fallback: true,
  };
});

export const getStaticProps = getStaticPropsFunc(
  async ({ queryClient, params }) => {
    const blogVariables = {
      filters: {
        slug: {
          eq: String(params?.slug),
        },
      },
    };

    await queryClient.prefetchQuery(
      useBlogsQuery.getKey(blogVariables),
      useBlogsQuery.fetcher(blogVariables)
    );

    return {};
  }
);
