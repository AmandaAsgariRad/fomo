import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import { Fomo } from './components/fomo';

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Fomo />
  </React.StrictMode>
);
