import React , {useRef} from 'react'
import { Box, Button, styled, Typography , Grid , IconButton} from "@mui/material";
import { Link } from 'react-router-dom'
//img
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import headerImg from '../assets/crypto.webp'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
    {
      image: 'https://via.placeholder.com/800x400?text=Image+1',
      text: 'Stripe gives crypto businesses access to today’s global financial infrastructure. Whether you’re an established crypto business or simply exploring new possibilities, you can process payments for fiat currencies globally through a single integration – with fraud prevention and authorisation optimisation built in.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Image+2',
      text: 'Stripe gives crypto businesses access to today’s global financial infrastructure. Whether you’re an established crypto business or simply exploring new possibilities, you can process payments for fiat currencies globally through a single integration – with fraud prevention and authorisation optimisation built in.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Image+3',
      text: 'Stripe gives crypto businesses access to today’s global financial infrastructure. Whether you’re an established crypto business or simply exploring new possibilities, you can process payments for fiat currencies globally through a single integration – with fraud prevention and authorisation optimisation built in.',
    },
  ];


//   const useStyles = makeStyles({
//     arrow: {
//       color: 'white',
//       backgroundColor: 'black',
//       borderRadius: '50%',
//       padding: '10px',
//       '&:hover': {
//         backgroundColor: '#FFFF',
//       },
//     },
//   });
  
  const Arrow = ({ className, onClick, icon }) => (
    <IconButton sx={{border:'1px solid #FFFF'}} className={className} onClick={onClick} style={{ color: '#ffff' }}>
      {icon}
    </IconButton>
  );


const Header = () => {

    // const classes = useStyles();

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        // tamanhos
        gap: theme.spacing(4),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#002855',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    const sliderRef = useRef(null);

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      style: {
        
        overflow: 'hidden',
      }
    };

  return  (
       
            <Slider ref={sliderRef} {...settings}> 
            {sliderData.map((slide , index) => (
                <CustomBox key={index} component={'header'} position={'relative'} overflow={'hidden'}>
             <BoxText
            component='section'
            sx={{marginBottom:'15px'}}
            >
                <Grid container alignItems="center" mt={2}>
              <Grid item xs={1} sx={{marginRight:'10px'}}>
                <Arrow onClick={() => sliderRef.current.slickPrev()} icon={<ArrowBack />} />
              </Grid>
              <Grid item xs={8} textAlign={'center'}>
                <Typography color={'white'} variant="h6" component="div" align="center" textAlign={'start'}>
                  {slide.text}
                </Typography>
                <Box>
                    {/* <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#7D8CA3"
                        },
                        "&&:focus": {
                            backgroundColor: "#7D8CA3"
                        }
                    }}
                    >
                        buy now
                    </Button> */}
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#7D8CA3',
                            borderColor: '#7D8CA3',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore
                    </Button>
                </Box>
              </Grid>
              <Grid item xs={1} sx={{marginLeft:'10px'}}>
                <Arrow onClick={() => sliderRef.current.slickNext()} icon={<ArrowForward />} />
              </Grid>
            </Grid>

                
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    // paddingTop: '30px',
                    // alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '1.5',
                    // alignSelf: 'flex-end',
                },
            })}
            >
                <Grid container alignItems="center">
              <Grid item xs={1}>
                <Arrow   onClick={() => sliderRef.current.slickPrev()} icon={<ArrowBack />} />
              </Grid>
              <Grid item xs={9}>
                <img src={slide.image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
              </Grid>
              <Grid item xs={1} sx={{marginLeft:'10px'}}>
                <Arrow  onClick={() => sliderRef.current.slickNext()} icon={<ArrowForward />} />
              </Grid>
            </Grid>
            </Box>
                </CustomBox>
            ))}
            
            </Slider>

      
    )
}

export default Header