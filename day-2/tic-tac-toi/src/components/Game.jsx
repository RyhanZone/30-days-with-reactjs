import { useState } from "react";
import Box from "./box";
import History from "./history";

export default function Game() {
  const [nextplayer, setnextplayer] = useState("X");

  const [history, sethistory] = useState([Array(9).fill(null)]);

  const [currentbord, setcurrentbord] = useState(history[history.length - 1]);

  // winner patterns
  const winnerarray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  // winner function
  function calculatewinner(board) {
    for (let i = 0; i < winnerarray.length; i++) {
      const [a, b, c] = winnerarray[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  let winner = calculatewinner(currentbord);

  // play move
  function handleplay(nextbord) {
    sethistory([...history, nextbord]);

    setcurrentbord(nextbord);

    if (nextplayer === "X") {
      setnextplayer("O");
    } else {
      setnextplayer("X");
    }
  }

  // history move
  function handlehistory(index) {
    setcurrentbord(history[index]);
    if (index % 2 === 0) {
      setnextplayer("X");
    } else {
      setnextplayer("O");
    }
  }

  // restart
  function handlerestart() {
    sethistory([Array(9).fill(null)]);

    setcurrentbord(Array(9).fill(null));

    setnextplayer("X");
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        {/* Game Board */}
        <Box
          currentbord={currentbord}
          nextplayer={nextplayer}
          onplay={handleplay}
          winner={winner}
        />

        {/* Buttons */}
        <div className="flex mt-8">
          <button
            onClick={handlerestart}
            className="flex-1 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Restart
          </button>
        </div>

        {/* History */}
        <History history={history} playhistory={handlehistory} />
      </div>
    </div>
  );
}
