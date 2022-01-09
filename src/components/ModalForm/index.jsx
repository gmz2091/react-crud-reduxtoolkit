import {
  Box, Fade, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const ModalForm = ({ open }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Fade in={open}>
      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Fade>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
};
