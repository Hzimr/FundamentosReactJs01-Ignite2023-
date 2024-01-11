import styles from './sidebarStyles.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/hzimr.png" alt="usuário da aplicação"/>
        <strong>Hítalo</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={16} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}