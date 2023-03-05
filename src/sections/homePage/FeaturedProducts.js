import React from 'react';
import Iconify from 'src/components/Iconify';
import { useState } from 'react';
// material
import { Box, Button, Chip, Container, Grid, Typography, useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
// components
import Product from 'src/components/ProductCard';

// ----------------------------------------------------------------------------

function FeaturedProducts() {
  const theme = useTheme();

  const [selectedFilter, setSelectedFilter] = useState('dogs-food');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <Container>
      <Grid sx={{ mt: -12 }} container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="overline" sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            Featured products
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Looking for something quickly ?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              sx={{ mr: 1, borderRadius: theme.shape.borderRadius }}
              startIcon={<Iconify icon="cil:dog" />}
              variant={selectedFilter === 'dogs-food' ? 'contained' : 'outlined'}
              onClick={() => handleFilterChange('dogs-food')}
            >
              Dogs Food
            </Button>
            <Button
              sx={{ borderRadius: theme.shape.borderRadius }}
              startIcon={<Iconify icon="fluent:animal-cat-24-regular" />}
              color="secondary"
              onClick={() => handleFilterChange('cats-food')}
              variant={selectedFilter === 'cats-food' ? 'contained' : 'outlined'}
            >
              Cats Food
            </Button>
          </Box>
        </Grid>
        {/* Featured products */}
        <Grid item xs={12}>
          <Grid container spacing={3} marginTop={6}>
            <Grid item xs={12} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} md={3}>
              <Product />
            </Grid>
            <Grid item xs={12} md={3}>
              <Product />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button startIcon={<VisibilityIcon />} sx={{ width: '100%', mt: 2 }}>
            View more
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeaturedProducts;
