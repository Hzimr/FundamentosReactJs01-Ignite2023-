import styles from './postStyles.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https:/github.com/diego3g.png" 
            alt="" 
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
          <time title="11 de Janeiro de 2024 " dateTime='11/01/2024 12:00:00'>Publicado há 1h</time>
        </div>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p><br/>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p><br/>
        <p> <a href="">👉 jane.design/doctorcare</a></p>
        <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}