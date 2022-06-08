import type { NextPage } from 'next'
import Link from 'next/link'
import { Card, Container, Button, Col, Row } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Home: NextPage = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <div>
      <Container>
        <Row className="justify-content-md-left ">
          <Col xs={12} md={5} className="mb-5 pt-20" >
          <Image 
            src="/assets/MinderLogo.png"
            className='d-inline-block'
            width={320}
            height={70}
            layout='responsive'
          />
          </Col>
          
        </Row>
        <Row className="justify-content-md-left ">
          <Col>
            <h3 className="px-4 py-3 text-3xl">
                O Teu Organizador Pessoal
            </h3>
          </Col>
        </Row>
        <Row className="mt-48">
            {user ? (
              <>
                <div className="py-10 px-4">
                  <Button variant="outline-light"href="/dashboard" size="lg">
                    <Link href="/dashboard" passHref>
                      <h3>Go to my Dashboard</h3>
                    </Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="py-10 px-4">
                  <Button variant="outline-light" size="lg">
                    <Link href="/signup" passHref>
                      <h2>Signup</h2>
                    </Link>
                  </Button>
                  <Button className='bg-transparent border-0'variant="dark" size="lg">
                    <Link href="/login" passHref>
                      <h6>Or Login if you already have an account</h6>
                    </Link>
                  </Button>
                </div>
              </>
            )}
        </Row>
      </Container>
    </div>

  )
}

export default Home