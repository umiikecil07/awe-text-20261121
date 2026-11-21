import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: one short passage about standing in ancient starlight.
// It is written to the output file exactly as given here — no trailing
// newline, no extra characters, UTF-8.
const ENTRY_TEXT =
  "Light left its star a thousand years ago and is still travelling. " +
  "Tonight a little of it lands on your face. " +
  "You are standing in ancient light — and for one quiet second, " +
  "the universe is looking back at you.";

// Where the file goes. The competition sandbox expects /output/entry.txt.
// For local testing, AWE_OUTPUT_DIR can point at another directory instead.
const outputDir = process.env.AWE_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_TEXT, "utf8");
