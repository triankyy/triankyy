/* eslint-disable @typescript-eslint/no-explicit-any */
import MuiIconButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const IconButton = styled(MuiIconButton)(({ theme }) => ({
    // background: theme.palette.primary.main,
    // padding: 0,
    // color: theme.palette.background.default,
    borderRadius: 0,
    minWidth: 0
}));

export default IconButton;
