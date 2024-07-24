import { Link } from 'react-router-dom';
import styles from '../css/Home.module.css';

const Home = () => {
 return (
    <div className={styles.container}>
        <div className={styles.aboutMe}>
            <div className={styles.imageContainer}>
              <img src="../src/assets/images/gaetano.jpg" alt="foto di Gaetano Bondì" />
            </div>
            <p className='description'>
              Ciao, mi chiamo Gaetano Bondì e mi sono appena laureato in Ingegneria dell'Innovazione per le Imprese Digitali all'Università degli Studi di Palermo e questa è la mia storia.
            </p>
        </div>
        <div className={styles.socialButtons}>
          <Link to="https://www.instagram.com/gaetano.bondi/" target='_blank'><img src='../src/assets/instagram-logo.png' alt='logo Instagram' /></Link>
          <Link to="https://www.tiktok.com/@gaetano.bondi" target='_blank'><img src='../src/assets/tiktok-logo.png' alt='logo TikTok' /></Link>
        </div>
        <Link to="/percorso" className='button-35' style={{ marginBottom: '20px' }}>Il mio percorso di laurea</Link>
        <Link to="/persone" className='button-35'>Chi mi ha accompagnato</Link>
        <form action="https://www.paypal.com/donate" method="post" target="_top" style={{ marginTop: '20px' }}>
          <input type="hidden" name="hosted_button_id" value="3FG8J6XJ3U2SY" />
          <input type="image" src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Fai una donazione con il pulsante PayPal" />
          <img alt="" border="0" src="https://www.paypal.com/it_IT/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <p className='copyright'>Copyright © 2024</p>
    </div>
 );
}

export default Home;