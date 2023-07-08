import useScene from "./store";
import HomePage from "./scenes/HomePage";
import Scene1 from "./scenes/Scene1";
import React, {useEffect, useState} from "react";
import SceneGMTK2023 from "./scenes/SceneGMTK2023";
import Scene2 from "./scenes/Scene2";

export default function ScenesManager() {
    const {idx, nextScene, reset, updateLen} = useScene();
    const [scenes, setScenes] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const lz = [<HomePage/>, <SceneGMTK2023/>, <Scene1/>, <Scene2/>];
        setScenes(lz);
        updateLen(lz.length);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full flex items-center justify-center aspect-video text-white">
            <div>{scenes[idx]}</div>
        </div>
    );
}
