import useScene from "./store";
import Intro from "./scenes/Intro";
import React, { useEffect, useState } from "react";
import SceneGMTK2023 from "./scenes/SceneGMTK2023";
import MainGame from "./scenes/MainGame";
import { shallow } from "zustand/shallow";
import Presentation from "./scenes/Presentation";
import Ending from "./scenes/Ending";

export default function ScenesManager() {
  const [idx, prevScene, nextScene, reset, updateLen] = useScene(
    (state) => [
      state.idx,
      state.prevScene,
      state.nextScene,
      state.reset,
      state.updateLen,
    ],
    shallow,
  );
  const [scenes, setScenes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const lz = [
      <SceneGMTK2023 />,
      <Intro />,
      <MainGame />,
      <Presentation />,
      <Ending />,
    ];
    setScenes(lz);
    updateLen(lz.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full text-white m-0 p-0">
        <button className={`z-40 fixed top-12 right-0`} onClick={prevScene}>
          [Debug] PrevScene
        </button>
        <button className={`fixed top-16 right-0`} onClick={nextScene}>
          [Debug] NextScene
        </button>
        <div className="w-full text-white m-0 p-0">
          <div>{scenes[idx]}</div>
        </div>
      </div>
    </>
  );
}
