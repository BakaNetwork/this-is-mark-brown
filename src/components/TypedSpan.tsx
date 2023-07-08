import React, { ChangeEvent, ReactNode, useRef, useState } from "react";
import Typed from "typed.js";
import Typist from "react-typist";

/**
 * 带打字机效果的span组件
 * @param strings 要显示的字符串数组
 * @param typeSpeed 打字速度，默认 50
 * @param props
 * @constructor
 */
export const TypedSpan = ({
  strings = [""],
  typeSpeed = 50,
  ...props
}: {
  children?: ReactNode;
  strings?: string[];
  typeSpeed?: number;
}) => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  const [soundDelay, setSoundDelay] = useState<number>(typeSpeed * 2);

  let soundTimer: NodeJS.Timer;
  function playSoundLoop() {
    let keystrokeSound = new Audio(
      // "https://freesfx.co.uk/sound/16982_1461335347.mp3",
      "https://freesfx.co.uk/sound/16929_1461335336.mp3",
    );
    keystrokeSound.pause();
    keystrokeSound.currentTime = 0;
    soundTimer = setInterval(() => {
      let resp = keystrokeSound.play();
      if (resp !== undefined) {
        resp
          .then((_) => {
            console.log("played!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, 1);
  }

  function playSound() {
    let keystrokeSound = new Audio(
      "https://freesfx.co.uk/sound/16982_1461335347.mp3",
    );
    keystrokeSound.pause();
    keystrokeSound.currentTime = 0;
    keystrokeSound
      .play()
      .then((_) => {
        console.log("played!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function stopSound() {
    clearInterval(soundTimer);
  }

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     // stringsElement: "#typed-strings",
  //     strings: strings,
  //     typeSpeed: typeSpeed,
  //     preStringTyped(arrayPos: number, self: Typed) {
  //       playSoundLoop();
  //     },
  //     onStringTyped: function (array, self) {
  //       // stopSound();
  //     },
  //     onComplete: function (self) {
  //       self.cursor.remove();
  //       stopSound();
  //     },
  //   });
  //
  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      {/*<span className={`whitespace-pre`} ref={el} />*/}
      <Typist
        onCharacterTyped={() => playSound()}
        avgTypingDelay={typeSpeed}
        stdTypingDelay={typeSpeed / 2}
        cursor={{
          show: true,
          blink: true,
          element: "|",
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
        }}
      >
        <span>Hi, I'm Mark Brown, and this is Game Maker's Toolkit.</span>
        <br />
        <span>
          "I'm a YouTuber who recently hosted a Game Jam, the GMTK Game Jam
          2023.
        </span>
        <br />
        <span>
          Now, I'm going to play through the games submitted to itch.io for the
          jam and pick the most unique and enjoyable ones.
        </span>
        <br />
        <span>
          Then I'll edit a video titled "The Best Games from GMTK Game Jam
          2023."
        </span>
      </Typist>
    </>
  );
};
