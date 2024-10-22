import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Reducer from "./Reducer";
import Fetch from "./Fetch";
import EditableInput from "./EditableInput";
import ToDo from "./ToDo";
import "./app.css";
import Search from "./Search";

const Home = () => {
  const [view, setView] = useState("home");

  return (
    <div className="nav_button">
      <button
        onClick={() => setView("home")}
        className={view === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        onClick={() => setView("contact")}
        className={view === "contact" ? "active" : ""}
      >
        Contact
      </button>
      <button
        onClick={() => setView("about")}
        className={view === "about" ? "active" : ""}
      >
        About
      </button>
      <button
        onClick={() => setView("product")}
        className={view === "product" ? "active" : ""}
      >
        Product
      </button>
      <button
        onClick={() => setView("FetchApi")}
        className={view === "FetchApi" ? "active" : ""}
      >
        Fetch API
      </button>
      <button
        onClick={() => setView("EditInput")}
        className={view === "EditInput" ? "active" : ""}
      >
        Editable Input
      </button>
      <button
        onClick={() => setView("todo")}
        className={view === "todo" ? "active" : ""}
      >
        Todo List
      </button>
      <button
        onClick={() => setView("search")}
        className={view === "search" ? "active" : ""}
      >
        Search
      </button>

      {view === "home" && <p>Home page</p>}
      {view === "contact" && <Contact />}
      {view === "about" && <About />}
      {view === "product" && <Product />}
      {view === "reducer" && <Reducer />}
      {view === "FetchApi" && <Fetch />}
      {view === "EditInput" && <EditableInput />}
      {view === "todo" && <ToDo />}
      {view === "search" && <Search />}
    </div>
  );
};

export default Home;
