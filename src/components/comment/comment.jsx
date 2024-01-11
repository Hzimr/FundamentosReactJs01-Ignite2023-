import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.commet}>
      <img src="https://github.com/maykbrito.png"/>
      <div className={styles.coomentBox}>
        <div className={styles.commetContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time 
                title="11 de Janeiro de 2024 " 
                dateTime='11/01/2024 12:00:00'
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Mayk!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}