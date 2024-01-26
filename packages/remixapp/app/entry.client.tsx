import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

console.log("adding dump");

hydrate(<RemixBrowser />, document);
