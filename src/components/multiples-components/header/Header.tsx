import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { sxHeaderStyles } from "./Header.style";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={sxHeaderStyles.appBarStyles} position="static">
        <Toolbar sx={sxHeaderStyles.toolBarHeaderStyles}>
          <Typography>LOGO</Typography>
          <Typography>Button</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
