import React from 'react';
// material
import { Box, Typography } from '@mui/material';
// components
import PageIntro from 'src/sections/common/PageIntro';
import AboutUsOverview from 'src/sections/aboutUsPage/AboutUsOverview';
import AboutUsHero from 'src/sections/aboutUsPage/AboutUsHero';

// -----------------------------------------------------------

function AboutUsPage() {
  return (
    <Box sx={{ overflow: 'hidden', marginTop: 18 }}>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/projects-intro-sm.jpg)',
          md: 'url(/images/fade-effect.svg), url(/images/about-us-banner.png)',
        }}
        subtitle="About Us"
        title="Know More About Our Story"
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
      <AboutUsOverview />
      <AboutUsHero />
    </Box>
  );
}

export default AboutUsPage;
