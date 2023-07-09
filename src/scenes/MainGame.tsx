import { Fragment, useEffect, useRef, useState } from "react";
import Thumbnail from "../components/Thumbnail";
import useScene, { Game, useGameStore } from "../store";
import {
  addGame,
  anyNull,
  deleteGameByIndex,
  isGameNull,
  randomPick,
  randomPickFollowOriginRule,
} from "../utils/GameUtils";
import gameData, { GameItem } from "../data/data";
import { PlusCircleIcon, PlayIcon } from "@heroicons/react/24/outline";
import { useStore } from "zustand";
import DeleteButton from "../components/ui/DeleteButton";
import BlueButton from "../components/ui/BlueRightButton";
import AddButton from "../components/ui/AddButton";
import { Dialog, Transition } from "@headlessui/react";
import useRank from "../storeRank";
import Rank, { RankAxis } from "../utils/GameRank";
import _ from "lodash";
import tick from "../resources/ui/tick.png";
import Computer from "../resources/computer-down.png";
import MarkBrown from "../resources/mark-brown.png";

function SelectedContainer({
  games,
  leftFunc,
  rightFunc,
  rmFunc,
}: {
  games: Game[];
  leftFunc: (x: number) => void;
  rightFunc: (x: number) => void;
  rmFunc: (x: number) => void;
}) {
  return (
    <>
      {games.map((game: Game, idx: number) => (
        <div className="max-w-[18vw] mx-2 flex flex-col items-center justify-center group relative scale-75">
          <Thumbnail
            src={game.thumbnail}
            title={game.title}
            key={game.title}
            className="group-hover:grayscale-[80%] duration-300 transition-all"
          />
          <div className="flex flex-row absolute gap-x-4 group-hover:opacity-100 opacity-0 transition-all duration-200">
            <BlueButton
              style={{ transform: "scaleX(-1)" }}
              onClick={() => leftFunc(idx)}
              disabled={isGameNull(game)}
              className={`${
                isGameNull(game) ||
                "hover:grayscale-0 transition-all duration-300"
              } grayscale-[75%] `}
            />
            <DeleteButton
              onClick={() => rmFunc(idx)}
              className={`${
                isGameNull(game) ||
                "hover:grayscale-0 transition-all duration-200"
              } grayscale-[45%] `}
            />
            <BlueButton
              onClick={() => rightFunc(idx)}
              disabled={isGameNull(game)}
              className={`${
                isGameNull(game) ||
                "hover:grayscale-0 transition-all duration-300"
              } grayscale-[75%] `}
            />
          </div>
        </div>
      ))}
    </>
  );
}

function PlayableContainer({ game }: { game: Game }) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    // 获取 iframe 元素
    const iframe = iframeRef.current;

    // 获取 iframe 的原始宽度和高度
    if (iframe !== null && iframe !== undefined) {
      const originalWidth = game.width;
      const originalHeight = game.height;

      // 计算宽度和高度的缩放比例
      const widthScale = 720 / originalWidth;
      const heightScale = 405 / originalHeight;

      console.log(widthScale, heightScale);

      // 取较小的缩放比例作为最终的缩放比例
      const scale = Math.min(widthScale, heightScale);

      // 应用缩放比例到 iframe
      if (iframe.contentDocument) {
        iframe.contentDocument.body.style.transform = `scale(${scale})`;
        iframe.contentDocument.body.style.transformOrigin = "0 0";
      }

      //   iframe.style.transform = `scale(${scale})`;
      //   iframe.style.transformOrigin = "0 0";
    }
  }, []);
  return (
    <>
      {isGameNull(game) || (
        <iframe
          ref={iframeRef}
          src={game.url}
          title="foo"
          width="100%"
          height="100%"
          className="w-[720px] h-[405px]"
          //   style={{ zoom: 0.5, transformOrigin: "0 0", transform: "scale(0.5)" }}
        ></iframe>
      )}
    </>
  );
}

function CurrentGameChangeContainer({
  idx,
  gameList,
  openModalFunc,
}: {
  idx: number;
  gameList: Game[];
  openModalFunc: () => void;
}) {
  const {
    selectedGameList,
    updateSelectedGameList,
    nextCurrentGame,
    prevCurrentGame,
  } = useGameStore();

  const { map, updateMap } = useRank();
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Thumbnail
        src={gameList[idx].thumbnail}
        title=""
        className="grayscale-[75%] scale-75 "
      />

      <div className="absolute flex flex-col items-center">
        <div className="bg-black/80 px-4 py-1 mb-2">
          {idx + 1}/{gameList.length}
        </div>
        <div className="flex flex-row gap-x-4">
          <BlueButton
            style={{ transform: "scaleX(-1)" }}
            onClick={prevCurrentGame}
            className={`${"hover:grayscale-0 transition-all duration-300"} grayscale-[75%] `}
          />
          <AddButton
            onClick={() => {
              const flag = addGame(
                selectedGameList,
                gameList[idx],
                updateSelectedGameList
              );
              if (flag) {
                const rankMap = map;
                const lz = _.cloneDeep([Rank.GOOD, Rank.GOOD, Rank.GOOD]);
                rankMap.set(gameList[idx].url, lz);
                updateMap(rankMap);
                openModalFunc();
              }
            }}
            className={`${"hover:grayscale-0 hover:-translate-y-r1 hover:scale-110 transition-all duration-300"} grayscale-[75%] `}
          />
          <BlueButton
            onClick={nextCurrentGame}
            className={`${"hover:grayscale-0 transition-all duration-300"} grayscale-[75%] `}
          />
        </div>
      </div>
    </div>
  );
}

function RankModal({
  currentGame,
  isOpen,
  closeFunc,
}: {
  currentGame: Game;
  isOpen: boolean;
  closeFunc: () => void;
}) {
  const { map, updateMap } = useRank();
  const [ranks, setRanks] = useState<number[]>([
    Rank.GOOD,
    Rank.GOOD,
    Rank.GOOD,
  ]);

  function rank(idx: number, rank: number) {
    const lz = ranks;
    ranks[idx] = rank;
    setRanks(lz);
  }

  function RankItem({ axis, idx }: { axis: string; idx: number }) {
    const [selected, setSelected] = useState<number>(0);
    const click = (x: number) => {
      rank(idx, x);
      setSelected(x);
    };

    return (
      <div className="flex flex-row text-black gap-x-2">
        <div className="text-gray-400"> {axis}: </div>
        <div className="flex items-center gap-x-2">
          <button onClick={() => click(Rank.GOOD)} className="relative">
            <div>Amazing</div>
            {selected === Rank.GOOD && (
              <img
                src={tick}
                alt=""
                className="scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg "
              ></img>
            )}
          </button>
          <button onClick={() => click(Rank.NORMAL)} className="relative">
            <div>Good</div>
            {selected === Rank.NORMAL && (
              <img
                src={tick}
                alt=""
                className="scale-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg "
              ></img>
            )}
          </button>
          <button onClick={() => click(Rank.BAD)} className="relative">
            <div>Normal</div>
            {selected === Rank.BAD && (
              <img
                src={tick}
                alt=""
                className="scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg "
              ></img>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => closeFunc()}>
        <Dialog.Panel
          as="div"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
        >
          <div className="w-[200vw] h-[200vh] fixed pointer-events-none bg-black/50 top-0 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white p-2">
              <RankItem
                axis="&nbsp;&nbsp;&nbsp;&nbsp;Creativity"
                idx={RankAxis.CREATIVITY}
              />
              <RankItem
                axis="&nbsp;&nbsp;&nbsp;Enjoyment"
                idx={RankAxis.ENJOYMENT}
              />
              <RankItem axis="Presentation" idx={RankAxis.PRESENTATION} />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="p-2 bg-red-200"
                onClick={() => {
                  const rankMap = map;
                  const lz = _.cloneDeep(ranks);
                  rankMap.set(currentGame.url, lz);
                  updateMap(rankMap);
                  setRanks([Rank.GOOD, Rank.GOOD, Rank.GOOD]);
                  closeFunc();
                }}
              >
                Apply
              </button>
              <button
                className="p-2 bg-red-200"
                onClick={() => {
                  const rankMap = map;
                  const lz = _.cloneDeep(ranks);
                  rankMap.set(currentGame.url, lz);
                  updateMap(rankMap);
                  setRanks([Rank.GOOD, Rank.GOOD, Rank.GOOD]);
                  closeFunc();
                }}
              >
                Close
              </button>
            </div>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

export default function MainGame() {
  const {
    currentGameIdx,
    selectedGameList,
    playableGameList,
    playableGameListLen,

    moveGameLeft,
    moveGameRight,
    updatePlayableGameList,
    updateSelectedGameList,
  } = useGameStore();

  const { nextScene } = useScene();
  const [gameList, setGameList] = useState<Game[]>(playableGameList);
  const [modalopen, setModalOpen] = useState<boolean>(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const list = randomPickFollowOriginRule(gameData, playableGameListLen);
    // const list = gameData.slice(0);
    const playlist = list.map((gi: GameItem) => ({
      url: gi.game,
      title: gi.title,
      description: gi.description,
      thumbnail: gi.cover,
      width: gi.width,
      height: gi.height,
    }));
    updatePlayableGameList(playlist); // TODO: 保存正确的顺序
    setGameList(randomPick(playlist, playableGameListLen));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { map } = useRank();

  return (
    <>
      <div className="absolute w-full top-[30vh] flex justify-center items-center">
        <RankModal
          isOpen={modalopen}
          closeFunc={closeModal}
          currentGame={gameList[currentGameIdx]}
        />
      </div>
      <div className="overflow-x-hidden">
        <img
          src={Computer}
          alt={`Computer`}
          className="absolute left-0 -top-20 aspect-video w-screen -z-50 overflow-hidden"
        ></img>
      </div>
      <div>
        <img
          src={MarkBrown}
          alt={`Mark Brown`}
          className={`absolute w-[35vw] bottom-0 translate-x-[10%]`}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* <button
          className="bg-white p-2"
          onClick={() => {
            console.log(map);
            console.log("selected！", selectedGameList);
          }}
        >
          debug!
        </button> */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <CurrentGameChangeContainer
            gameList={gameList}
            idx={currentGameIdx}
            openModalFunc={openModal}
          />
        </div>
        <div className="absolute top-[33%] left-[35%] -z-10">
          <PlayableContainer game={gameList[currentGameIdx]} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full flex flex-row  bg-transparent">
        <SelectedContainer
          games={selectedGameList}
          leftFunc={moveGameLeft}
          rightFunc={moveGameRight}
          rmFunc={(idx: number) => {
            deleteGameByIndex(selectedGameList, idx, updateSelectedGameList);
          }}
        />
        <div
          className={`flex items-center justify-center flex-col text-lg ${
            anyNull(selectedGameList)
              ? "opacity-30"
              : "text-green-300 border-green-300 opacity-100"
          }`}
        >
          <button
            className="w-16 h-12 border "
            onClick={nextScene}
            disabled={anyNull(selectedGameList)}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}
