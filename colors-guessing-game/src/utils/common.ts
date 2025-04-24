import { COLORS, SIZE } from "../constants/constants";

export const generateQuestion = () => {
  const colors = [];
  for (let i = 0; i < SIZE; i++) {
    colors[i] = COLORS[Math.floor(Math.random() * 10 % COLORS.length)];
  }
  return colors;
}

export const getStats = (currentAns: string[], trueAns: string[]) => {
  let cc = 0, cr = 0;

  const map: Record<string, number> = {};
  for (let i = 0; i < trueAns.length; i++) {
    if (!map[trueAns[i]])
      map[trueAns[i]] = 0;
    map[trueAns[i]]++;
  }

  for (let i = 0; i < currentAns.length; i++) {
    if (map[currentAns[i]]) {
      cr += 1;
      map[currentAns[i]]--;
    }
  }

  for (let i = 0; i < currentAns.length; i++) {
    if (trueAns[i] === currentAns[i]) {
      cc += 1;
      cr--;
    }
  }

  return { cc, cr }
}