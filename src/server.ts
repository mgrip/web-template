import express from "express";
import { graphqlHTTP } from "express-graphql";
import { context } from "./graphql/context";
import schema from "./graphql/schema";

const app = express();

const JS_BUNDLE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/app.js"
    : "/public/app.js";
const PORT = process.env.PORT || 3000;

app.use("/public", express.static("dist"));
app.use("/public", express.static("public"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    context: context(),
  })
);
app.get("*", (req, res) => {
  res.send(`<!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">
  
    <meta name="viewport" content="width=device-width, initial-scale=1">

    ${
      process.env.NODE_ENV === "production"
        ? '<link href="/public/app.css" rel="stylesheet">'
        : ""
    }
  </head>
  
  <body>
    <div id="app"></div>
    <script src="${JS_BUNDLE_URL}"></script>
  </body>
  </html>`);
});

app.listen(PORT);
