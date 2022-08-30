import "./components/resultado-ganar";
import "./components/resultado-perder";
import "./components/resultado-empate";
import "./components/presentacionTitle";
import "./components/botonEl";
import "./components/hand-piedra";
import "./components/hand-papel";
import "./components/hand-tijera";
import "./components/score";

import { state } from "./state";
import { initRouter } from "./router";

function main() {
    const root = document.querySelector(".root");
    initRouter(root);
    state.init();
}
main();