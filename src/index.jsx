import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import { Success } from "./pages/Success/index.jsx";

import "./style.css";

export const App = () => {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/fe-mentor-newsletter-sign-up"
      : "";

  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path={`${basePath}/`} component={Home} />
          <Route path={`${basePath}/success`} component={Success} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
};

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
