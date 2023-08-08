import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { sxHeaderStyles } from "./Header.style";
import Settings from "./components/settings-window/Settings";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={sxHeaderStyles.appBarStyles} position="static">
        <Toolbar sx={sxHeaderStyles.toolBarHeaderStyles}>
          <Typography>LOGO</Typography>
          <Settings />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
