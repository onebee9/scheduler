import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    }
  };

  const back = (location = "") => {
    if (history.length < 2) {
      return;
    }

    const findInhistory = history.indexOf(location);

    if (findInhistory !== -1) {
      setHistory((prev) => [...prev.slice(0, findInhistory + 1)]);
      return;
    }

    setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
  };

  return { mode: history[history.length - 1], transition, back };
}