import React from 'react';
// material
import { Button, Card, Grid, Typography, useTheme } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import Iconify from 'src/components/Iconify';

// -------------------------------------------------------------------------------

function Advertisement() {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            sx={{
              backgroundImage: 'url(/images/advertisement.png)',
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
                <Typography variant="h2" sx={{ width: '50%', textTransform: 'capitalize' }}>
                  With H.E.C We Got You Covered with Choices your pet loves
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button startIcon={<Iconify icon="material-symbols:sound-detection-dog-barking" />} variant="contained">
                  Shop now
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Advertisement;
