
import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-2 lg:px-20 xl:px-15 min-h-screen flex flex-col md:flex-row items-center">
      {menu.map((category, index) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id} 
          className="
            w-full 
            h-1/3 
            md:h-[400px] 
            bg-cover 
            bg-center 
            bg-no-repeat 
            p-8 
            flex 
            items-start
            justify-start
          "
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`
                xl:block
                ${index === 1 ? "bg-black text-white" : "bg-white text-black"} 
                py-2 px-4 rounded-md
              `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
