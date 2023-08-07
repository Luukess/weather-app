import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainLayout from "../components/main-layout/MainLayout";
import "../styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <MainLayout>
        <p>Works</p>
      </MainLayout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
