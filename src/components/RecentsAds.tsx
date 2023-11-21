import React from 'react';
import { useState } from 'react';
import  AdCard, { AdCardProps } from './AdCard';


const RecentAds: React.FC = () => {
  const [total, setTotal] = useState(0);
  const ads: AdCardProps[] = [
    {
      imgUrl: '/images/table.webp',
      link: '/ads/table',
      price: 120,
      title: 'Table',
    },
    {
      imgUrl: '/images/dame-jeanne.webp',
      link: '/ads/dame-jeanne',
      price: 75,
      title: 'Dame-jeanne',
    },
    {
      imgUrl: '/images/vide-poche.webp',
      link: '/ads/vide-poche',
      price: 4,
      title: 'Vide-poche',
    },
    {
      imgUrl: '/images/vaisselier.webp',
      link: '/ads/vaisselier',
      price: 900,
      title: 'Vaisselier',
    },
    {
      imgUrl: '/images/bougie.webp',
      link: '/ads/bougie',
      price: 8,
      title: 'Bougie',
    },
    {
      imgUrl: '/images/porte-magazine.webp',
      link: '/ads/porte-magazine',
      price: 45,
      title: 'Porte-magazine',
    },
  ];
  
  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Prix total: {total} $</p>
      <button className='button' onClick={()=>{
        setTotal(total*0);
      }}>Reset Prix</button>

      <section className="recent-ads">      
        {ads.map((ad)=> (
            <div key={ad.title}>
                <AdCard
                imgUrl={ad.imgUrl}
                link={ad.link}
                price={ad.price}
                title={ad.title}
                />
                <button className='button' onClick={() => {
                  setTotal(total+ad.price);}}
                >Add price to total</button>
            </div>
        ))}
        
      </section>
    </>
  );
};

export default RecentAds;
