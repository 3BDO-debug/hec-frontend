import React from 'react';
import PropTypes from 'prop-types';
// material
import { Box, Container, Grid, styled, Typography } from '@mui/material';
// components
import { MotionViewport, TextAnimate } from 'src/components/animate';

// -----------------------------------------------------------------------------------------------------------

PageIntro.propTypes = {
  coverImageVariants: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function PageIntro({ coverImageVariants, subtitle, title, extraComponent, centeredTitles }) {
  return (
    <Box
      sx={{
        backgroundImage: coverImageVariants,
        height: '260px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: {
          xs: '120%',
          md: '100%',
        },
      }}
    >
      <MotionViewport>
        <Container>
          <Grid
            container
            spacing={1}
            paddingY={5}
            sx={centeredTitles && { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <Grid item xs={12}>
              <Typography variant="overline" color="white">
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: {
                    xs: '87%',
                    md: '100%',
                  },
                }}
              >
                <TextAnimate text={title} isGradient textVariant="h2" />
              </Box>

              {/*  <GradientText
                sx={{
                  width: {
                    xs: '100%',
                    md: '50%',
                  },
                }}
                variant="gradientText"
                color="white"
              >
                {title}
              </GradientText> */}
            </Grid>
            <Grid item xs={12}>
              {extraComponent}
            </Grid>
          </Grid>
        </Container>
      </MotionViewport>
    </Box>
  );
}

export default PageIntro;
