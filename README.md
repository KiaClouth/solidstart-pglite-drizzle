1.pnpm i
2.pnpm schema:generate
3.pnpm db:generate
4.Copy the contents of ./drizzle/migrations/0000_*.sql and paste them at line 14 of ./src/lib/worker/PGliteWorker.ts.
5.pnpm dev