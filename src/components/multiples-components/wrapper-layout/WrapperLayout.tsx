import * as React from "react";
import { Box, CssBaseline } from "@mui/material";
import { sxWrapperLayout } from "./WrapperLayout.style";

type Props = {
  children?: React.ReactNode;
};

const WrapperLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box sx={sxWrapperLayout.mainAppBox}>{children}</Box>;
    </>
  );
};

export default WrapperLayout;
