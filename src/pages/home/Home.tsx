import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import { Layout } from "@/styles/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <SidebarMenu />
        <h1>Home</h1>
      </Layout>
    </>
  );
}
