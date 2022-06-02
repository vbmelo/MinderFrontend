import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div className="outer">
      <Container>
      <Row className="justify-content-md-center mb-20">
        <Col lg="3">
        <img src="https://media.discordapp.net/attachments/951497109167829012/981032753124479016/MinderLogo.png" alt="Minder"
        className="d-inline-block"
        width="400"
        />
        </Col>
      </Row>
      </Container>
        <div className="inner">
            <div>
                <h1 className="text-center my-3 ">Signup</h1>
                <Form onSubmit={handleSignup}>
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

                    <Button className="btn btn-dark btn-lg btn-block" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>

        </div>
    </div>
    
  )
}

export default Signup