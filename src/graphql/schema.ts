import { connectionPlugin, makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export default makeSchema({
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
  contextType: {
    module: join(__dirname, "..", "src", "api", "context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: join(__dirname, "..", "src", "generated", "nexus-typegen.ts"),
    schema: join(__dirname, "..", "src", "generated", "schema.graphql"),
  },
  plugins: [connectionPlugin({ includeNodesField: true })],
  nonNullDefaults: {
    input: true,
    output: true,
  },
  types,
});
