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
      <Container className="grid grid-rows-3 grid-flow-col">
        <Row className="grid grid-rows-3 grid-flow-col gap-4 row-span-3">
          <Col xs={12} md={6} className="mb-3 pt-20" >
            <Image 
              src="/assets/MinderLogo.png"
              className='d-inline-block'
              width={320}
              height={70}
              layout='responsive'
              alt='MinderLogo'
            />
            <h3 className="px-4 text-gray-100">
              Your personal organizer
            </h3>
            <h4 className="px-4 pt-12 text-gray-100">
              Organize,<br/>
              Reorganize, <br/>
              Give a Boost in your productivity,<br/>
              It's never been easier to manage your tasks!
            </h4>
            <div className="pt-20 px-4 text-gray-200">
              {user ? (
                <>
                  <div className="">
                    <Button variant="outline-light"href="/dashboard" size="lg">
                      <Link href="/dashboard" passHref>
                        <h3>Go to my Dashboard</h3>
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="">
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
            </div>   
          </Col>
          <Col className="justify-end pt-48" id="ImgPropLista">
            <Image 
              src="/assets/HomePropLista.png"
              width={500}
              height={500}
              layout='intrinsic'
              alt='HomePropLista'
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-md-center px-4">
          <h4 className="text-gray-200">
            What is Minder?
          </h4>
          <h5 className="text-gray-200"> 
            Minder is the visual tool that empowers you to manage any type of project, workflow, or task.
          </h5>
        </Row>
      </Container>
    </div>

  )
}

export default Home