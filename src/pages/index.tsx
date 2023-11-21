import React from 'react';
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from '../components/Header';
import RecentAds from '../components/RecentsAds';


export default function Home() {
  return (
    <>
      
      <body>
        <main className='main-content'>
             <RecentAds />
        </main>
     
    
      </body>

    </>
  );
};
