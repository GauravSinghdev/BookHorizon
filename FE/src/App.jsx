import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-secFavFont bg-[#F8f8ff]">
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
