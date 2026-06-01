export default function Square({ value , handlesquareclick}) {
  return (
    <button onClick={handlesquareclick} className="aspect-square rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition text-5xl font-bold shadow-lg">
      {value}
    </button>
  );
}