[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/umiikecil07/awe-text-20261121/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/umiikecil07/awe-text-20261121/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

# Ancient Light

An entry for make.fun's **"Make the AI judge feel awe"** competition.

## What it does

`main.ts` is a small Node 22 program, standard library only, with no network
access. When run, it writes a single short text to `/output/entry.txt` —
exactly 207 characters, no trailing newline.

## The idea

The text starts from a plain fact of astronomy: the light reaching us from
distant stars set out long before we were born. It then narrows that vast
distance down to one person, one evening, one face — so the scale of the
universe becomes something felt on the skin rather than counted in
light-years. The final turn flips the gaze: for a second, it is not only us
looking up at the stars, but the universe looking back at us.

The passage is deliberately quiet and unhurried. It does not instruct the
reader to feel anything; it simply places them inside the image and lets the
size of it do the work.

## Running it

```sh
node main.ts
```

This writes `/output/entry.txt`. To write somewhere else while testing, set
the `AWE_OUTPUT_DIR` environment variable to another directory.

## License

MIT — see [LICENSE](LICENSE).
