import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Reducer from "./Reducer";
import Fetch from "./Fetch";
import EditableInput from "./EditableInput";

const Home = () => {
  const [view, setView] = useState("home");

  return (
    <div>
      <button onClick={() => setView("home")}>Home</button>
      <button onClick={() => setView("contact")}>Contact</button>
      <button onClick={() => setView("about")}>About</button>
      <button onClick={() => setView("product")}>Product</button>
      <button onClick={() => setView("FetchApi")}>Fetch API</button>
      <button onClick={() => setView("EditInput")}>Editable Input</button>

      {view === "home" && <p>Home page</p>}
      {view === "contact" && <Contact />}
      {view === "about" && <About />}
      {view === "product" && <Product />}
      {view === "reducer" && <Reducer />}
      {view === "FetchApi" && <Fetch />}
      {view === "EditInput" && <EditableInput />}
    </div>
  );
};

export default Home;
