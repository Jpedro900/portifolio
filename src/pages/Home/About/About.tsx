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
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>Atualmente, sou estudante de Ciência da Computação na Universidade da Amazônia (UNAMA). Sou apaixonado por computadores desde que me entendo por gente e sempre fui muito dedicado aos estudos. Tenho um ano de experiência em programação front-end, embora ainda não tenha trabalhado formalmente na área. </Typography>
                <br/>
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>Realizei dois estágios até o momento. No primeiro, na Casa Civil da Governadoria do Estado do Pará, desempenhei tarefas administrativas, como a elaboração de planilhas de orçamento, documentos em Word e a gestão dos fluxos de pagamento do órgão. No segundo estágio, na Compass UOL, participei de uma trilha de aprendizado em Cloud Data Engineering. Durante essa experiência, adquiri conhecimentos em análise de dados com Python, além de aprender a utilizar Git, GitHub, Docker e diversas ferramentas da AWS.</Typography>
                <br/>
                <Typography variant="body2" color="secondary.contrastText" lineHeight={1}>Sou uma pessoa muito dedicada e comprometida com meus objetivos. Sempre busco aprender coisas novas e me aperfeiçoar em tudo que faço. Além disso, sou muito comunicativo e gosto de trabalhar em equipe.</Typography>
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
  