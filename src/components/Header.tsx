import React from "react";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Category } from "@/types";
import qs from "querystring";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  // fetch categories

  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:4000/categories/")
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  // console.log(categories);

  // SEARCH BAR

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof router.query.title === "string") {
      setSearch(router.query.title);
    }
  }, [router.query.title]);

  const searchParams = qs.parse(window.location.search) as any;

  return (
    <header className="bg-gray-800 font-sans pt-5">
      <div className="main-menu">
        <h1>
          <a href="/" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <span className="pt-3 text-3xl">The Bad Corner</span>
          </a>
        </h1>
        <form
          className="text-field-with-button"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              `/search?${qs.stringify({
                ...searchParams,
                title: search,
              })}`
            );
          }}
        >
          <input
            className="text-field main-search-field"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="cherche un annone"
          />
          <button className="button button-primary text-xl">
            <p className="text-2xl">🔎</p>
          </button>
        </form>
        <a href="/newAd" className="button link-button">
          <span className="mobile-short-label">Publier</span>
          <span className="desktop-long-label">Publier une annonce</span>
        </a>
      </div>



      <nav className="bg-gray-800  text-white font-mono ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
        {categories.map((cat) => {
          const isActive = router.query.categoryId === cat.id.toString();
          
          return (
            <div
            className={`rounded-md px-3 py-2 text-xl font-medium ${
              isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
              onClick={() => {
                router.push(
                  "/search?" +
                    qs.stringify({
                      ...searchParams,
                      categoryId: isActive ? undefined : cat.id,
                    })
                );
              }}
              key={cat.name}
            >
              {cat.name}
            </div>
          );
        })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>





    </header>
  );
};

export default Header;
