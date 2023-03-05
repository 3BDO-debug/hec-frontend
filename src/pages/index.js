// material
import { Box } from '@mui/material';
//
import Hero from 'src/sections/homePage/Hero';
import FeaturedProducts from 'src/sections/homePage/FeaturedProducts';
import ShopByCategories from 'src/sections/homePage/ShopByCategories';
import AboutUs from 'src/sections/homePage/AboutUs';
import FindMore from 'src/sections/homePage/FindMore';

// ---------------------------------------------------------------------------------------------

export default function HomePage() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      <FeaturedProducts />
      <ShopByCategories />
      <AboutUs />
      <FindMore />
    </Box>
  );
}
