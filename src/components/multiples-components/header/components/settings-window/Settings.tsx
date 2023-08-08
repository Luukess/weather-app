import * as React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { sxSettingsStyles } from "./Settings.style";
import ThemeSwitch from "../theme-switch-settings/ThemeSwitch";

const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSettings = (): void => {
    setIsOpen(true);
  };

  return (
    <Box component="div">
      <Box component="div">
        <Button
          variant="contained"
          size="small"
          sx={sxSettingsStyles.settingsButton}
          onClick={() => handleOpenSettings()}
        >
          <SettingsIcon />
        </Button>
      </Box>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box component="div" sx={sxSettingsStyles.settingsWindow}>
          <Box component="div" sx={sxSettingsStyles.settingsHeader}>
            <Typography>Settings</Typography>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="div" sx={sxSettingsStyles.settingsBody}>
            <Box component="div" sx={sxSettingsStyles.settingsContainerFeature}>
              <ThemeSwitch />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Settings;