import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import { sxWrapperLayout } from "./WrapperLayout.style";
import Header from "../header/Header";

type Props = {
  children?: React.ReactNode;
};

const WrapperLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={sxWrapperLayout.mainAppBox}>
        <Header />
        {children}
      </Box>
    </>
  );
};

export default WrapperLayout;
