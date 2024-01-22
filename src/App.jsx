import { useState } from 'react'
import NavBar from './Components/Navbar'
import ApiDataCard from './Components/Card'
import Container from '@mui/material/Container';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container maxWidth="lg">
     <NavBar />
     <ApiDataCard />
   </Container>
    </>
  )
}

export default App
