import React from 'react';
// material
import { Box, Button, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import Iconify from 'src/components/Iconify';

// ------------------------------------------------------------------

function ShopByCategories() {
  const theme = useTheme();

  return (
    <Container>
      <Grid sx={{ mt: 8 }} container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="overline">Browse via wide selections</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              '&:after': {
                content: "'Categories'",
                background: 'linear-gradient(45deg,#E38F25, #DB5226)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                ml: 1,
              },
            }}
          >
            Shop By
          </Typography>
        </Grid>
        <Grid container spacing={3} mt={0}>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundImage: 'url(/images/category-banner-1.png)',
                    pt: 12,
                    pb: 12,
                    pl: 8,
                    backgroundPosition: 'right',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: theme.palette.secondary.lighter,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h2" sx={{ width: '50%' }}>
                        High quality dog food
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        startIcon={<Iconify icon="material-symbols:sound-detection-dog-barking" />}
                        variant="contained"
                      >
                        Shop now
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundImage: 'url(/images/category-banner-2.png)',
                    pt: 12,
                    pb: 12,
                    pl: 8,
                    backgroundPosition: 'right',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: theme.palette.primary.lighter,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h2" sx={{ width: '50%' }}>
                        Make your pet more happy
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button startIcon={<Iconify icon="tabler:dog-bowl" />} variant="contained">
                        Shop now
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                backgroundImage: 'url(/images/category-banner-3.png)',
                pt: 12,
                pb: 12,
                pl: 8,
                backgroundPosition: 'right',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#dceac5',
                height: '100%',
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h2">Just in case of a hungry cat !</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button startIcon={<Iconify icon="fluent:animal-cat-24-regular" />} variant="contained">
                    Shop now
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShopByCategories;
