import React, { useState } from 'react';
// material
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
// components
import Iconify from 'src/components/Iconify';

// -------------------------------------------------------------------------

function ProductsFilter() {
  const theme = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('dogs-food');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <Grid container spacing={3}>
      {/* Filter by categories */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ textTransform: 'capitalize' }} variant="h4">
            Filter by categories
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <Button
              sx={{ mr: 1, borderRadius: theme.shape.borderRadius }}
              startIcon={<Iconify icon="cil:dog" />}
              color="primary"
              variant={selectedFilter === 'dogs-food' ? 'contained' : 'outlined'}
              onClick={() => handleFilterChange('dogs-food')}
            >
              Dogs
            </Button>
            <Button
              sx={{ borderRadius: theme.shape.borderRadius }}
              startIcon={<Iconify icon="fluent:animal-cat-24-regular" />}
              color="secondary"
              onClick={() => handleFilterChange('cats-food')}
              variant={selectedFilter === 'cats-food' ? 'contained' : 'outlined'}
            >
              Cats
            </Button>
          </Box>
        </Box>
      </Grid>
      {/* Filter by brands */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ textTransform: 'capitalize', mt: 2 }} variant="h4">
            Filter by brands
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
            <Box sx={{ mr: 1, mt: 2 }}>
              <Chip clickable sx={{ backgroundColor: theme.palette.primary.lighter }} label="Champ" />
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* Announcements banner */}
      <Grid item xs={12}>
        <Card>
          <CardMedia component="img" src="/images/products-announcement.png" sx={{ filter: 'brightness(0.6)' }} />

          <Box sx={{ position: 'absolute', bottom: 80, pl: 3, display: 'flex', flexDirection: 'column' }}>
            <Typography color="common.white" variant="h4">
              Save 40% with Arion products
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Button variant="contained" color="secondary">
                Learn more
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductsFilter;
