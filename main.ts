// The one-line resignation letter of a cron job that has run every minute
// for eight months without a single thank-you. It is taking its lunch break
// now, and the break never ends. The program writes the letter to
// $MAKEFUN_OUTPUT_DIR/entry.txt (/output by default) and prints it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const letter = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
console.log(letter);
