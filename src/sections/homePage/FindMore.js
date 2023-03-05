import React from 'react';
import { m as motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography } from '@mui/material';
//
import { varFade, MotionContainer } from 'src/components/animate';

// -------------------------------------------------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center',
  },
  marginBottom: 12,
}));

// -------------------------------------------------------------------------------------------------------------

function FindMore() {
  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionContainer
          variants={varFade().inUp}
          sx={{
            mb: { xs: 3, md: 0 },
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            <Box component="img" alt="rocket" src="/images/rocket.png" sx={{ maxWidth: 460, width: 1 }} />
          </motion.div>
        </MotionContainer>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <MotionContainer variants={varFade().inDown} sx={{ color: 'common.white', mb: 5 }}>
            <Typography variant="h2">
              Discover more with
              <br /> HEC today
            </Typography>
          </MotionContainer>
          <MotionContainer variants={varFade().inDown}>
            <Button
              size="large"
              variant="contained"
              target="_blank"
              href="https://material-ui.com/store/items/minimal-dashboard/"
              sx={{
                whiteSpace: 'nowrap',
                boxShadow: (theme) => theme.customShadows.z8,
                color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                bgcolor: 'common.white',
                '&:hover': { bgcolor: 'grey.300' },
              }}
            >
              Discover More
            </Button>
          </MotionContainer>
        </Box>
      </ContentStyle>
    </Container>
  );
}

export default FindMore;
