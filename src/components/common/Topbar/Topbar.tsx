import Link from 'next/link'
import styles from './Topbar.module.scss'

interface topbarProps{
  register: string;
  registerLink: string;
  text: string
  info: string
}

const Topbar = ({register, registerLink, text, info}: topbarProps) => {
  return (
      <div className={styles['Topbar']}>

        <p className={styles['Topbar-mainText']}>
          <Link
            href={registerLink}
          >
            <a className={styles['Topbar-link']}>
              {register}
            </a>
          </Link>
          &nbsp;{text}
          <span className={styles['Topbar-mainText__info']}>&nbsp;*{info}</span>
        </p>
      </div>
  )
}

export default Topbar
