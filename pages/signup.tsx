import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Image from 'next/image'

const Signup = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [erro, setErro] = useState(null)

  const handleSignup = async (e: any) => {
    e.preventDefault()
    setErro(null)
    
    try {
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
      alert(err)
    }
    console.log(data)
    
  }

  return (
    <div className="outer">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4} className="mb-5" >
            <Image 
              src="/assets/MinderLogo.png"
              className='d-inline-block'
              width={320}
              height={70}
              layout='responsive'
              alt='MinderLogo'
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={5} className="mb-5" >
              <div className="inner">
                  <div>
                    <h1 className="text-center my-3 ">Signup</h1>
                    <Form onSubmit={handleSignup} { ...erro && <Alert color="danger">{erro}</Alert>}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={(e: any) =>
                            setData({
                                ...data,
                                email: e.target.value,
                            })
                            }
                            value={data.email}
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e: any) =>
                            setData({
                                ...data,
                                password: e.target.value,
                            })
                            }
                            value={data.password}
                        />
                        </Form.Group>
                        <div className="d-grid gap-3 pt-4">
                          <Button className="rounded" type="submit" variant="outline-light" size="lg">
                              Signup
                          </Button>
                          <Button className='bg-transparent border-0' variant="dark" size="lg">
                            <Link href="/login" passHref>
                              <h6 className='hover:text-black' >Already have an account?</h6>
                            </Link>
                          </Button>
                        </div>
                    </Form>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup