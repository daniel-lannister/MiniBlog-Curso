//CSS
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste em um mini blog feito com Reatch no front end e Firebase no back end</p>
        <Link to='/post/create' className='btn'>Criar post</Link>
    </div>
  )
}

export default About