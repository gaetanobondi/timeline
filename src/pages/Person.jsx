import React from 'react';
import styles from '../css/People.module.css';
import stylesPerson from '../css/Person.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { peopleData } from '../components/peopleData.js';

const Person = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/persone'); // Torna alla pagina precedente
    };
    const { name } = useParams();

    const person = peopleData.find(p => p.route === name);

    React.useEffect(() => {
        if (!person) {
            navigate('/404');
        }
    }, [person, navigate]);

    if (!person) {
        return null; // or some loading indicator
    }

    return (
        <div>
            <button onClick={handleBackClick} className="back-button">
                <ArrowBackIosIcon />
            </button>
            <div className={stylesPerson.container}>
                <div className={stylesPerson.person}>
                    <div className={stylesPerson.description}>
                        <h2>{person.fullName}</h2>
                        {person.description.map((paragraph, index) => (
                            <p key={index} style={{ margin: '0 0 20px 0' }}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                {person.images && (
                    <ImageGallery items={person.images} />
                )}
            </div>
        </div>
    );
}

export default Person;