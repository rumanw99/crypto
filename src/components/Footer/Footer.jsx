import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'start',
    // border : '1px solid black',
    padding: '20px'
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Our Story'} />
        <FooterLink 
        text={'Founded in 2023 and based in the vibrant city of Dubai, B2B-Ultimate has swiftly established itself as a leader in the fintech industry.'} 
        />
        <FooterLink 
        text={'We specialize in providing comprehensive white-label solutions for crypto exchanges, payment gateways, crypto cards, ATMs, and POS machines.'} 
        />
        <FooterLink 
        text={'Our team of dedicated professionals combines extensive industry knowledge with innovative technology to deliver tailored solutions that meet the evolving needs of our B2B clients.'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Our Mission'} />
        <FooterLink text={'At B2B-Ultimate, our mission is to empower businesses by offering cutting-edge financial technology solutions that enhance operational efficiency and drive growth. '} />
        <FooterLink text={'We are committed to delivering exceptional value through our white-label services, enabling our clients to offer secure, reliable, and user-friendly financial products under their own brand.'} />
        
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'What We Offer'} />
        <FooterLink text={'Crypto Exchanges: Customized white-label solutions that allow you to launch your own crypto exchange with ease.'} />
        <FooterLink text={'Payment Gateways: Secure and efficient payment gateway solutions tailored to your business needs.'} />
        <FooterLink text={'Crypto Cards: White-label crypto card services that enable your customers to seamlessly spend their cryptocurrency.'} />
        <FooterLink text={'ATMs and POS Machines: Advanced ATMs and POS solutions designed for modern financial transactions.'} />
      </StackColumn>

      <StackColumn>
      <FooterTitle text={'Why Choose Us?'} />
<FooterLink text={'Expertise: Our team comprises seasoned professionals with extensive experience in the fintech industry.'} />
<FooterLink text={'Customization: We offer highly customizable solutions that cater to your specific business requirements.'} />
<FooterLink text={'Support: We provide ongoing support to ensure the smooth operation of your services.'} />
<FooterLink text={'Innovation: We leverage the latest technologies to keep you at the forefront of the financial services industry.'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Join Us'} />
        {/* <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2022 B2B Ultimate Inc.
        </Typography> */}
        <FooterLink text={'Join the growing list of satisfied clients who trust B2B-Ultimate for their fintech needs. Together, we can transform the way financial services are delivered, making them more accessible, efficient, and secure for everyone.'} />
        <FooterLink text={'Feel free to tweak this content to better suit your company’s specific tone and style. Including testimonials or case studies can also add credibility and provide prospective clients with tangible examples of your work.'} />
      </StackColumn>
    </BoxRow>
  )
}

export default Footer