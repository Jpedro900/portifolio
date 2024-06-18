import { Grid, Typography, styled } from "@mui/material"
import ProjectBox from "../../../components/ProjectBox/ProjectBox"

const Projects = () => {

    const StyledProjectImage = styled('img')(({theme}) => ({
      width: '85%',
      border: `2px solid ${theme.palette.primary.contrastText}`,
    }))

    const StyledProjects= styled('div')(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        padding: '20px',
    }))

    return (
      <>
        <StyledProjects>
            <Typography variant="h1" color="primary.contrastText" textAlign="center" mb={4}>Projects</Typography> 
            <Grid container display="flex" justifyContent="center" gap={10} mb={4}>
              <Grid xs={12} md={5}>
                <ProjectBox>
                  <Grid container display="flex" flexDirection="column" mb={4}>
                    <Typography variant="body1" color="primary.contrastText">Project 2</Typography>
                    <Typography variant="body2" color="primary.contrastText">Jul 2023 - Dez 2023</Typography>
                  </Grid>
                  <Grid container display="flex" justifyContent="center">
                    <StyledProjectImage src="https://via.placeholder.com/150" alt="Project 1"/>
                    <Typography variant="body2" color="primary.contrastText" textAlign="justify" mt={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab earum adipisci perferendis deserunt? Quae beatae odit minus nostrum commodi. Cumque dolorem incidunt tempora, provident unde, qui vitae ipsa omnis dolore molestias delectus? Consectetur, voluptatibus.</Typography>
                    <Typography variant="body2" color="primary.contrastText" width="100%" textAlign="start" mt={3}>Tecnologies:</Typography>
                  </Grid>
                </ProjectBox>
              </Grid>
              <Grid xs={12} md={5}>
                <ProjectBox>
                  <Grid container display="flex" flexDirection="column" mb={4}>
                    <Typography variant="body1" color="primary.contrastText">Project 2</Typography>
                    <Typography variant="body2" color="primary.contrastText">Jul 2023 - Dez 2023</Typography>
                  </Grid>
                  <Grid container display="flex" justifyContent="center">
                    <StyledProjectImage src="https://via.placeholder.com/150" alt="Project 1"/>
                    <Typography variant="body2" color="primary.contrastText" textAlign="justify" mt={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ab earum adipisci perferendis deserunt? Quae beatae odit minus nostrum commodi. Cumque dolorem incidunt tempora, provident unde, qui vitae ipsa omnis dolore molestias delectus? Consectetur, voluptatibus.</Typography>
                    <Typography variant="body2" color="primary.contrastText" width="100%" textAlign="start" mt={3}>Tecnologies:</Typography>
                  </Grid>
                </ProjectBox>
              </Grid>
            </Grid>
        </StyledProjects>
      </>
    )
  }
  
  export default Projects
  