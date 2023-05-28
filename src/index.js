import { createRoot } from "react-dom/client";
import App from "./App";
import "@logseq/libs";
import "./index.css";

function main() {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<App />);

  logseq.UI.showMsg("Welcome to sample logseq plugin");
}

logseq.ready(main).catch(console.error);
