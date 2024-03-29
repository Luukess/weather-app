import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import WrapperLayout from "../components/multiples-components/wrapper-layout/WrapperLayout";
import "../styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <WrapperLayout></WrapperLayout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
