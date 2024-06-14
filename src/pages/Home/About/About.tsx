import { Grid, Typography, Box } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import SkillBox from "../../../components/SkillBox/SkillBox";

const About = () => {

    return (
      <>
        <Grid container p={4}>
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
                width={"80%"}
                borderBottom="2px solid #979797"
                paddingBottom={3}
                >
                <Typography variant="body2" color="secondary.contrastText" textAlign="justify" lineHeight={1}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate, optio vitae et exercitationem perspiciatis quidem iusto veniam aut, porro itaque illum aspernatur vero consectetur? Ducimus deserunt, reprehenderit dolores excepturi perferendis ex in quia, sit eius dolorem quam beatae similique distinctio. Libero, aspernatur. Necessitatibus dolorem delectus aliquam unde assumenda. Quasi est, rem dignissimos porro nemo harum architecto ut sit. Natus!</Typography>
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
  