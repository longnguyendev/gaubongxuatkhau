import { useRouter } from "next/router";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post detail page</h1>

      <p>path: {JSON.stringify(router.query)}</p>
    </div>
  );
}
