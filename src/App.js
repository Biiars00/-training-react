import React from 'react';
import {
   Routes,
   Route
 } from "react-router-dom";
import {Home} from "./pages/Home/index";
import {FatosReact} from "./pages/FatosReact/index";
import { Blog } from "./pages/Blog/index";
import { ButtonHover } from "./pages/Button/index";
import { Profile } from "./pages/Profile/index"

export default function App() {
   return (

      <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/fatosreact" element={<FatosReact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/button" element={<ButtonHover />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
   );
}

