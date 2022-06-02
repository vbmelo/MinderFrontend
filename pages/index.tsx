import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Card, Container, Button, Nav, NavDropdown } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Titulo from '../components/Titulo'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  return (
    <div>
      <Container>
        <img src="https://media.discordapp.net/attachments/951497109167829012/981032753124479016/MinderLogo.png" alt="Minder"
        className="d-inline-block align-center mt-20"
        width="600"
        />
        <div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="px-4 py-3 text-3xl">
              O Teu Organizador Pessoal
          </h1>
        </div>
        <div className="mt-20">
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
                  <Button className='bg-transparent'variant="bg-transparent" size="lg">
                    <Link href="/login" passHref>
                      <h6>Or Login if you already have an account</h6>
                    </Link>
                  </Button>
                </div>
              </>
            )}
        </div>
      </Container>
    </div>

  )
}

export default Home