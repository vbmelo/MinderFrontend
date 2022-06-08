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
            />
            </Col>
        </Row>
      </Container>
      
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
                <Button className="btn btn-dark btn-lg btn-block" type="submit">
                Login
                </Button>
                <Button className='bg-transparent border-0 m-2 px-2'variant="dark" size="lg">
                  <Link href="/signup" passHref>
                    <h6>Don't have an account?</h6>
                  </Link>
                </Button>
        
            </Form>
            </div>
        </div>
    </div>
      
    
  )
}

export default Login