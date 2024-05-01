import React from 'react';
import styled  from "styled-components";
import {Link } from "react-router-dom";
import'./../index.css';

import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';






const NavLogo = styled(Link)`
  padding:0 6px;
  text-decoration:none;
 font-weight:500;
 font-size:18px;
  width:80%; 
  color:white;
 
`;

const Nav = styled.div`
background-color:black;
width:100%;
height:60px;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index:10;
  
`;

const NavbarContainer = styled.div`

max-width:1200px;
padding:0 14px;
width:100%;
  display: flex;
  align-items:center;
  justify-content:space-between;
  font-size:1rem;
  

`;
const NavItems = styled.ul`

width:100%;
align-items:center;
justify-content:center;
gap:32px;
display:flex;
padding: 0 6px;
list-style:none;
@media screen and (max-width:760px) {
  display:none;
}

`;
const NavLi = styled.a`
color:white;
text-decoration:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
&:hover: {
  color:red;
}


`;
const ButtonContainer =styled.div`
width:100%%;
height:100%;
display:flex;
justify-content:end;
align-items:center;
padding:0 6px;
@media screen and (max-width:760px) {
  display:none;
}
`;
const MobileIcon = styled.div`
color:white;
height:100%;
display:flex;
align-items:center;
display:none;
@media screen and (max-width: 768px){
  display:block;
}
`;
const MObileMenu = styled.ul`
width:100%;
align-items:start;
justify-content:center;
gap:16px;
display:flex;
flex-direction:column;
padding: 0 6px;
list-style:none;
padding:12px 40px 24px 40px;
background:grey;
  position :absolute;
  top:60px;
  right:0;
  transition : all 0.6s ease-in-out;

  border-radius:0 0 10px 0 rgba(0 ,0 ,0, 0.2);
  transform: ${({ isOpen }) => isOpen ? "translateY(0)" : "translateY(-100)"};
  opacity: ${({ isOpen }) => isOpen ? "100%" : "0"};
  z-index: ${({ isOpen }) => isOpen ? "1000" : "100"};

`;

const Navbar = () => {
  const [isOpen,setIsOpen] =useState(false);
  return (
    <Nav>
      <NavbarContainer>
       
        <NavLogo to="/" >Nagendra portfoloio</NavLogo>

<MobileIcon onClick={() => setIsOpen(!isOpen)}>
  <MenuIcon  style={{color:"inherit"}}/>
</MobileIcon>

        <NavItems>
        <NavLi  href="#About" >About</NavLi>
        <NavLi href="#Skills" >Skills</NavLi>
   
        <NavLi href="#Contact">Contact</NavLi>
        
        </NavItems>
        {isOpen && (
        <MObileMenu isOpen={isOpen} >
          <NavLi onClick={() => setIsOpen(!isOpen)} href="#About" >About</NavLi>
          <NavLi onClick={() => setIsOpen(!isOpen)}  href="#Skills" >Skills</NavLi>

        <NavLi onClick={() => setIsOpen(!isOpen)}  href="Contact">Education</NavLi>
       
        </MObileMenu>

        )
        }

       
         </NavbarContainer>
         </Nav>

  )
}

export default Navbar
