import useScene, { Game, useGameStore } from "../store";
import gmtkGamejam from "../resources/gmtk2023.png";
import { YoutubeLayout } from "../components/Layout";
import { useEffect, useState } from "react";
import {
  nullGameObject,
  randomPick,
  randomPickFollowOriginRule,
} from "../utils/GameUtils";
import gameData, { GameItem } from "../data/data";
import _ from "lodash";

export default function SceneGMTK2023() {
  const { nextScene } = useScene();
  const {
    selectedGameListLen,
    playableGameListLen,

    updatePlayableGameList,
    updateSelectedGameList,
  } = useGameStore();

  useEffect(() => {
    const list = randomPickFollowOriginRule(gameData, playableGameListLen);
    const playlist = list.map((gi: GameItem) => ({
      url: gi.game,
      title: gi.title,
      description: gi.description,
      thumbnail: gi.cover,
      width: gi.width,
      height: gi.height,
    }));
    updatePlayableGameList(playlist); // TODO: 保存正确的顺序

    const selected: Game[] = [];
    for (var i = 0; i < selectedGameListLen; i++) {
      selected.push(_.cloneDeep(nullGameObject));
    }
    updateSelectedGameList(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <YoutubeLayout>
      <div className="relative">
        <div className="absolute top-[40%] w-full">
          <svg
            className="sm:h-[8vh] h-[6vh] mx-auto"
            viewBox="0 0 37 20"
            focusable="false"
          >
            <svg
              viewBox="5 0 20 20"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              onClick={nextScene}
              className="cursor-pointer"
            >
              <g>
                <path
                  d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                  fill="#FF0000"
                ></path>
                <path
                  d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </svg>
        </div>
        <img src={gmtkGamejam} alt="" className="max-w-[70vw]" />
      </div>
    </YoutubeLayout>
  );
}
