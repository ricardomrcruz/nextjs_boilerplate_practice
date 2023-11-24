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

  const deleteAd = async () => {
    try{
      
      await axios.delete(`http://localhost:4000/ads/${id}`);
      router.push('/');
   
    }catch (error){
      console.error("delete ad was not possible", error);
    }
  }

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
          
          <br /><br /><br />

          <button onClick={deleteAd} className="button" >DELETE ADD</button>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </Layout>
  );
}
