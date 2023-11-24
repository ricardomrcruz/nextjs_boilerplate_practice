import React from 'react';
import { useState, useEffect } from 'react';
import {Ad} from '@/types';
import  AdCard from './AdCard';
import axios from 'axios';


// const RecentAds: React.FC = () => {
//   const [total, setTotal] = useState(0);
//   const ads: AdCardProps[] = [
//     {
//       imgUrl: '/images/table.webp',
//       link: '/ads/table',
//       price: 120,
//       title: 'Table',
//     },
//     {
//       imgUrl: '/images/dame-jeanne.webp',
//       link: '/ads/dame-jeanne',
//       price: 75,
//       title: 'Dame-jeanne',
//     },
//     {
//       imgUrl: '/images/vide-poche.webp',
//       link: '/ads/vide-poche',
//       price: 4,
//       title: 'Vide-poche',
//     },
//     {
//       imgUrl: '/images/vaisselier.webp',
//       link: '/ads/vaisselier',
//       price: 900,
//       title: 'Vaisselier',
//     },
//     {
//       imgUrl: '/images/bougie.webp',
//       link: '/ads/bougie',
//       price: 8,
//       title: 'Bougie',
//     },
//     {
//       imgUrl: '/images/porte-magazine.webp',
//       link: '/ads/porte-magazine',
//       price: 45,
//       title: 'Porte-magazine',
//     },
//   ];


const RecentAds = () => {
  const [total, setTotal] = useState(0);
  const [ads, setAds] = useState<Ad[]>([])
  
  useEffect(() => {
     axios.get<Ad[]>("http://localhost:4000/ads/")
       .then((res)=>{
        setAds(res.data);
       })
        .catch(console.error);
      }, []);


  
  return (
    <>
      <h2>Annonces récentes</h2>
      

      <section className=" flex flex-wrap ">      
        {ads.map((ad)=> (
        
                <AdCard key={ad.id} ad={ad} link={`/ads/${ad.id}`}/>
        ))}
        
      </section>
    </>
  );
};

export default RecentAds;
