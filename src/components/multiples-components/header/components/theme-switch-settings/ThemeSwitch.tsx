import * as React from "react";
import { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { sxThemeSwitchStyles } from "./ThemeSwitch.style";

const ThemeSwitch: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");

  const handleSelectTheme = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedTheme: string
  ): void => {
    setSelectedTheme(newSelectedTheme);
  };

  return (
    <>
      <Typography>Mode</Typography>
      <Box component="div" sx={sxThemeSwitchStyles.boxButtonsContainer}>
        <ToggleButtonGroup
          color="primary"
          value={selectedTheme}
          exclusive
          onChange={handleSelectTheme}
          aria-label="theme-platform"
        >
          <ToggleButton sx={sxThemeSwitchStyles.themeButtons} value="light">
            <WbSunnyOutlinedIcon sx={sxThemeSwitchStyles.buttonsIcons} /> Light
          </ToggleButton>
          <ToggleButton sx={sxThemeSwitchStyles.themeButtons} value="dark">
            <DarkModeOutlinedIcon sx={sxThemeSwitchStyles.buttonsIcons} /> Dark
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default ThemeSwitch;
