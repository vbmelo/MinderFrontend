import React from 'react'
import Link from 'next/link'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Image from 'next/image'


const Dashboard = () => {
  const { user } = useAuth()
  return (
    <div>
      <Container>
      <Row className="justify-content-md-center p-10">
        <Col lg="4">
          <Link href="http://localhost:3001/trello-clone#/" passHref>
            <Image 
              src="/assets/MinderLogo.png"
              className='d-inline-block'
              width={320}
              height={70}
              layout='responsive'
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


