import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RoadMapItem from '../components/RoadMapItem';
import { roadmapData } from '../components/RoadmapData';
import '../css/road.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const RoadMap = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/'); // Torna alla pagina precedente
  };

  const video = [
    {
      renderItem: () => (
        <div className="video-wrapper">
          <video controls>
            <source src="../../src/assets/images/percorso/video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <section className="roadmap">
        <button onClick={handleBackClick} className="back-button">
          <ArrowBackIosIcon />
        </button>
        <h1>Il percorso di laurea di Gaetano</h1>
        <p>Non è stato per nulla facile condensare 5 anni di triennale in così poco spazio.</p>
        <p>Ho cercato di raccogliere i momenti salienti del mio percorso grazie ai pensieri che ho scritto in questi anni.</p>
        <p>Mi scuso in anticipo se il mio racconto potrà sembrare noioso.</p>

        <div className="roadmap__timeline">
          <div className="roadmap__line"></div>

          {roadmapData.map((item, index) => (
            <RoadMapItem
              key={item.id}
              stage={item.stage}
              details={item.details}
              isEven={index % 2 === 0}
              image={item.image}
              cfu={item.cfu}
            />
          ))}
        </div>

        <ImageGallery items={video} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} />

        <div className='end'>
          <h2>Ora la domanda che tutti si fanno: "E adesso che farai?", oppure, "Perché ci hai messo così tanto tempo?"</h2>
          <p>La risposta è semplice: non lo so. Non so cosa farò, ma so che ho imparato molto in questi anni e che non mi pento di nulla.</p>
          <p>Per quanto riguarda il tempo, beh, non è stato facile. Non è stato facile per niente. Ma alla fine ce l'ho fatta.</p>
          <p>Non è stato facile, ma è stato bello.</p>
          <p>Durante questi anni ho portato avanti molti progetti personali, tra cui questo sito. Spero che vi piaccia.</p>
          <p>Ho anche creato <b><Link to="https://apps.apple.com/us/app/ouruniversity/id6449749583" target='_blank' className='link'>OurUniversity</Link></b>, una piattaforma per la condivisione di appunti e materiale didattico tra studenti universitari.</p>
          <p>Ho creato <b><Link to="https://apps.apple.com/it/app/spreeti/id6479562839" target='_blank' className='link'>Spreeti</Link></b>, un'applicazione per la l'utilizzo di offerte e coupon dei locali della tua città.</p>
          <p>Ho vinto <b>750€</b> in un concorso basato sull'estrapolazione dei dati dalla semplice foto di uno scontrino.</p>
          <p>Semplicemente, non sempre tutto va come dovrebbe andare. Ma è importante non arrendersi.</p>
          <p>Un saluto a tutti. Gaetano</p>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
