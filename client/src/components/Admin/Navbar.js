import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
function Navbar() {
  return (
    <NavbarContainer>
      <Text>
        Good morning,
        <span> Mohammed</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
      </InputContainer>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin: 25px 0 40px 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`

const Text = styled.h1`
  font-size: 22px;
  span {
    font-weight: 500;
    color: #172e88;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`
const InputContainer = styled.div`
  display: flex;
`

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #b8ccf1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`
const Input = styled.input`
  border: none;
  background-color: #b8ccf1;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`

export default Navbar
