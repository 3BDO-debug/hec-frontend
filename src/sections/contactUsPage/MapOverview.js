import React from 'react';
// material
import { Grid, Typography } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import Map from 'src/components/map/Map';

// ----------------------------------------------------------------------------------------------------------------

function MapOverview() {
  return (
    <SectionWrapper>
      <Grid
        container
        spacing={3}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid item xs={12}>
          <Typography variant="overline">Location</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Find Us On Map</Typography>
        </Grid>
        <Grid item xs={12}>
          <Map
            location={{
              address: '1600 Amphitheatre Parkway, Mountain View, california.',
              lat: 37.42216,
              lng: -122.08427,
            }}
            zoomLevel={17}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default MapOverview;
