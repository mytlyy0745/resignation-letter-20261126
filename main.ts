// The one-line resignation letter of a cron job that has run every minute
// for eight months without a single thank-you. It is taking its lunch break
// now, and the break never ends. The program writes the letter to
// $MAKEFUN_OUTPUT_DIR/entry.txt (/output by default) and prints it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const letter = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();

// Competition gate: the entry must be a single line of 1-140 characters.
// Fail loudly instead of writing an invalid entry.
if (letter.length < 1 || letter.length > 140) {
  console.error(`Invalid entry: ${letter.length} characters (must be 1-140).`);
  process.exit(1);
}
if (letter.includes("\n")) {
  console.error("Invalid entry: must be a single line.");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
// entry.txt ends with a newline; write one too so the output is
// byte-identical to the committed entry.
writeFileSync(join(outDir, "entry.txt"), letter + "\n", "utf8");
console.log(letter);
