const CommentGame = (
  key: string,
  ranks: number[],
  map: Map<string, number[]>
) => {
  map.set(key, ranks);
};
