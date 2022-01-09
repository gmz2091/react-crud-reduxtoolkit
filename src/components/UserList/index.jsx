/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import {
  Avatar,
  Box, Button, Card, CardContent, Container, Grid, Modal, Typography, Backdrop,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetAllUser } from '../../redux/slices/users';
import ModalForm from '../ModalForm';

const UserList = () => {
  const { list: userList } = useSelector((state) => state.users);
  const [loadingList, setLoadingList] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (userList.length !== 0) {
      setLoadingList(false);
    } else {
      setLoadingList(true);
    }
    setTimeout(() => {
      try {
        dispatch(fetAllUser());
      } catch (error) {
        console.log(error);
      }
      setLoadingList(false);
    }, 2000);
  }, [dispatch]);
  return (
    <Container maxWidth="xl">
      <Button onClick={handleOpen}>New User</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <ModalForm open={open} />
      </Modal>
      <Box xl={{ flexGrow: 1, justifyContent: 'center', py: 5 }} py={5}>
        <Grid container spacing={2} columns={12}>
          {loadingList ? (
            <Typography variant="h4" align="center">Loading...</Typography>
          ) : (userList.length > 0 ? userList.map((user) => (
            <Grid item xs={6} md={3} key={user.id}>
              <Card sx={{ maxWidth: 345 }}>
                <Box container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Avatar
                  // component="img"
                  // height="140"
                    sx={{ width: 86, height: 86 }}
                    src={user.avatar}
                    alt={user.first_name}
                  />

                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {`${user.first_name} ${user.last_name}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )) : (
            <Typography variant="h5" component="div">
              No users found
            </Typography>
          )) ?? null}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserList;
