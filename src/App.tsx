import { Header } from './components/header/header'
import { Post, PostType } from './components/post/post'
import './global.css'
import styles from './AppStyles.module.css'
import { Sidebar } from './components/sidebar/sidebar'
// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/hzimr.png',
      name: 'Hítalo Rodrigues',
      role: 'Desenvolvedor',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-01 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                post={post}
              />)
          })}
        </main>
      </div>
    </div>
  )
}