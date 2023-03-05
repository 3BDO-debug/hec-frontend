import React from 'react';
// material
import { Box, Grid, Stack, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import ContactUsForm from './ContactUsForm';

// ------------------------------------------------------------------------------------------

function GetInTouch() {
  return (
    <SectionWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
            <Grid item xs={6} md={12}>
              <Box component="img" width="80%" src="/images/get-in-touch.svg" />
            </Grid>
            <Grid
              item
              xs={6}
              md={12}
              sx={{
                marginLeft: {
                  xs: '-27px',
                  md: '0px',
                },
              }}
            >
              <Stack width="100%">
                <Box display="flex" alignItems="flex-start">
                  <PhoneAndroidIcon />
                  <Box display="flex" flexDirection="column" marginLeft={2}>
                    <Typography variant="subtitle1">Call us</Typography>
                    <Typography variant="body2">+201022753599</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="flex-start" marginTop={4}>
                  <MailOutlineIcon />
                  <Box display="flex" flexDirection="column" marginLeft={2}>
                    <Typography variant="subtitle1">Email us</Typography>
                    <Typography variant="body2">hollandegyptian_champ@outlook.com</Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="flex-start" marginTop={4}>
                  <AccessTimeIcon />
                  <Box display="flex" flexDirection="column" marginLeft={2}>
                    <Typography variant="subtitle1">Working hours</Typography>
                    <Typography variant="body2">Always Open</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default GetInTouch;
