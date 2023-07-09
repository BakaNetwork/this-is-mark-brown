import _, { forEach, update } from "lodash";
import { Game } from "../store";

const swap = (arr: any[], index1: number, index2: number) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};
const randomPickFollowOriginRule = (arr: any[], size: number): any[] => {
  const indices = Array.from(Array(arr.length).keys());
  return _.sampleSize(indices, size)
    .sort()
    .map((idx) => _.cloneDeep(arr[idx]));
};

const randomPick = (arr: any[], size: number): any[] => {
  return _.sampleSize(arr, size);
};

const isGameNull = (g: Game): boolean => {
  return (
    g.description === "" && g.thumbnail === "" && g.title === "" && g.url === ""
  );
};

const isSelectedGameListFull = (selected: Game[]): boolean => {
  var full = true;
  for (const g of selected) {
    if (isGameNull(g)) {
      full = false;
      break;
    }
  }
  console.log("null: ", full);

  return full;
};

const isExistGame = (list: Game[], game: Game): boolean => {
  for (const g of list) {
    if (g.url === game.url) return true;
  }

  console.log("not exist: ", game);

  return false;
};

const findFirstNullIndex = (list: Game[]): number => {
  var i = 0;
  for (i = 0; i < list.length; i++) {
    if (isGameNull(list[i])) {
      break;
    }
  }
  return i;
};

const nullGameObject: Game = {
  url: "",
  title: "",
  description: "",
  thumbnail: "",
  width: 0,
  height: 0,
};

/**
 * 填入第一个空位中
 *
 * @param {Game[]} selected - The list of already selected games.
 * @param {Game} game - The game to be selected.
 * @return {boolean} Returns true if the game was successfully selected, otherwise false.
 */
const addGame = (
  list: Game[],
  game: Game,
  updateFunc: (gs: Game[]) => void
): boolean => {
  const selected = _.cloneDeep<Game[]>(list);
  console.log(selected, game);

  if (isExistGame(selected, game)) return true;
  if (isSelectedGameListFull(selected)) return false;

  var i = findFirstNullIndex(selected);
  // for (; i < selected.length - 1; i++) {
  //   swap(selected, i, i + 1);
  // }

  // i = findFirstNullIndex(selected);

  selected[i] = _.cloneDeep<Game>(game);

  updateFunc(selected);
  console.log(selected);

  return true;
};

const deleteGame = (
  list: Game[],
  game: Game,
  updateFunc: (gs: Game[]) => void
) => {
  const selected = _.cloneDeep<Game[]>(list);
  if (!isExistGame(selected, game)) return;

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].title === game.title) {
      selected[i] = _.cloneDeep<Game>(nullGameObject);
    }
  }
  updateFunc(selected);
};

const deleteGameByIndex = (
  list: Game[],
  index: number,
  updateFunc: (gs: Game[]) => void
) => {
  const selected = _.cloneDeep<Game[]>(list);
  if (index < 0 || index >= selected.length) return;

  selected[index] = _.cloneDeep<Game>(nullGameObject);

  updateFunc(selected);
};

export {
  randomPickFollowOriginRule,
  randomPick,
  swap,
  addGame,
  deleteGameByIndex,
  isGameNull,
  nullGameObject,
};
