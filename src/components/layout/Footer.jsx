import styles from './Footer.module.css'
import {FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa'

function Footer(){
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li className={styles.social_list}><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
      <p className={styles.copy_right}><span>Lucas Vieira</span> &copy; 2024</p>
    </footer>
  )
}

export default Footer