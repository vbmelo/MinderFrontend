import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Container, Nav, Navbar, Card, Col, Row, Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'


const Dashboard = () => {
  const { user, logout } = useAuth()
  return (
    <div>
      <Container>
      <Row className="justify-content-md-center p-10">
        <Col lg="4">
          <Link href="http://localhost:3001/trello-clone#/" passHref>
            <img src="https://media.discordapp.net/attachments/951497109167829012/981032753124479016/MinderLogo.png" alt="Minder"
            className="d-inline-block"
            />
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center text-gray-200">
        <h3>Welcome, {user.email}</h3>
      </Row>
      <Row className="justify-content-md-center m-5">
            <Button variant="outline-light"size="lg">
              <Link href="http://localhost:3001/trello-clone#/" passHref>
                <h3>Go to my Minder Boards</h3>
              </Link>
            </Button>
        </Row>
      </Container>
    </div>
    
  )
}

export default Dashboard


