
import state from "./state/index.js";
import { attacheDocumentEventHandlers } from "./services/eventHandler.service.js";
import { generateLayout } from "./services/layout.service.js";

const app = document.getElementById("app");

generateLayout(app);
state.initialize();
attacheDocumentEventHandlers();
