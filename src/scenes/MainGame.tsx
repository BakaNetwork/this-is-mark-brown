import { useEffect, useRef, useState } from "react";
import Thumbnail from "../components/Thumbnail";
import { Game, useGameStore } from "../store";
import {
  addGame,
  deleteGameByIndex,
  isGameNull,
  randomPick,
  randomPickFollowOriginRule,
} from "../utils/GameUtils";
import gameData, { GameItem } from "../data/data";
import { PlusCircleIcon, PlayIcon } from "@heroicons/react/24/outline";

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
        <div className="max-w-[18vw] mx-2 flex flex-col items-center justify-center">
          <Thumbnail src={game.thumbnail} title={game.title} key={game.title} />
          <div className="flex flex-row">
            <button
              onClick={() => leftFunc(idx)}
              disabled={isGameNull(game)}
              className="border bg-red-200 p-2"
            >
              left
            </button>
            <button
              onClick={() => rightFunc(idx)}
              disabled={isGameNull(game)}
              className="border bg-red-200 p-2"
            >
              right
            </button>
            <button
              onClick={() => rmFunc(idx)}
              disabled={isGameNull(game)}
              className="border bg-red-200 p-2"
            >
              delete
            </button>
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
      const widthScale = 960 / originalWidth;
      const heightScale = 660 / originalHeight;

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
          className="w-[960px] h-[660px]"
          //   style={{ zoom: 0.5, transformOrigin: "0 0", transform: "scale(0.5)" }}
        ></iframe>
      )}
    </>
  );
}

function CurrentGameChangeContainer({
  idx,
  gameList,
}: {
  idx: number;
  gameList: Game[];
}) {
  const {
    selectedGameList,
    updateSelectedGameList,
    nextCurrentGame,
    prevCurrentGame,
  } = useGameStore();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <button onClick={prevCurrentGame} className="border p-2 ">
          <PlayIcon className="w-6 h-6 " style={{ transform: "scaleX(-1)" }} />
        </button>
        <Thumbnail src={gameList[idx].thumbnail} title="" />
        <button onClick={nextCurrentGame} className="border p-2 ">
          <PlayIcon className="w-6 h-6" />
        </button>
      </div>
      <button
        onClick={() =>
          addGame(selectedGameList, gameList[idx], updateSelectedGameList)
        }
        className="border-2 bg-gray-600  py-1 px-3"
      >
        <PlusCircleIcon className="w-6 h-6" />
      </button>
    </div>
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

  const [gameList, setGameList] = useState<Game[]>(playableGameList);

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

  return (
    <div>
      <div>
        <CurrentGameChangeContainer gameList={gameList} idx={currentGameIdx} />
      </div>
      <div>
        <PlayableContainer game={gameList[currentGameIdx]} />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-row m-4 border-2 bg-slate-400">
        <SelectedContainer
          games={selectedGameList}
          leftFunc={moveGameLeft}
          rightFunc={moveGameRight}
          rmFunc={(idx: number) => {
            deleteGameByIndex(selectedGameList, idx, updateSelectedGameList);
          }}
        />
      </div>
    </div>
  );
}
