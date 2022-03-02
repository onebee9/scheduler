import {useState} from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    }
  };

  const back = function () {
    if (history.length < 2) {
      return;
    }

    setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
  };

  return {mode: history[history.length - 1], transition, back};
}