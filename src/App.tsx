import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Mainc from "./Mainc";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Education from "./Education";
import "./App.css";

function App() {
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const increments = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increments;
        if (next >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">

      {/* LOADER */}
      {loading && (
        <div className="loading-screen">
          <div
            className="loading-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* VIDEO DE FONDO */}
      <video
        className={`app-bg-video ${!loading ? "show" : ""}`}
        src="./Navbar-font.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* CONTENIDO */}
      <div className={`app-content ${!loading ? "show" : ""}`}>
        <Navbar />
        <Mainc />
        <Projects />
        <Technologies />
        <Education />
      </div>

    </div>
  );
}

export default App;
