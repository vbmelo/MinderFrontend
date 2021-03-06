import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Image from 'next/image'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
      alert(err)
    }
  }

  return (
    <div className="outer">
      <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={5} className="mb-5" >
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
                <div
                className='login_form'
                >
                <h1 className="text-center my-3 ">Login</h1>
                <Form onSubmit={handleLogin} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e: any) =>
                        setData({
                            ...data,
                            email: e.target.value,
                        })
                        }
                        value={data.email}
                        required
                        type="email"
                        placeholder="Enter email"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e: any) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                        }
                        value={data.password}
                        required
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Group>
                    <div className="d-grid gap-3 pt-4">
                      <Button className="rounded" type="submit" variant="outline-light" size="lg">
                        Login
                      </Button>
                      <Button className='bg-transparent border-0' variant="dark" size="lg">
                        <Link href="/signup" passHref>
                        <h6 className='hover:text-black' >Don&apos;t have an account?</h6>
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

export default Login