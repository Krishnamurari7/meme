import { useEffect, useState } from "react";
import axios from "axios";
import MemeCard from "../components/MemeCard";

export default function HomePage() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setMemes(res.data.data.memes.slice(0, 10));
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Trending Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
}
