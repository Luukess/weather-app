import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import { sxMainLayout } from "./MainLayout.style";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={sxMainLayout.mainAppBox}>{children}</Box>;
    </>
  );
};

export default MainLayout;
