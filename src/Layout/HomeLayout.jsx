import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LetesNews from "../Components/LetesNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto mt-4">
          <LetesNews></LetesNews>
        </section>
        <nav className="w-10/12 mx-auto mt-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-10/12 mx-auto justify-center md:text-start text-center grid md:grid-cols-12 p-2 gap-5">
        <aside className="col-span-3 p-2 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6 p-2">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 p-2 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
