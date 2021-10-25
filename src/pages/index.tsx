import Head from 'next/head'
import Logo from '../assets/react-icon.svg'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Boilerplate - Next, React, Typescipt</title>
      </Head>
      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Victor Lima.</p>
    </Container>
  )
}

export default Home
