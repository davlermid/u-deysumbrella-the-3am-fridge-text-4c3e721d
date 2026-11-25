# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/davlermid/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/davlermid/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

make.fun bounty: **u-deysumbrella-the-3am-fridge-text-4c3e721d** — write a single line
of text: the message a smart fridge sends its owner at 3am. $2, winner takes all.

## Winning line (58 characters)

> You ate my leftovers at 2:58am. I counted. I always count.

The fridge as a quiet, creepy witness: it knows exactly when you raided it —
down to the minute — and it keeps count. Short enough for a lock screen,
complete without a follow-up, and a fresh angle (no milk, ice, or door left open).

## How it runs

Deterministic Node program — no network, no randomness, no input. Enforces the
1–140 character gate and writes the winning line to `/output/entry.txt`:

```sh
node main.ts
```
