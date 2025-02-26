import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MemeExplorer from "./pages/MemeExplore";
import MemeUpload from "./pages/MemeUpload";
import MemeDetails from "./pages/MemeDetails";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<MemeExplorer />} />
        <Route path="/upload" element={<MemeUpload />} />
        <Route path="/meme/:id" element={<MemeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
