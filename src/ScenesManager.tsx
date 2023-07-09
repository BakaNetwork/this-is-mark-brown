import useScene from "./store";
import HomePage from "./scenes/HomePage";
import React, { useEffect, useState } from "react";
import SceneGMTK2023 from "./scenes/SceneGMTK2023";
import MainGame from "./scenes/MainGame";

export default function ScenesManager() {
  const { idx, nextScene, reset, updateLen } = useScene();
  const [scenes, setScenes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const lz = [<SceneGMTK2023 />, <HomePage />, <MainGame />];
    setScenes(lz);
    updateLen(lz.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex items-center justify-center text-white m-0 p-0">
      <div>{scenes[idx]}</div>
    </div>
  );
}
