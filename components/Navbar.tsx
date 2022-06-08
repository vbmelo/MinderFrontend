import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
              <Image 
                src="/assets/MinderM.png"
                className='d-inline-block'
                width={50}
                height={40}
                layout='fixed'
                alt='MinderLogoM'
              />
            </Navbar.Brand>
          </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Link href="/dashboard" passHref>
                  <Nav.Link>Dashboard</Nav.Link>
                </Link>
                <NavDropdown title={user.email} id="basic-nav-dropdown" >
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
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
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