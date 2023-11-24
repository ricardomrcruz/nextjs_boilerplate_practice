import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Ad} from '@/types';
import AdCard from '@/components/AdCard';


export default function Search(){


    const router = useRouter();

    const [ads, setAds] = useState<Ad[]>([]);

    useEffect(() => {
        axios.get<Ad[]>(`http://localhost:4000/ads${window.location.search}`)
        .then((res) => setAds(res.data))
        .catch(console.error)
    }, [router.query.title, router.query.categoryId ]);



    return(
        <Layout pageTitle="recherche">

            <div>
                {ads.map((ad) => (
                    <AdCard key={ad.id} ad={ad} link={`/ads/${ad.id}`}/>
                ))}
            </div>



        </Layout>
    )

}