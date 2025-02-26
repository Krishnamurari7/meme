import { useParams } from "react-router-dom";

export default function MemeDetails() {
  const { id } = useParams();
  return <div className="text-center text-2xl p-5">Meme Details Page - {id}</div>;
}
