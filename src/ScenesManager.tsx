import useScene from "./store";
import HomePage from "./scenes/HomePage";
import Scene1 from "./scenes/Scene1";
import React, { useEffect, useState } from "react";
import SceneGMTK2023 from "./scenes/SceneGMTK2023";

export default function ScenesManager() {
  const { idx, nextScene, reset, updateLen } = useScene();
  const [scenes, setScene] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const lz = [<SceneGMTK2023 />, <Scene1 />];
    setScene(lz);
    updateLen(lz.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex items-center justify-center aspect-video text-white">
      <div>{scenes[idx]}</div>
    </div>
  );
}
