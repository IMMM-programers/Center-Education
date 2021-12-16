import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import TableTeachers from './TableTeachers'

function MainContent() {
  return (
    <Container>
      <Navbar />
      <TableTeachers />
    </Container>
  )
}
const Container = styled.div`
  width: 80%;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`

export default MainContent
