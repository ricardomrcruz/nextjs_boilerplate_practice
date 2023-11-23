import Layout from "@/components/Layout";
import { AdDetails as AdDetailsType } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [ad, setAd] = useState<AdDetailsType>();

  useEffect(() => {
    axios
      .get<AdDetailsType>(`http://localhost:4000/ads/${id}`)
      .then((res) => setAd(res.data))
      .catch(console.error);
  }, [id]);

  console.log(router);

  return (
    <Layout pageTitle={ad?.title ? ad.title + " - TGC" : "The Good Corner"}>
      {ad ? (
        <>
          <div>
            <h1>{ad.title}</h1>
            <p>Price: {ad.price} $</p>
          </div>
          <img src={ad.picture} alt="" />
          <p>Membre: {ad.owner}</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </Layout>
  );
}
