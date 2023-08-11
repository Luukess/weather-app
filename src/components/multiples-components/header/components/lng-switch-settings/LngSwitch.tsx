import * as React from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { sxLngSwitchStyles } from "./LngSwitch.style";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

const LngSwitch: React.FC = () => {
  const getLngFromStorage = localStorage.getItem("i18nextLng");
  const [selectedLng, setSelectedLng] = React.useState<string>(
    getLngFromStorage === "pl" ? "pl" : "en"
  );

  const { i18n } = useTranslation();

  const handleSelectTheme = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedLng: string
  ): void => {
    if (newSelectedLng !== null) {
      setSelectedLng(newSelectedLng);
      i18n.changeLanguage(newSelectedLng);
    }
  };

  return (
    <>
      <Typography>Language</Typography>
      <Box component="div" sx={sxLngSwitchStyles.boxButtonsContainer}>
        <ToggleButtonGroup
          color="primary"
          exclusive
          aria-label="language-switch"
          value={selectedLng}
          onChange={handleSelectTheme}
        >
          <ToggleButton value="en" sx={sxLngSwitchStyles.lngButtons}>
            <Box component="span" mr={0.5} className="fi fi-gb"></Box> English
          </ToggleButton>
          <ToggleButton value="pl" sx={sxLngSwitchStyles.lngButtons}>
            <Box component="span" mr={0.5} className="fi fi-pl"></Box> Polski
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default LngSwitch;
