  import { Box, styled, Typography } from "@mui/material"
  import { Grid } from "@mui/material"
  import Container from "@mui/material/Container"
  import avatar from '../../../assets/images/foto-jp.png'
  import DownloadIcon from '@mui/icons-material/Download'
  import EmailIcon from '@mui/icons-material/Email';
  import StyledButton from "../../../components/StyledButton/StyledButton"
  import { AnimatedBackground } from "../../../components/AnymatedBackground/AnymatedBackground"
  import { ReactTyped } from "react-typed"

  const resume = "https://drive.google.com/file/d/1A8SANtLTxvBXl7P_13IaN48tqR6eJ-Mo/view?usp=sharing"

  const DownloadResume = (url : string) => {
      const link = document.createElement('a')
      link.href = url
      link.target = '_blank'
      link.setAttribute('download', 'CV - Joao Pedro Cavalcante de Souza.pdf')
      document.body.appendChild(link)
      link.click()
      link.remove()
  }

  const Hero = () => {

      const StyledHero = styled('div')(({theme}) => ({
        height: '100vh',  
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
      }))

      const StyledAvatar = styled('img')(({theme}) => ({
        width: '85%',
        borderRadius: '50%',
        border: `2px solid ${theme.palette.primary.contrastText}`,
      }))

      return (
        <>
          <StyledHero>
            <Container maxWidth='lg'>
              <Grid container spacing={2} display="flex" alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box position="relative">
                    <Box position="absolute" width={"150%"} top={-100} right={0}>
                      <AnimatedBackground />
                    </Box>
                    <Box position="relative" textAlign="center">
                      <StyledAvatar src={avatar} alt="Avatar" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}> 
                  <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={1}>João Pedro Cavalcante</Typography>
                  <Typography color="primary.contrastText" variant="h2" textAlign="center">
                    <ReactTyped
                      strings={[
                        "I'm a Front-End Developer"
                      ]}
                      typeSpeed={80}
                    />
                  </Typography>
                  <Grid container display="flex" justifyContent="center" spacing={3} marginTop="15px">
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                      <StyledButton onClick={() => {
                        DownloadResume(resume)
                        }}>
                        <Typography variant="h6">Download CV</Typography>
                        <DownloadIcon />
                      </StyledButton>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                      <StyledButton onClick={() => document.getElementById('contactmeSection')?.scrollIntoView({ behavior:"smooth"})} >
                        <Typography variant="h6">Contact Me</Typography>
                        <EmailIcon />
                      </StyledButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </StyledHero>
        </>
      )
    }
    
    export default Hero
    
