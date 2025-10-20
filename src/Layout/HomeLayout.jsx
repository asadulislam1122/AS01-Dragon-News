import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LetesNews from "../Components/LetesNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loding from "../Pages/Loding";

const HomeLayout = () => {
  const { state } = useNavigation();

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
      <main className="w-10/12 mx-auto justify-center md:text-start text-center md:grid md:grid-cols-12 p-2 gap-5">
        <aside className="col-span-3 p-2 md:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6 p-2">
          {state == "loading" ? <Loding></Loding> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 p-2 md:sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
