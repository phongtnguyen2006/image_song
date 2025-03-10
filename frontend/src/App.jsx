import { useEffect, useState } from "react";
import axios from "axios";
import "./components/ImageUpload";
import ImageUpload from "./components/ImageUpload";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar/>
      <ImageUpload/>
    </div>
  );
}

export default App;