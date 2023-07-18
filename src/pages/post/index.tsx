import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface PostListProps {
  posts: any[];
}

export default function PostIndex(props: PostListProps) {
  const route = useRouter();
  console.log("about query", route.query);
  return (
    <div style={{ margin: "20px" }}>
      <h1>post page</h1>
      {props.posts.map((post) => (
        <Link href={`/post/${post.id}`} key={post.id}>
          <li>{post.name}</li>
        </Link>
      ))}
    </div>
  );
}
export const getStaticProps: GetStaticProps<PostListProps> = async (
  context: GetStaticPropsContext
) => {
  const resopnse = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resopnse.json();
  console.log("fetch data", data);
  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, name: x.name })),
    },
  };
};
