import React from 'react';
// material
import { Box, Grid } from '@mui/material';
import PageIntro from 'src/sections/common/PageIntro';
import SectionWrapper from 'src/components/SectionWrapper';

// --------------------------------------------------------------------------------

function ProductDetailsPage() {
  return (
    <Box>
      <Box sx={{ marginTop: 18 }}>
        <PageIntro
          coverImageVariants={{
            xs: 'url(/images/fade-effect.svg), url(/images/projects-intro-sm.jpg)',
            md: 'url(/images/fade-effect.svg), url(/images/products-banner.png)',
          }}
          subtitle="Product Details"
          title="Explore via wide selections"
        />
      </Box>
      {/* Waht */}
      <SectionWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            whatever
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default ProductDetailsPage;
