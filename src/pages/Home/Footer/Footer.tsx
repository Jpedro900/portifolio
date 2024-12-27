import { styled , Toolbar , MenuItem, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

    const StyledFooter = styled('footer')(({ theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: theme.palette.primary.main,
    }))

    const StyledToolBar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-evenly',
        color: theme.palette.primary.contrastText,
        width: '60%',
    }))

    return (
      <>
        <StyledFooter>
           <StyledToolBar>
                <MenuItem>
                    <a href="https://github.com/Jpedro900" target="blank" style={{color: 'white'}}>
                        <GitHubIcon fontSize="large"/>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="https://www.linkedin.com/in/jpedrocsouza/" target="blank" style={{color: 'white'}}>
                        <LinkedInIcon fontSize="large"/>
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="https://wa.me/5591992928285" target="blank" style={{color: 'white'}}>
                        <WhatsAppIcon fontSize="large"/>
                    </a>
                </MenuItem>
            </StyledToolBar>
            <Typography variant="body2" color="primary.contrastText">© 2024 - João Pedro Cavalcante - All rights reserved</Typography>
        </StyledFooter>
      </>
    )
  }
  
  export default Footer

  