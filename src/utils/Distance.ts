import { clamp } from "lodash";
import { Game } from "../store";
import _ from "lodash";

function kendallDistance(arr1: number[], arr2: number[]): number {
  if (arr1.length !== arr2.length) {
    throw new Error("The input arrays must have the same length.");
  }

  const n = arr1.length;
  let distance = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (
        (arr1[i] < arr1[j] && arr2[i] > arr2[j]) ||
        (arr1[i] > arr1[j] && arr2[i] < arr2[j])
      ) {
        distance += 1;
      }
    }
  }

  return distance;
}

function similarityScore(arr1: number[], arr2: number[]): number {
  const maxDistance = (arr1.length * (arr1.length - 1)) / 2;
  const distance = kendallDistance(arr1, arr2);
  const similarity = 1 - distance / maxDistance;
  return clamp(similarity, 0, 1);
}

function getFinalScore(arr1: number[], arr2: number[]): number {
  const score = similarityScore(arr1, arr2);
  return Math.log2(score + 1) * 100;
}

function score(selected: Game[], game: Game[]): number {
  const lz = selected.map((g: Game) => {
    var i = 0;
    for (i = 0; i < game.length; i++) {
      if (g.url === game[i].url) {
        return i;
      }
    }
    return 0;
  });
  return getFinalScore(lz, _.range(lz.length));
}

function rightNum(selected: Game[], game: Game[]): number {
  var ans = 0;
  selected
    .map((g: Game) => {
      var i = 0;
      for (i = 0; i < game.length; i++) {
        if (g.url === game[i].url) {
          return i;
        }
      }
      return 0;
    })
    .forEach((x: number, i: number) => {
      if (x === i) {
        ans += 1;
      }
    });
  return ans;
}
export default score;
export { rightNum };
