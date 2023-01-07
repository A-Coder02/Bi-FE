import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Profile = () => {
  return (
    <Stack direction = 'row' spacing={2}>
        <Avatar sx ={{ bgcolor  : 'primary.main' ,
        width: 45, height: 45 
      }}>A</Avatar>
        <Stack>
          <Typography fontWeight ='500' >Arbaz Ansari</Typography>
          <Typography variant='subtitle2' >Super Admin</Typography>
        </Stack>
    </Stack>)
};

export default Profile;