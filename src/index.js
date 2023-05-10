import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import { Fomo } from './components/fomo';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css'

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Fomo />
  </BrowserRouter>
);

