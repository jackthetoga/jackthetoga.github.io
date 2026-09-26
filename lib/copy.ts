/**
 * Voice copy. Leave a field empty until you write it.
 * Filled strings replace the on-page prompt. Empty strings stay blank.
 */
export const copy = {
  headline:
    "I deploy AI systems for task automation and conduct robotics research in the field of imitation learning.",
  lede: "I also deploy automatic trading bot experiments trading high volatility small caps. I’m also a semiprofessional keyboardist and vocalist with over a hundred shows under my belt. I’m currently in 3 bands.",
  about: [
    "I’m currently a senior at Purdue University studying Computer Science and Artificial Intelligence. I’m looking for work in the Bay Area in software engineering or robotics research. I also enjoy cooking and consider myself a very creative person.",
  ] as string[],
  workIntro: "",
  music: [
    "I’ve been playing piano for 10 years in both classical and jazz/rock settings. I occasionally sing leads and backups for my bands as well. In piano I’m most fluent with 70s popular music like Stevie Wonder, Steely Dan but I also enjoy transcribing Oscar Peterson, McCoy Tyner and Bill Evans.",
  ] as string[],
};

export function isWritten(value: string | string[]) {
  if (Array.isArray(value)) return value.some((part) => part.trim().length > 0);
  return value.trim().length > 0;
}
