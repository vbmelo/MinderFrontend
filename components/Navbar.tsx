import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

import styles from '../styles/Navbar.module.css'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <Navbar bg="#2cb3d3" variant="dark" expand="lg" sticky="top" className={styles.navbar_light}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Link href="/" passHref>
            <Navbar.Brand href="#home">
              <img
                  alt=""
                  src="https://media.discordapp.net/attachments/951497109167829012/981032411762675712/MinderM.png"
                  width="50"
                  height="35"
                  className="d-inline-block align-center"
              />
              {/* <img
                  alt=""
                  src="https://media.discordapp.net/attachments/951497109167829012/981032753124479016/MinderLogo.png"
                  width="150"
                  height="35"
                  className="d-inline-block align-center"
              /> */}
            </Navbar.Brand>
          </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Link href="/dashboard" passHref>
                  <Nav.Link>Dashboard</Nav.Link>
                </Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown" >
                  <NavDropdown.Item>Signed in as: <a href="">{user.email}</a></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => {
                      logout()
                      router.push('/login')
                    }}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

              </>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp