import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grow,
} from '@material-ui/core';

export const InfoCard = (props) => {
  const { open, handleClose } = props;
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-info-title'
      aria-describedby='modal-info-description'
      maxWidth='md'
      TransitionComponent={Transition}
      fullWidth
    >
      <DialogTitle id='modal-info-title'>About Mac Miller</DialogTitle>
      <DialogContent>
        <DialogContentText id='modal-info-description'>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
