// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { PGliteWorker } from "@electric-sql/pglite/worker";
import PGliteWorkerUrl from "./PGliteWorker.ts?url";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "~/../drizzle/schema";

// 初始化本地数据库
const pg = await PGliteWorker.create(
  new Worker(PGliteWorkerUrl, {
    type: "module",
  })
);

const db = drizzle(pg, { schema });
const ret = await db.query.user.findMany();
console.log(ret);

mount(() => <StartClient />, document.getElementById("app")!);
