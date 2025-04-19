export interface countWordsProps {
  sentence: string;
  n: number;
}

export type countWordsReturns = [string, number];

export function countWords({
  sentence,
  n,
}: countWordsProps): countWordsReturns[] {
  const words = sentence.split(/[^a-zA-Z0-9]+/).filter(Boolean);

  const wordCount: Record<string, number> = {};

  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const sortedWords = Object.entries(wordCount)
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .slice(0, n);

  return sortedWords;
}
