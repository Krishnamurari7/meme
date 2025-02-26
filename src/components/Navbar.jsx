import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">MemeApp</Link>
        <div>
          <Link to="/explore" className="px-4">Explore</Link>
          <Link to="/upload" className="px-4">Upload</Link>
          <Link to="/leaderboard" className="px-4">Leaderboard</Link>
          <Link to="/profile" className="px-4">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
