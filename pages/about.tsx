import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: true });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  console.log("Aboutpage");
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setPosts(data);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ margin: "30px" }}>
      <div>abount page</div>
      <Header />
      <ul className="data">
        {posts.map((post: any) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
export function getStaticProps() {
  return { props: {} };
}
