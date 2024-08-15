import { PGlite } from "@electric-sql/pglite";
import { worker } from "@electric-sql/pglite/worker";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "~/../drizzle/schema";

worker({
  async init() {
    const pg = await PGlite.create({
      dataDir: "idb://my-db",
      relaxedDurability: true,
    });
		await pg.exec(
		`
		
		`
    );

    // const db = drizzle(pg, { schema });
    // const ret = await db.query.user.findMany();
    // console.log(ret);

    return pg;
  },
});
