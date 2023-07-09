import {
  badSampleComments,
  goodSampleComments,
  mixedSampleComments,
  UserComment,
} from "../data/UserComments";
import _ from "lodash";

/**
 * 根据分数得到用户评论数组
 * @param score 范围为 0-1
 * @constructor
 */
export const getFinalComments = (score: number) => {
  const srcLength: number =
    goodSampleComments.length +
    mixedSampleComments.length +
    badSampleComments.length;
  const targetLength: number = 20;
  const goodCommentCount: number = Math.round(targetLength * score);
  const mixedCommentCount: number = Math.round(
    targetLength * ((1 - score) / 2),
  );
  const badCommentCount: number = mixedCommentCount;

  let finalComments: UserComment[] = [];
  finalComments = finalComments
    .concat(_.shuffle(goodSampleComments).slice(0, goodCommentCount))
    .concat(_.shuffle(mixedSampleComments).slice(0, mixedCommentCount))
    .concat(_.shuffle(badSampleComments).slice(0, badCommentCount));

  finalComments = _.shuffle(finalComments);
  // console.log(
  //   goodCommentCount,
  //   mixedCommentCount,
  //   badCommentCount,
  //   finalComments,
  //   _.shuffle(goodSampleComments).slice(0, goodCommentCount),
  // );

  return finalComments;
};
