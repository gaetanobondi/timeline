import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from '../css/People.module.css';
import { peopleData } from '../components/peopleData.js';

const People = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/'); // Torna alla pagina precedente
    };

    return (
        <div className={styles.container}>
            <button onClick={handleBackClick} className="back-button">
                <ArrowBackIosIcon />
            </button>
            <h1 style={{ textAlign: 'center' }}>Chi mi ha accompagnato</h1>
            <p style={{textAlign: 'center', margin: '10px 15px', color: 'darkgray'}}>Qui ho raccolto pochi pensieri per le persone che mi hanno supportato e sopportato in questo lungo percorso.</p>
            <p style={{textAlign: 'center', margin: '10px 15px', color: 'darkgray'}}>Ovviamente non è un elenco esaustivo e colgo l'occasione di ringraziare tutti quelli che mi conoscono, dagli amici di una vita, a chi è stato solo di passaggio. Grazie.</p>
            <p style={{textAlign: 'center', margin: '10px 15px', color: 'darkgray'}}>Siete stati tutti dei pezzi preziosi di questo puzzle, che sembrava disastroso, ma che si è rivelato fantastico.</p>
            <div className={styles.people}>
                {peopleData.map(person => {
                    const fullDescription = person.description.join(' ');
                    return (
                    <div key={person.id} className={styles.person}>
                        {person.images && (
                            <img src={person.images ? person.images[0].original : "https://via.placeholder.com/150"} alt={"Foto di " + person.fullName} />
                        )}
                        <div className={styles.description}>
                            <h2>{person.fullName}</h2>
                            <p>{fullDescription.trim().substring(0, 200)}...</p>
                            <Link className={styles.readMore} to={`/persone/${person.route}`}>Continua a leggere</Link>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default People;