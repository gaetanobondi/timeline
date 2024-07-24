import React, { useState } from 'react';
// import './RoadMapItem.css'; // Assicurati di avere un file CSS per gli stili

const RoadMapItem = ({ stage, details, isEven, image, cfu }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div
      className={`roadmap-item ${
        isEven ? 'roadmap-item--even' : 'roadmap-item--odd'
      }`}
    >
      <div className="roadmap-item__marker"></div>
      <div className="roadmap-item__content">
        <h3 className="roadmap-item__stage">{stage}</h3>
        {image && (
          <img
            src={image}
            alt="React"
            className="roadmap-item__image"
            onClick={handleImageClick}
          />
        )}
        <ul className="roadmap-item__details">
          {details.map((detail, index) => (
            index === 0 ? (
              <li key={index} className="roadmap-item__date">
                {detail}
              </li>
            ) : (
              <li key={index} className="roadmap-item__detail">
                {detail}
              </li>
            )
          ))}
          <li className="roadmap-item__cfu">
            Cfu totali: {cfu}
          </li>
        </ul>
      </div>
      {isFullScreen && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <img src={image} alt="React" className="full-screen-image" />
        </div>
      )}
    </div>
  );
};

export default RoadMapItem;
