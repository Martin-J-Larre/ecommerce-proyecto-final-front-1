import { FaSearch } from 'react-icons/fa';
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';


const Container = styled.div`
    height: 60px;
`

const Spacing = styled.div`
    padding: 20px 40px;
    display: flex;   
    align-items: center;
    justify-content: space-between;
`

const NavLeft = styled.div`
    flex: 1;
    display: flex;    
    align-items: center;    
`
const Language = styled.span`   
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray; 
display: flex;    
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;    
`
const NavMiddle = styled.div`
    flex: 1;
    text-align: center;     
`

const Logo = styled.h1`
    font-weight: bold;     
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;      
`

const NavRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`


const Navbar = () => {
    return (
        <Container>
            <Spacing>
                <NavLeft>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <FaSearch style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </NavLeft>
                <NavMiddle>
                    <Logo>Ecommerce-Codehouses</Logo>
                </NavMiddle>
                <NavRight>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                        
                </NavRight>
            </Spacing>
        </Container>
    )
}

export default Navbar;