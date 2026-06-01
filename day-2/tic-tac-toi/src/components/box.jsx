import Square from "./square";

export default function Box({ currentbord, nextplayer, onplay, winner }) {
  function handleclick(i) {
    let nextbord = currentbord.slice();

    // already filled or winner exists
    if (nextbord[i] != null || winner) return;

    nextbord[i] = nextplayer;

    onplay(nextbord);
  }
  return (
    <div className="">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-wider">Tic Tac Toe</h1>

        <p className="text-zinc-400 mt-3">
          {winner ? `Winner is ${winner}` : `Player ${nextplayer} Turn`}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Square
          value={currentbord[0]}
          handlesquareclick={() => handleclick(0)}
        />
        <Square
          value={currentbord[1]}
          handlesquareclick={() => handleclick(1)}
        />
        <Square
          value={currentbord[2]}
          handlesquareclick={() => handleclick(2)}
        />

        <Square
          value={currentbord[3]}
          handlesquareclick={() => handleclick(3)}
        />
        <Square
          value={currentbord[4]}
          handlesquareclick={() => handleclick(4)}
        />
        <Square
          value={currentbord[5]}
          handlesquareclick={() => handleclick(5)}
        />

        <Square
          value={currentbord[6]}
          handlesquareclick={() => handleclick(6)}
        />
        <Square
          value={currentbord[7]}
          handlesquareclick={() => handleclick(7)}
        />
        <Square
          value={currentbord[8]}
          handlesquareclick={() => handleclick(8)}
        />
      </div>
    </div>
  );
}
