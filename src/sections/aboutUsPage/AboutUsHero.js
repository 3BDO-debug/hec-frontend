import React from 'react';
// material
import { Box, Card, Grid, Typography } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';

// -----------------------------------------------------------------------------------------

function AboutUsHero() {
  return (
    <SectionWrapper>
      <Grid container spacing={3} paddingBottom={10}>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant="overline">The Story</Typography>
          <Typography variant="h2">This Is Us, This Is Our Journey</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                width="560"
                height="315"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhollandegy%2Fvideos%2F243230893489725%2F&show_text=false&width=560&t=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </Card>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default AboutUsHero;
