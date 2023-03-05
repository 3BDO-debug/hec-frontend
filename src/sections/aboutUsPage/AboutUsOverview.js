import { Box, Button, Card, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
// material
import SectionWrapper from 'src/components/SectionWrapper';

// -------------------------------------------------------------------------------

function AboutUsOverview() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[200], paddingBottom: 12 }}>
      <SectionWrapper>
        <Grid container columnSpacing={16}>
          {/* Typography */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="overline">Overview</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ textTransform: 'capitalize' }} variant="h2">
                  How we started
                </Typography>
              </Grid>
              <Grid item xs={12}>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box component="img" src="/images/about-us-overview.jpg" />
            </Card>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default AboutUsOverview;
