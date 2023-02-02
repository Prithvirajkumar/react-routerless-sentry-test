import React from "react";

import Header from "./components/Header";
import Route from "./components/Route";
import ColorSelect from "./components/ColorSelect";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://901804ffb18044b9b067b7172aa6d0f6@o87286.ingest.sentry.io/4504611141255168",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default () => {
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion />
      </Route>
      <Route path="/color-select">
        <ColorSelect />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/all">
        <Accordion />
        <ColorSelect />
        <Translate />
        <Search />
      </Route>
    </div>
  );
};
