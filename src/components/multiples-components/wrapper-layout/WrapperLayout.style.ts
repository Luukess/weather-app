import { Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

type SxName = "mainAppBox";

export const sxWrapperLayout: Record<SxName, SystemStyleObject<Theme>> = {
  mainAppBox: {
    width: "100vw",
    height: "calc(100vh - 56px)",
  },
};
