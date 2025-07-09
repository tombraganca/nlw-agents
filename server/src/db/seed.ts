import { reset, seed } from "drizzle-seed";
import { db } from "./connection.ts";
import { schema } from "./schema/index.ts";

async function main() {
  await reset(db, schema);

  await seed(db, schema).refine((f) => {
    return {
      rooms: {
        count: 3,
        columns: {
          name: f.companyName(),
          description: f.loremIpsum(),
        },
        with: {
          questions: 1,
        },
      },
    };
  });
}

main()
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: only used in dev
    console.log("Database reset and seeded successfully.");
  })
  // biome-ignore lint/suspicious/noConsole: only used in dev
  .catch(console.error);
