import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) => {
  return (
    <>
      <Head>
        <title>TheBadCorner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        



      </Head>
      <Header />
      <main className="main-content ">{children}</main>
    </>
  );
};

export default Layout;
