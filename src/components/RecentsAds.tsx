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

export default function RecentAds() {
  const { data } = useQuery(GET_RECENT_ADS);

  console.log(data);

  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    axios
      .get<Ad[]>("http://localhost:4000/ads/")
      .then((res) => {
        setAds(res.data);
      })
      .catch(console.error);
  }, []);

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
