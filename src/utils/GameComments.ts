import _, { words } from "lodash";
import { creativity, enjoyment, productivity } from "../data/RankComments";
import Rank, { RankAxis } from "./GameRank";

function getGameComment(ranks: number[]): string {
  console.log(ranks);

  const creativityIndex = ranks[RankAxis.CREATIVITY];
  const productionIndex = ranks[RankAxis.PRESENTATION];
  const enjoymentIndex = ranks[RankAxis.ENJOYMENT];

  const s1 = _.sample(creativity[creativityIndex]);
  const s2 = _.sample(productivity[productionIndex]);
  const s3 = _.sample(enjoyment[enjoymentIndex]);

  const s4 = _.sample(words);

  const arr = [s1, s2, s3, s4].map((s) => {
    if (s === undefined) {
      return "";
    }
    return s;
  });

  return arr.join(" ");
}

export { getGameComment };
