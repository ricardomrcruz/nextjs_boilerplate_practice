import React from 'react';

export type AdCardProps = {
   
        id: number;
        title: string;
        picture: string;
        price: number;
        link: string;
    
};


const AdCard: React.FC<AdCardProps> = ({ title, picture, price, link }) => {
    return (
        
        <div className="ad-card-container">
          <a className="ad-card-link" href={link}>
            <img className="ad-card-image" src={picture} />
            <div className="ad-card-text">
              <div className="ad-card-title">{title}</div>
              <div className="ad-card-price">{price}€</div>
            </div>
          </a>
        </div>
    );
};

export default AdCard ;