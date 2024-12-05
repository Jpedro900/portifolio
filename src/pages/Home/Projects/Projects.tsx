import { Grid, Typography, styled } from "@mui/material"
import ProjectBox from "../../../components/ProjectBox/ProjectBox"

import pillpal from '../../../assets/images/pillPal.png'
import dessertCart from '../../../assets/images/dessert-cart.png'

const Projects = () => {

    const StyledProjectImage = styled('img')(() => ({
      width: '85%',
    }))

    const StyledProjects= styled('div')(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        padding: '20px',
    }))

    const StyledLink = styled('a')(({theme}) => ({
      color: theme.palette.primary.contrastText,
      textDecoration: 'subline',
      '&:hover': {
        color: theme.palette.secondary.main,
      }
    }))

    return (
      <>
        <StyledProjects id='projectsSection'>
            <Typography variant="h1" color="primary.contrastText" textAlign="center" mb={4}>Projects</Typography> 
            <Grid container display="flex" justifyContent="center" gap={10} mb={4}>
              <Grid xs={12} md={5}>
                <ProjectBox>
                  <Grid container display="flex" flexDirection="column" mb={4}>
                    <Typography variant="body1" color="primary.contrastText">PillPal</Typography>
                    <Typography variant="body2" color="primary.contrastText">Mar 2024 - Jun 2024</Typography>
                    <Typography variant="body2" color="primary.contrastText" mt={1}>Github: <StyledLink href="https://github.com/Jpedro900/PillPal" target="blank" >https://github.com/Jpedro900/PillPal</StyledLink></Typography>
                  </Grid>
                  <Grid container display="flex" justifyContent="center">
                    <StyledProjectImage src={pillpal} alt="Project 1"/>
                    <Typography variant="body2" color="primary.contrastText" textAlign="justify" mt={4}>I developed, in collaboration with five colleagues, the mobile application PillPal as the final project for the Mobile Programming course in the 3rd semester of my Computer Science degree at UNAMA. PillPal is a practical solution designed to help users manage their medication schedule by setting personalized alerts, ensuring timely and accurate medication administration. This project gave me valuable experience in mobile app development, teamwork, and project management, enhancing my understanding of both technical and collaborative aspects of software development.</Typography>
                    <Typography variant="body2" color="primary.contrastText" width="100%" textAlign="start" mt={3}>Technologies used: React Native, Tailwind CSS.</Typography>
                  </Grid>
                </ProjectBox>
              </Grid>
              <Grid xs={12} md={5}>
                <ProjectBox>
                  <Grid container display="flex" flexDirection="column" mb={4}>
                    <Typography variant="body1" color="primary.contrastText">Project 1</Typography>
                    <Typography variant="body2" color="primary.contrastText">Jul 2023 - Dez 2023</Typography>
                    <Typography variant="body2" color="primary.contrastText" mt={1}>Github: <StyledLink href="https://github.com/Jpedro900/dessert-cart" target="blank" >https://github.com/Jpedro900/dessert-cart</StyledLink></Typography>
                    <Typography variant="body2" color="primary.contrastText" mt={1}>Site: <StyledLink href="https://jpedro900.github.io/dessert-cart/" target="blank" >https://jpedro900.github.io/dessert-cart/</StyledLink></Typography>
                  </Grid>
                  <Grid container display="flex" justifyContent="center">
                    <StyledProjectImage src={dessertCart} alt="Project 1"/>
                    <Typography variant="body2" color="primary.contrastText" textAlign="justify" mt={4}>I developed the Vite + React Project as an individual project, focusing on creating a dynamic and responsive front-end application. Using Vite as the bundler and React as the UI framework, I aimed to build an optimized and modern shopping cart system. The project also integrates Tailwind CSS for styling, ensuring a sleek and responsive design that adapts to various screen sizes.
                    In this project, I implemented a shopping cart system with features such as adding and removing items, adjusting quantities, and calculating the total price in real-time. Additionally, I configured Prettier with the prettier-plugin-tailwindcss plugin to ensure the consistent formatting of Tailwind classes.
                    This project was a great learning experience for me in terms of front-end development, optimizing workflows with Vite, and using modern tools for building responsive web applications.</Typography>
                    <Typography variant="body2" color="primary.contrastText" width="100%" textAlign="start" mt={3}>Technologies used: Vite, React, Tailwind CSS, Prettier</Typography>
                  </Grid>
                </ProjectBox>
              </Grid>
            </Grid>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects
  