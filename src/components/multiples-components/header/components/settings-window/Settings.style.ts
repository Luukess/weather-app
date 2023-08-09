import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

type SxName =
  | "settingsHeader"
  | "settingsButton"
  | "settingsWindow"
  | "settingsBody"
  | "settingsContainerFeature";

export const sxSettingsStyles: Record<SxName, SystemStyleObject<Theme>> = {
  settingsButton: {
    minWidth: "32px !important",
    padding: "4px",
  },
  settingsWindow: {
    width: "280px",
  },
  settingsHeader: {
    width: "100%",
    height: "56px",
    padding: "10px",
    borderRadius: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsBody: {
    width: "100%",
    height: "calc(100vh - 56px)",
    overflow: "auto",
  },
  settingsContainerFeature: {
    padding: "10px",
  },
};
