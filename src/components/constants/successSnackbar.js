import * as React from "react";
import {Stack} from "@mui/material";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/material";
import { DataContext } from "../api/context";

const MuiAlert = React.forwardRef(function MuiAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ open, message }) {
  const { dispatch } = DataContext();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({ type: "CLOSE_SNACKBAR" });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert severity="success" onClose={handleClose} sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      </Snackbar>
    </Stack>
  );
}
