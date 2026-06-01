import { useState, useEffect } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import MainCounter from "./MainCounter";
import RightSidebar from "./RightSidebar";

function App() {
  const [count, setcount] = useState(0);
  const [minvalue, setminvalue] = useState(0);
  const [maxvalue, setmaxvalue] = useState(100);

  function valueincrease() {
    setcount((prev) => (prev < maxvalue ? prev + 1 : prev));
  }

  function valuedecrease() {
    setcount((prev) => (prev > minvalue ? prev - 1 : prev));
  }

  function handleresetfunction() {
    setcount(minvalue);
  }

  function minmaxvaluefunction(min, max) {
    const safeMin = Number(min);
    const safeMax = Number(max);

    setminvalue(safeMin);
    setmaxvalue(safeMax);
    setcount(safeMin);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowUp") {
        setcount((prev) => (prev < maxvalue ? prev + 1 : prev));
      }

      if (e.key === "ArrowDown") {
        setcount((prev) => (prev > minvalue ? prev - 1 : prev));
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [minvalue, maxvalue]);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-[#0f172a] text-black dark:text-white p-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto border border-zinc-300 dark:border-zinc-700 rounded-3xl overflow-hidden bg-white dark:bg-[#111827] shadow-xl">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-5 p-5">
          <LeftSidebar />

          <MainCounter
            resetfunction={handleresetfunction}
            count={count}
            handleincrease={valueincrease}
            handledecrease={valuedecrease}
          />

          <RightSidebar
            min={minvalue}
            max={maxvalue}
            count={count}
            handleminmaxvalue={minmaxvaluefunction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;