import React from 'react';
// material
import { Box, Typography } from '@mui/material';
// components
import PageIntro from 'src/sections/common/PageIntro';
import GetInTouch from 'src/sections/contactUsPage/GetInTouch';
import MapOverview from 'src/sections/contactUsPage/MapOverview';

function ContactUsPage() {
  return (
    <Box sx={{ overflow: 'hidden', marginTop: 18 }}>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/projects-intro-sm.jpg)',
          md: 'url(/images/fade-effect.svg), url(/images/contact-us-banner.png)',
        }}
        subtitle="Contact Us"
        title="We Love To Hear From You"
        extraComponent={
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              width: {
                xs: '100%',
                md: '35%',
              },
            }}
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </Typography>
        }
      />
      <GetInTouch />
      <MapOverview />
    </Box>
  );
}

export default ContactUsPage;
