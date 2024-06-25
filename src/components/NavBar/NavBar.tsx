import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import React from "react"

const NavBar: React.FC = () => {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly',
    }))

    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const target = event.target as HTMLLIElement;
      const sectionId = target.innerText.toLowerCase();
      const element = document.getElementById(`${sectionId.replace(" ","")}Section`);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <>
        <AppBar position="absolute">
            <StyledToolBar>
                <MenuItem onClick={handleClick}>About</MenuItem>
                <MenuItem onClick={handleClick}>Projects</MenuItem>
                <MenuItem onClick={handleClick}>Contact me</MenuItem>
            </StyledToolBar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  