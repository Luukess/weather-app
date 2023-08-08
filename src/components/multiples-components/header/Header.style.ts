import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

type sxName = "appBarStyles" | "toolBarHeaderStyles";

export const sxHeaderStyles: Record<sxName, SystemStyleObject<Theme>> = {
  appBarStyles: {
    height: "56px",
    width: "100%",
  },
  toolBarHeaderStyles: {
    minHeight: "56px !important",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
