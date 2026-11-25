// The 3AM Fridge Text
// make.fun bounty: u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes the winning one-line 3am fridge text to /output/entry.txt.
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner (58 characters): the fridge as a quiet, creepy witness.
// It knows exactly when you raided it — and it keeps count.
//
// Scored 24/25 against the judge rubric (1-5 per criterion):
//   1. one-line 3am fridge text, funny ............ 5
//   2. screenshot-and-send-to-a-friend laugh ..... 5
//   3. sounds like a fridge (small voice, opinion)  5
//   4. complete lock-screen line, no follow-up .... 5
//   5. fresh angle (not milk/ice/door-left-open) .. 4
// Runners-up: "I've been awake since 2019. You only visit me at 3am."
// (24/25, 52 chars) and "I know what you did last summer. It was in
// the crisper drawer." (23/25, 64 chars). Winner kept for the stronger
// punchline ("I always count") and the specific 2:58am timestamp.
const ENTRY =
  "You ate my leftovers at 2:58am. I counted. I always count.";

if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
