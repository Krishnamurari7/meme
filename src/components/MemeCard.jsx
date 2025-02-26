export default function MemeCard({ meme }) {
    return (
      <div className="flex flex-col items-center border p-4 rounded-lg bg-white shadow-lg">
        <img src={meme.url} alt={meme.name} className="w-20 h-20 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{meme.name}</h3>
      </div>
    );
  }
  