export default function History({ history ,playhistory}) {
  return (
    <div className="mt-6 bg-zinc-900 rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-3">Game History</h2>

      <div className="space-y-2">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => playhistory(index)}
            className="w-full text-left bg-zinc-800 hover:bg-zinc-700 transition p-3 rounded-xl"
          >
            Move # {index}
          </button>
        ))}
        {/*  */}
      </div>
    </div>
  );
}
