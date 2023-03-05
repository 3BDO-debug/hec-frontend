import React from 'react';
// material
import { Box, Button, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import Iconify from 'src/components/Iconify';

// --------------------------------------------------

function Hero() {
  const theme = useTheme();
  /* variants={animationVariants}
          initial="initial"
          animate="visible" */

  return (
    <Container>
      <Box sx={{ paddingTop: 20, paddingBottom: 20, bgcolor: theme.palette.primary.ligher }}>
        <Card
          sx={{
            backgroundImage: 'url(/images/hero.png)',
            pl: 8,
            pt: 12,
            pb: 12,
            pr: 8,
            backgroundPosition: 'right',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: theme.palette.primary.lighter,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2">Providing the Highest Quality Pet Food at Unbeatable Prices</Typography>
                <Typography
                  sx={{
                    mt: 1,
                    mb: 1,
                    '&:after': {
                      content: "'Prices!'",
                      textDecoration: 'underline',
                      ml: 1.2,
                      color: theme.palette.secondary.light,
                    },
                  }}
                  variant="h2"
                >
                  Get the Best Pet Food at Affordable
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Button startIcon={<Iconify icon="material-symbols:pets" />} variant="contained">
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default Hero;
