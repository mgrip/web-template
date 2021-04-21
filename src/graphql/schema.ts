import fetch from "node-fetch";
import { PrismaClient } from ".prisma/client";
import {
  asNexusMethod,
  connectionPlugin,
  enumType,
  idArg,
  inputObjectType,
  interfaceType,
  list,
  makeSchema,
  mutationType,
  nullable,
  objectType,
  queryType,
  stringArg,
} from "nexus";

const prisma = new PrismaClient();

const Thing = objectType({
  name: "Template",
  definition(t) {
    t.id("id");
    t.string("name");
  },
});

const Query = queryType({
  definition(t) {
    t.field("thing", {
      type: Thing,
      args: {
        id: idArg(),
      },
      resolve: (root, { id }) => ({ id, name: "Thing 1" }),
    });
  },
});

export default makeSchema({
  plugins: [connectionPlugin({ includeNodesField: true })],
  nonNullDefaults: {
    input: true,
    output: true,
  },
  types: [Query],
});
