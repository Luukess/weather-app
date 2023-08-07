import * as React from "react";
import { Box } from "@mui/material";
import { sxMainLayout } from "./MainLayout.style";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return <Box sx={sxMainLayout.mainAppBox}>{children}</Box>;
};

export default MainLayout;
