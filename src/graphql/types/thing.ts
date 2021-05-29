import { extendType, idArg, objectType } from "nexus";

export const Thing = objectType({
  name: "Template",
  definition(t) {
    t.id("id");
    t.string("name");
  },
});

export const ThingQueries = extendType({
  type: "Query",
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
