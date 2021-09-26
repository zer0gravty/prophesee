import { useEffect, useState } from "react";
import "./App.css";
import future from './future.jpg';

const App = () => {
  const [showPicture, setShowPicture] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPicture(true);
    }, 42000)
  }, []);
  
  return (
    <main className="app">
      {!showPicture && <div className="text-container">
        <p className="text text-1">In the year 2075...</p>
        <p className="text text-2">
          People will be fighting human-sized spotted lantern flies.
        </p>
        <p className="text text-3">
          The lucky will be tenuously protected by fully sealed hermetic
          suits...
        </p>
        <p className="text text-4">
          For protection against the COVID-75-Omega strain...
        </p>
        <p className="text text-5">
          ...and from the 300 degree surface temperature.
        </p>
        <p className="text text-6">THIS is what it will look like:</p>
      </div>}
      {showPicture && <img className="future" src={future} alt="dismal future" />}
    </main>
  );
};

export default App;
