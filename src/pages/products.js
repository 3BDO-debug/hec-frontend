import React from 'react';
// material
import { Box, Grid } from '@mui/material';
// components
import ProductsHero from 'src/sections/productsPage/ProductsHero';
import ProductsOverview from 'src/sections/productsPage/ProductsOverview';
import Advertisement from 'src/sections/productsPage/Advertisement';

// ------------------------------------------------------------------

function ProductsPage() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <ProductsHero />
      <ProductsOverview />
      <Advertisement />
    </Box>
  );
}

export default ProductsPage;
