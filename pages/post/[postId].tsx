import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface PostProps {
  posts: any;
}

export default function Post({ posts }: PostProps) {
  return <div>{posts.email}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPaths");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    paths: data.map((post: any) => ({ params: { postId: `${post.id}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("static props", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) {
    return { notFound: true };
  }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${postId}`
  );
  const data = await response.json();
  return { props: { posts: data } };
};
