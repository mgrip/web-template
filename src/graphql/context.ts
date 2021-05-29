import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : undefined,
});

export const context = (): Context => {
  return {
    prisma,
  };
};
