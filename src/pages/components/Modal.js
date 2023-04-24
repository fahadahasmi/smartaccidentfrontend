import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  width: '400px',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PredModal(props) {
  const [open, setOpen] = useState(true);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(props.img)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <Image
            src={props.img}
            alt="Picture of the author"
            width={300}
            height={300}
          />
          </div>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.prediction}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}