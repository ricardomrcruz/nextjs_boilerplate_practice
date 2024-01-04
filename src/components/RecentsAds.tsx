import React from "react";
import { useState, useEffect } from "react";
import { Ad } from "@/types";
import AdCard from "./AdCard";
import axios from "axios";
import { gql, useQuery } from "@apollo/client";

const GET_RECENT_ADS = gql`
  query Ads {
    ads {
      id
      title
      price
      picture
    }
  }
`;

type RecentAd = {
  id: number;
  title: string;
  price:  number;
  picture: string;
  
} 

export default function RecentAds() {
  const { data } = useQuery<RecentAd[]>(GET_RECENT_ADS);

  const ads = data || [];

  console.log(data);



  return (
    <>
      <h2>Annonces récentes</h2>

      <section className=" flex flex-wrap ">
        {ads.map((ad) => (
          <AdCard key={ad.id} ad={ad} link={`/ads/${ad.id}`} />
        ))}
      </section>
    </>
  );
}
