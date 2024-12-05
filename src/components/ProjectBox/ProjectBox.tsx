import { Box,styled } from '@mui/system'
import { ReactNode } from 'react'

interface SkillBoxProps {
    children: ReactNode
}

const SkillBox: React.FC<SkillBoxProps> = ({ children }) => {

    const StyledSkillBox = styled(Box)(() => ({
        background: "transparent",
        border: "1px solid #dedede",
        textAlign: "start",
        padding: '20px',
        height: '1150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }))

    return (
      <>
        <StyledSkillBox>
            {children}
        </StyledSkillBox>
      </>
    )
  }
  
  export default SkillBox

  