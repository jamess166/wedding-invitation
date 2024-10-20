import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';


const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const StyledImage = styled(Box)(({ theme }) => ({
  width: '65%',
  maxWidth: '400px',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
  transform: 'rotate(10deg)',
  border: '3px solid white',
  marginTop: '-40px',
  transition: 'transform 0.3s ease',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    width: '70%',
    border: '5px solid white',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: '-60px',
  right: '-60px',
  color: 'black',
  fontSize: '1.8rem',
  textAlign: 'right',
  zIndex: 3,
  transform: 'translate(-50%, -50%) rotate(-10deg)',
  [theme.breakpoints.up('sm')]: {
    bottom: '-80px',
    right: '-80px',
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    bottom: '-100px',
    right: '-100px',
    fontSize: '2.3rem',
  },
}));

const ResponsiveGridComponent = ({ imageSrc, allura }) => (
  <StyledGrid
    item
    xs={12}
    sm={6}
    sx={{ order: { xs: 1, sm: 2 }, position: 'relative' }}
  >
    <StyledImage
      component="img"
      src={imageSrc}
      alt="Perfil"
    />
    {/* <StyledTypography className={allura.className}>
      Porque dos personas
      <br />
      se enamoraron
    </StyledTypography> */}
  </StyledGrid>
);

export default ResponsiveGridComponent;