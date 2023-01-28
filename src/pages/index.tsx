import MainLayout from "@/components/layouts/MainLayout";
import Content from "@/components/pages/Content";
import SidebarLeft from "@/components/pages/SidebarLeft";
import SideBarRight from "@/components/pages/SidebarRight";
import Head from "next/head";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Facebook clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen pt-4 flex justify-between items-start">
        <SidebarLeft />
        <Content /> 
        <SideBarRight />
      </main>
    </MainLayout>
  );
}
