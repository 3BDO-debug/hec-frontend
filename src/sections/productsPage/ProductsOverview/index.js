import React from 'react';
// material
import { Grid, useTheme } from '@mui/material';
import SectionWrapper from 'src/components/SectionWrapper';
import ProductsFilter from './ProductsFilter';
import Products from './Products';

// ------------------------------------------------------------------------------

function ProductsOverview() {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ borderRight: `1px solid ${theme.palette.grey[400]}`, pr: 2 }}>
          <ProductsFilter />
        </Grid>
        <Grid item xs={12} md={9}>
          <Products />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default ProductsOverview;
