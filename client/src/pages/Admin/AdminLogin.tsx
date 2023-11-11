import React from 'react'
import LoginForm from '../../components/LoginForm'
import styled from 'styled-components'

export default function AdminLogin() {
  return (
    <Container>
      <h2>Admin Login</h2>
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
  margin-top:2em;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`