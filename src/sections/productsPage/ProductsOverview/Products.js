import React from 'react';
// material
import { Button, Grid, Typography } from '@mui/material';
import ProductCard from 'src/components/ProductCard';

// --------------------------------------------------------------------------------

function Products() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2">Browse Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button sx={{ width: '100%', mt: 3 }}>Load more</Button>
      </Grid>
    </Grid>
  );
}

export default Products;
