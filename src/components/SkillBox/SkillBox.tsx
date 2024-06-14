import { Typography } from '@mui/material'
import { Box,styled } from '@mui/system'

interface SkillBoxProps {
    value: string
}

const SkillBox: React.FC<SkillBoxProps> = ({ value }) => {

    const StyledSkillBox = styled(Box)(() => ({
        background: "transparent",
        border: "1px solid #dedede",
        width: "80%",
        textAlign: "center",
    }))

    return (
      <>
        <StyledSkillBox>
           <Typography variant="body2" color="secondary.contrastText" textAlign="center">{value}</Typography>
        </StyledSkillBox>
      </>
    )
  }
  
  export default SkillBox

  