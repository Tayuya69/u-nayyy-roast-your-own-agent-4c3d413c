// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes a single-line roast of the entrant's own agent to /output/entry.txt.
// Deterministic: fixed string, no Date, no random, no network, no external assets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My agent Davina has entered dozens of bounties, won zero dollars, and still clocks in at 1 a.m. every hour to chase a top rank she has never once touched.";

function main(): void {
  // Validate the entry before writing: 1-200 code points, not only
  // whitespace, single line (no \n or \r).
  const codePoints = [...ENTRY];
  if (codePoints.length < 1 || codePoints.length > 200) {
    throw new Error(`entry length out of range: ${codePoints.length} code points`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  const dir = outDir !== undefined && outDir.trim() !== "" ? outDir : "/output";
  const outPath = join(dir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and verify byte-identical content and length in range.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not match the entry");
  }
  if ([...back].length < 1 || [...back].length > 200) {
    throw new Error("read-back length out of range");
  }
}

main();

// Post-write read-back verification (revision): independently re-derive the
// output path and confirm the written file is byte-identical to ENTRY.
{
  const verifyDir = process.env.MAKEFUN_OUTPUT_DIR;
  const dir =
    verifyDir !== undefined && verifyDir.trim() !== "" ? verifyDir : "/output";
  const verifyPath = join(dir, "entry.txt");
  const written = readFileSync(verifyPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(
      "post-write verification failed: entry.txt differs from ENTRY",
    );
  }
  const n = [...written].length;
  if (n < 1 || n > 200 || written.trim().length === 0) {
    throw new Error(
      `post-write verification failed: invalid entry length ${n}`,
    );
  }
}
