import Layout from "@/components/Layout";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Category} from '@/types';






export default function newAd() {

    // FETCH CATEGORIES


    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
      axios
      .get('http://localhost:4000/categories/')
      .then((res)=>setCategories(res.data))
      .catch(console.error);
    }, []);

    console.log(categories);


  const router = useRouter();

  return (
    <Layout pageTitle="Creation d'un ad">
      <h1>Creer une annonce</h1>
      <div>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const formJSON: any = Object.fromEntries(formData.entries());
            formJSON.price = parseFloat(formJSON.price);
            console.log(formJSON);

                axios.post('http://localhost:4000/ads/', formJSON).then(res =>{
                  console.log('ad added success',res.data);
                  router.push('/');
                  form.reset();
                })
          }}
          action=""
        >
          <label className=" text-black-200" htmlFor="title">
            Titre Annonce
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="text-field"
            name="title"
            id="title"
            required
          />

          <label className=" text-black-200" htmlFor="description">
            Description
          </label>
          <textarea
            rows={5}
            placeholder="Type here"
            className="text-field"
            name="description"
            id="description"
            required
          />

          <label className=" text-black-200" htmlFor="price">
            Prix
          </label>
          <input
            type="number"
            placeholder="30"
            className="text-field"
            name="price"
            id="price"
            min={0}
            required
            
          />

          <label className=" text-black-200" htmlFor="owner">
            Vendeur
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="text-field"
            name="owner"
            id="owner"
            required
          />

          <label className=" text-black-200" htmlFor="picture">
            Image Url
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="text-field"
            name="picture"
            id="picture"
            required
          />

          <label className=" text-black-200" htmlFor="location">
            Ville
          </label>

          <input
            type="text"
            placeholder="Type here"
            className="text-field"
            name="location"
            id="location"
          />
          
          <label className=" text-black-200" htmlFor="category">
            Ville
          </label>

          <select
            name="category"
            id="category"
          >
            {categories.map((c) => (
            
            <option key={c.id} value={c.id}> {c.name} </option> 
            
            ))};
 

          </select>



          <button className="button">envoyer</button>
        </form>
      </div>
    </Layout>
  );
}
