import React from 'react';
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from '../components/Header';
import RecentAds from '../components/RecentsAds';
import Layout from "@/components/Layout";




export default function Home() {
  return (
    <Layout pageTitle="Acceuil">
      <RecentAds />
    </Layout>
  );
}
