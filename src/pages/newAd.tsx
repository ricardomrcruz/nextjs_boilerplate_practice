import Layout from "@/components/Layout";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Category } from "@/types";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";

export default function newAd() {
  // FETCH CATEGORIES

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/categories/")
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  console.log(categories);

  const router = useRouter();

  return (
    <Layout pageTitle="Creation d'un ad">
      <div
        className=" flex   
      justify-center
      self-center
      w-full
      rounded bg-[#363636] p-6 
      shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const formJSON: any = Object.fromEntries(formData.entries());
            formJSON.price = parseFloat(formJSON.price);
            console.log(formJSON);

            axios.post("http://localhost:4000/ads/", formJSON).then((res) => {
              console.log("ad added success", res.data);
              router.push("/");
              form.reset();
            });
          }}
          action=""
        >
          <h1 className="text-2xl text-neutral-300">Creation d'Annonce</h1>
          <br />

          <Input
            label="Titre Annonce"
            id="title"
            type="text"
            name="title"
            required
          />

          <TextArea
            label="Description"
            id="description"
            name="description"
            required
          />

          <Input
            label="Prix €"
            id="title"
            type="number"
            name="title"
            required
          />

          <Input label="Vendeur" id="owner" type="text" name="owner" required />

          <Input
            label="Url Image"
            id="picture"
            type="text"
            name="picture"
            required
          />

          <Input
            label="Ville"
            id="location"
            type="text"
            name="location"
            required
          />

          <div className="relative">
           
            <select
              className="
            
            block
            rounded
            px-6
            pt-3
            pb-3
            w-full
            text-md
          text-zinc-400
          bg-neutral-700
            
            "
              name="category"
              id="category"
              
            >
              <option value="" disabled selected>
                Categories
              </option> 
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {" "}
                  {c.name}{" "}
                </option>
              ))}
              ;
            </select>
          </div>

          <button className="bg-red-900 py-3 text-white rounded w-full mt-10 hover:bg-blue-700 transition ">
            Publier Annonce
          </button>
        </form>
      </div>
    </Layout>
  );
}
