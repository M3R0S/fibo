import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "styles/index.scss";

import { App } from "./App";
import { store } from "store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
