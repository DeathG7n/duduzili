import * as React from 'react';
import {Stack} from '@mui/material';
import {Snackbar} from '@mui/material';
import {Alert} from '@mui/material';

const MuiAlert = React.forwardRef(function MuiAlert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ open, message, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert severity="error" onClose={handleClose} sx={{ width: '100%' }}>{message}</MuiAlert>
      </Snackbar>
     
     
    </Stack>
  );
}