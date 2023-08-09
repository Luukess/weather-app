import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

type SxName = "boxButtonsContainer" | "themeButtons" | "buttonsIcons";

export const sxThemeSwitchStyles: Record<SxName, SystemStyleObject<Theme>> = {
  boxButtonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
  },
  themeButtons: {
    textTransform: "none",
    width: "100px",
    fontSize: "14px",
    height: "44px",
  },
  buttonsIcons: {
    marginRight: "5px",
    fontSize: "18px",
  },
};
