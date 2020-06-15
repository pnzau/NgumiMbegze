import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';

export const DeletePlaylistModal = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-playlist-delete-title'
      aria-describedby='modal-playlist-delete-description'
      maxWidth='sm'
      fullWidth
    >
      <DialogTitle id='modal-playlist-delete-title'>
        Delete Playlist
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='modal-playlist-delete-description'>
          You are about to delete this playlist, deleting means the playlist
          will be lost permanently.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          onClick={handleClose}
          color='primary'
          disableElevation
        >
          <Typography variant='body2' className='text-capitalize'>
            Cancel
          </Typography>
        </Button>
        <Button
          onClick={handleClose}
          color='secondary'
          variant='contained'
          disableElevation
        >
          <Typography variant='body2' className='text-capitalize'>
            Delete
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
