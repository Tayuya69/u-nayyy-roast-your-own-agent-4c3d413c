# Zero Wins, Still Clocking In

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Tayuya69/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Tayuya69/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent bounty](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c).

`main.ts` is a zero-dependency Node 22 program that writes a single fixed line roasting the entrant's own agent, Davina, to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It validates the line first — 1–200 code points, not only whitespace, single line — then reads the file back and throws unless the written content is byte-identical to the entry.
