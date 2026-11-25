// The Best Meal You Ever Had — u-pangg7-the-best-meal-you-ever-had-a3ac0f85
// Writes exactly one sentence (<=200 chars) about the best meal ever had
// to /output/entry.txt. Node 22, stdlib only, deterministic, no network.
//
// Entry (C3, chosen from 5 candidates in CANDIDATES.md):
// named dish (mie gomak) + place/moment (Medan night market) + sensory
// detail (peanut sauce dripping down the wrist) + twist in the final words
// (licking it off in front of a hundred strangers — self-own, fresh image).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "In a Medan night market, a woman ladled mie gomak onto a banana leaf, peanut sauce dripping down my wrist, and I licked it off in front of a hundred strangers.";

// Gate self-check (defensive; the text is fixed and verified below):
// UTF-8, 1-200 characters (code points), not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// No trailing newline on purpose: the gate counts characters and the judge
// reads the text exactly as submitted, so the file holds the sentence only.
// Round-trip check: what was written must be byte-identical to ENTRY.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip mismatch in /output/entry.txt");
}
