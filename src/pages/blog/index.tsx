import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import { BlogPreview, Label, Link, PageTitle } from "@/components";
import {
  useBlogCategoriesQuery,
  useBlogsQuery,
  useInfiniteBlogsQuery,
} from "@/generated/graphql";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { getStaticPropsFunc } from "@/lib";

const imageMarkdownRegex = /!\[([^\]]*)\]\((.*?)\)/g;

const pageSize = 2;

export default function BlogPage() {
  const route = useRouter();

  const category = route.query.category ?? "";

  const { data: PopularBlogs } = useBlogsQuery({
    sort: "createdAt:desc",
    pagination: {
      page: 1,
      pageSize: 10,
    },
  });

  const { data: dataBlogs, fetchNextPage } = useInfiniteBlogsQuery(
    "pagination",
    {
      pagination: { page: 1, pageSize },
      ...(category && {
        filters: {
          blog_category: {
            slug: {
              eq: String(category),
            },
          },
        },
      }),
    },
    {
      getNextPageParam(lastPage) {
        const page = lastPage.blogs?.meta.pagination.page ?? 0;

        const pageCount = lastPage.blogs?.meta.pagination.pageCount ?? 0;

        if (page < pageCount) {
          return {
            pagination: {
              page: (lastPage.blogs?.meta.pagination.page ?? 0) + 1,
              pageSize,
            },
          };
        }
      },
    }
  );

  const { data: blogCategories } = useBlogCategoriesQuery();

  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [fetchNextPage, isVisible]);

  return (
    <>
      <PageTitle title="VinaTeddy Blog">
        <Typography fontSize="18px" color="#49a3b9" fontWeight={700}>
          {`We’ve picked few topics we’re pretty sure you’ll ❤ to read about. Check back often and enjoy.`}
        </Typography>
      </PageTitle>
      <Container maxWidth="lg">
        <Grid container spacing={8} padding={"60px 0"}>
          <Grid item xs={12} sm={12} md={4}>
            <Box marginBottom="50px">
              <Label>Chuyên mục</Label>
              <List>
                {blogCategories?.blogCategories?.data.map((item) => (
                  <ListItem
                    disablePadding
                    key={item.id}
                    sx={{
                      borderBottom: "1px dashed #e8e8e8",
                    }}
                  >
                    <ListItemButton
                      LinkComponent={Link}
                      href={`/blog?category=${item.attributes?.slug}`}
                    >
                      <ListItemText
                        primary={item.attributes?.name}
                        {...(item.attributes?.slug === category && {
                          primaryTypographyProps: {
                            color: "primary",
                          },
                        })}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box marginBottom="50px">
              <Label>Bài viết gần đây</Label>
              <List>
                {PopularBlogs?.blogs?.data.map((post) => (
                  <ListItem
                    key={post.id}
                    disablePadding
                    sx={{ borderBottom: "1px dashed #e8e8e8" }}
                  >
                    <ListItemButton
                      LinkComponent={Link}
                      href={`/blog/${post.attributes?.slug}`}
                    >
                      <ListItemAvatar>
                        <Box
                          position="relative"
                          width="50px"
                          height="50px"
                          flexShrink={0}
                          borderRadius="50%"
                          marginRight="20px"
                          sx={{
                            backgroundImage: `url(http://127.0.0.1:1337${
                              post.attributes?.image?.data?.attributes?.formats
                                .thumbnail.url ?? ""
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            "::after": {
                              position: "absolute",
                              content: "''",
                              inset: "-4px",
                              borderRadius: "50%",
                              border: "2px dashed #e1e1e1",
                            },
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={post.attributes?.title}
                        secondary={new Date(
                          Date.parse(post.attributes?.createdAt)
                        ).toLocaleDateString("us-UK", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        sx={{
                          ".MuiListItemText-primary": {
                            color: "#000",
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            {dataBlogs?.pages.map((page) =>
              page?.blogs?.data.map((blog) => (
                <Grid key={blog.id} item xs={12} marginBottom="50px">
                  <BlogPreview
                    slug={blog.attributes?.slug ?? ""}
                    title={blog.attributes?.title ?? ""}
                    content={
                      blog.attributes?.description.replaceAll(
                        imageMarkdownRegex,
                        ""
                      ) ?? ""
                    }
                    image={`http://127.0.0.1:1337${
                      blog.attributes?.image?.data?.attributes?.url ?? ""
                    }`}
                    categoryBlogSlug={
                      blog.attributes?.blog_category?.data?.attributes?.slug ??
                      ""
                    }
                    categoryBlogName={
                      blog.attributes?.blog_category?.data?.attributes?.name ??
                      ""
                    }
                    createAt={blog.attributes?.createdAt}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
        <Box ref={ref} />
      </Container>
    </>
  );
}

export const getStaticProps = getStaticPropsFunc(
  async ({ queryClient, params }) => {
    const blogVariables = {
      pagination: { page: 1, pageSize },
      ...(params?.category && {
        filters: {
          blog_category: {
            slug: {
              eq: String(params.category),
            },
          },
        },
      }),
    };

    const popularBlogsVariables = {
      sort: "createdAt:desc",
      pagination: {
        page: 1,
        pageSize: 10,
      },
    };

    await queryClient.prefetchQuery(
      useBlogsQuery.getKey(blogVariables),
      useBlogsQuery.fetcher(blogVariables)
    );

    await queryClient.prefetchQuery(
      useBlogsQuery.getKey(popularBlogsVariables),
      useBlogsQuery.fetcher(popularBlogsVariables)
    );

    await queryClient.prefetchQuery(
      useBlogCategoriesQuery.getKey(),
      useBlogCategoriesQuery.fetcher()
    );

    return {};
  }
);
