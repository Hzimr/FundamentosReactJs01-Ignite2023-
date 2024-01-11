import { Header } from './components/header'
import { Post } from './post'
import './styles.css'

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Hítalo Rodrigues" 
        content="Legal Text"
      />
      <Post 
        author="D Rodrigues" 
        content="Show d"
      />
    </div>
  )
}