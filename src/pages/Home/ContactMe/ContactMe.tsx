import { Grid, Typography , styled } from "@mui/material"
import FormEmail from "../../../components/FormEmail/FormEmail"

const ContactMe = () => {

    const StyledContactMe = styled('div')(() => ({
        padding: '20px',
        height: '60vh',
    }))

    return (
      <>
        <StyledContactMe>
            <Typography variant="h1" color="secondary.contrastText" textAlign="center" mb={4}>Contact Me</Typography>
            <Grid container height="80%" display="flex" justifyContent="center">
                <FormEmail />
            </Grid>
        </StyledContactMe>
      </>
    )
  }
  
  export default ContactMe

  