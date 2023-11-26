import React from "react";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Category } from "@/types";
import qs from "querystring";
import { FaBreadSlice } from "react-icons/fa6";



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

  const clickAddad = () => {
    router.push("/newAd");
  };

  return (
    <header className="bg-[#363636] font-grotesk pt-5">
      <div className="flex items-center justify-between">
        
      <div className="flex items-center" style={{ marginRight: "-5rem" }}>
    <h1>
      <a href="/" className="mx-auto max-w-xl px-9 sm:px-9 lg:px-8">
        <span className="ml-8 flex text-3xl text-[#ac362e]">
          <FaBreadSlice />&nbsp;The Bad Corner
        </span>
      </a>
    </h1>
  </div>
        <form
          className="relative mx-auto flex items-center "
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
          <div className="flex items-stretch">
            <input
              id="default-search"
              className="block w-96 rounded-l border border-neutral-300 bg-transparent px-3 py-[0.25rem] text-base text-neutral-300 outline-none focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]" // Adjusted width
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="cherche un annonce"
            />
            <button
              className="rounded-r border-2 border-[#ac362e] px-6 py-2 text-xs font-medium uppercase text-accent hover:bg-black hover:bg-opacity-5 focus:outline-none"
              type="submit"
              id="button-addon3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#ac362e"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
        <button
          type="button"
          onClick={clickAddad}
          className="mr-10 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#ac362e] transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
        >
          Publier Annonce
        </button>
      </div>

      <nav className="bg-[#363636] text-white font-grotesk py-3 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center space-x-4 ">
              {categories.map((cat) => {
                const isActive = router.query.categoryId === cat.id.toString();

                return (
                  <div
                    className={`rounded-md px-3 py-2 text-xl font-medium capitalize ${
                      isActive
                        ? " text-white"
                        : "text-gray-300 hover:text-white"
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
      </nav>
    </header>
  );
};

export default Header;
