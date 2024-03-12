import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CreateIcon from '@mui/icons-material/Create';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import phone from './phone.jpg'
import Button from '@mui/material/Button';



function App() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#424242' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Edunox App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: '20px 0' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item textAlign="center">
            <Card sx={{
              width: { xs: 350, lg: 600 },
              height: { xs: 200, lg: 300 }
            }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 1
                </Typography>
                <Typography variant="body2" component="div">
                  This is a card in the middle
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: '20px 0' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item textAlign="center">
            <Card sx={{
              width: { xs: 150, lg: 290 },
              height: { xs: 140, lg: 150 },
              backgroundColor: '#B0F8F2'
            }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 2
                </Typography>
                <Typography variant="body2" component="div">
                  Below the first card
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item textAlign="center">
            <Card sx={{
              width: { xs: 150, lg: 290 },
              height: { xs: 140, lg: 150 },
              backgroundColor: '#b3b3ff'
            }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 3
                </Typography>
                <Typography variant="body2" component="div">
                  Also below the first card
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#B0F8F2', marginTop: '10px', padding: '20px 0', }}>
        <Typography variant="h4" component="div" sx={{ color: 'black', textAlign: 'center', fontStyle: 'Verdana', fontSize: '24px', marginBottom: '20px' }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item lg={4} textAlign="center">
            <PeopleAltIcon />
            <Typography variant="subtitle1" component="div" sx={{ color: 'black', marginTop: '10px', fontStyle: 'Verdana', fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
              Learn in the <br />SLATY community
            </Typography>
          </Grid>
          <Grid item lg={4} textAlign="center">
            <CreateIcon />
            <Typography variant="subtitle1" component="div" sx={{ color: 'black', marginTop: '10px', fontStyle: 'Verdana', fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
              Access to all academic <br />courses
            </Typography>
          </Grid>
          <Grid item lg={4} textAlign="center">
            <MonetizationOnIcon />
            <Typography variant="subtitle1" component="div" sx={{ color: 'black', marginTop: '10px', fontStyle: 'Verdana', fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
              Earn opportunities<br /> as a tutor
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: 'white', padding: '20px 0', }}>

        <Grid container spacing={3} justifyContent="center">
        <Grid item  md={6} textAlign="center">
            <CardMedia
              sx={{width: { xs: 180, lg: 'auto' },height: { xs: 'auto', lg: 150 },marginLeft:'10px',}}
              component="img"
              image={phone}
              alt="phone
                                "
            />
          </Grid>
          <Grid item  md={6} textAlign="center">
            <Grid item textAlign="center">
              <Typography variant="h4" component="div" sx={{ color: '#00e6ac', marginTop: '10px',marginLeft:'20px', fontStyle: 'Verdana', fontSize: { xs: '12px', md: '14px', lg: '16px' } }}>
                <b>We give access <br />to all you need to be <br />the best!</b>
              </Typography>
            </Grid>
            <br />
            

              <Button sx={{
                width: { xs: 180, lg: 320 },
                height: { xs: 40, lg: 70 },
                backgroundColor: '#DCE9E8 ',
                borderRadius: '20px',
                fontStyle: 'Verdana', fontSize: { xs: '12px', md: '8px', lg: '12px' } 
              }} variant="contained"><Typography variant="h4" component="div" sx={{ color: '#FFFFFF', marginTop: '10px', fontStyle: 'Verdana', fontSize: { xs: '8px', md: '5px', lg: '16px' } }}> Enter yourEmail here..</Typography><Button variant="contained" sx={{  marginTop: '10px', marginBottom: '10px',fontStyle: 'Verdana', fontSize: { xs: '8px', md: '5px', lg: '12px' },borderRadius: '20px', }}>Submit</Button></Button>

            


          </Grid>
        </Grid>

      </Box>
      <Box sx={{ backgroundColor: '#DCE9E8 ', padding: '20px 0', height: '20px' }}>

      </Box>
    </Box>
  );
}

export default App;
