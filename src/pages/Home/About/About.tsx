import { Grid, Typography, Box } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import SkillBox from "../../../components/SkillBox/SkillBox";

const About = () => {

    return (
      <>
        <Grid container p={4} id="aboutSection">
          <Grid item xs={12}>
            <Typography variant="h1" color="secondary.contrastText" textAlign="center">About me</Typography>
          </Grid>
          <Grid container item xs={12} display="flex" justifyContent="center" gap={{ xs: 0, md: 10 }}>
            <Grid  item xs={12} md={5} display="flex" justifyContent="end">
                <Box
                    height={180}
                    width={350}
                    my={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    p={2}
                    sx={{ border: '2px solid #dedede' }}
                    >
                    <WorkspacePremiumIcon fontSize="large" />
                    <Typography variant="body1" color="secondary.contrastText" textAlign="center">Experience</Typography>
                    <Typography variant="body2" color="secondary.contrastText" textAlign="center">1+ years</Typography>
                    <Typography variant="body2" color="secondary.contrastText" textAlign="center">Front-end Developer</Typography>
                </Box>  
            </Grid>
            <Grid item xs={12} md={5} display="flex" justifyContent="start">
                <Box
                    height={180}
                    width={350}
                    my={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="start"
                    p={2}
                    sx={{ border: '2px solid #dedede' }}
                    >
                    <SchoolIcon fontSize="large" />
                    <Typography variant="body1" color="secondary.contrastText" textAlign="center">Education</Typography>
                    <Typography variant="body2" color="secondary.contrastText" textAlign="center">Bachelor Degree in course</Typography>
                    <Typography variant="body2" color="secondary.contrastText" textAlign="center">Computer Science</Typography>
                </Box>  
            </Grid>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Box
                width={{ xs:"95%" , md:"80%" }}
                borderBottom="2px solid #979797"
                paddingBottom={3}
                textAlign= "justify"
                >
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>Currently, I am a Computer Science student at the University of the Amazon (UNAMA). My passion for computers has been evident for as long as I can remember, and I have always been very dedicated to my studies. With one year of experience in front-end programming, I have not yet formally worked in the field.</Typography>
                <br/>
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>My professional journey includes two internships so far. The first was at the Civil House of the Government of the State of Pará, where I performed administrative tasks such as preparing budget spreadsheets, Word documents, and managing the payment flows of the department. The second internship, at Compass UOL, involved participating in a learning track in Cloud Data Engineering. During this period, I gained knowledge in data analysis with Python, and I also learned to use Git, GitHub, Docker, and various AWS tools.</Typography>
                <br/>
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>Known for being a highly dedicated and committed individual, I constantly seek to learn new things and improve in everything I undertake. Additionally, I am very communicative and enjoy working in teams.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" color="secondary.contrastText" textAlign="center" pt={3}>Skills</Typography>
          </Grid>
          <Grid container item xs={12} display="flex" justifyContent="center" gap={{ xs : 0 , md : 5 }} mt={4}>
            <Box
                width={"80%"}
                height={{ xs: 200, md: 50}}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
            >
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="HTML" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="CSS" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="JavaScript" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="React" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="TypeScript" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="Material UI" />
                </Grid>
            </Box>
            <Box
                width={"80%"}
                height={{ xs: 200, md: 50}}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="Git/GitHub" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="AWS" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="SQL" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="Scrum" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="Figma" />
                </Grid>
                <Grid item xs={6} md={2} display="flex" justifyContent="center">
                    <SkillBox value="Canva" />
                </Grid>
            </Box>
          </Grid>
        </Grid>
      </>
    )
  }
  
  export default About
  