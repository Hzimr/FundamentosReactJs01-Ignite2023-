import { Header } from './components/header/header'
import { Post } from './post'
import './global.css'
import styles from './AppStyles.module.css'
import { Sidebar } from './components/sidebar/sidebar'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Hítalo Rodrigues" 
          content="Legal Text"
          />
          <Post 
          author="D Rodrigues" 
          content="Show d"
          />
        </main>
      </div>
    </div>
  )
}