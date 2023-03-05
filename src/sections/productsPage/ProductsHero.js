import React from 'react';
// material
import { Box, Container, TextField, Typography } from '@mui/material';
// components
import PageIntro from 'src/sections/common/PageIntro';
import SearchBar from 'src/components/SearchBar';

// --------------------------------------------------------------------------------------------------

function ProductsHero() {
  return (
    <Box sx={{ marginTop: 18 }}>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/projects-intro-sm.jpg)',
          md: 'url(/images/fade-effect.svg), url(/images/products-banner.png)',
        }}
        subtitle="Products"
        title="Explore via wide selections"
        extraComponent={
          <Box sx={{ mt: 2 }}>
            <SearchBar />
          </Box>
        }
        centeredTitles
      />
    </Box>
  );
}

export default ProductsHero;
