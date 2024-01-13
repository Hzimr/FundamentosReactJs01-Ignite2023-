import { Comment } from '../comment/comment'
import { Avatar } from '../avatar/avatar'

import styles from './postStyles.module.css'

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Janeiro de 2024 " dateTime='11/01/2024 12:00:00'>       {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p><br/>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p><br/>
        <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
        <p> 
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        Deixe seu feedback
        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}