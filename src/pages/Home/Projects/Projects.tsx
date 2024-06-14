import { Typography, styled } from "@mui/material"

const Projects = () => {

    const StyledProjects= styled('div')(({theme}) => ({
        height: '100vh',  
        backgroundColor: theme.palette.primary.main,
        padding: '20px',
    }))

    return (
      <>
        <StyledProjects>
            <Typography variant="h2" color="primary.contrastText" textAlign="center" >Projects</Typography> 
        </StyledProjects>
      </>
    )
  }
  
  export default Projects
  