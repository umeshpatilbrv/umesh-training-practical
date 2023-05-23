
import React, { useState, useEffect } from "react";

const DrinkWater: React.FC = () => {
  const [fullCups, setFullCups] = useState(0);
  const [cupSize, setCupSize] = useState(100);
  const [autoDrink, setAutoDrink] = useState(false);
  const [drinkDuration, setDrinkDuration] = useState(0); //------- New state variable for drink duration

  const smallCups = Array(8).fill(null);

  const highlightCups = (idx: number) => {
    if (idx === 0 && fullCups === 8) idx--;
    else if (
      smallCups[idx] &&
      smallCups[idx].classList.contains("full") &&
      (!smallCups[idx + 1] || !smallCups[idx + 1].classList.contains("full"))
    ) {
      idx--;
    }
    setFullCups(idx + 1);
  };

  const selectCupSize = (size: number) => {
    setCupSize(size);
    setFullCups(0);
  };

  

  useEffect(() => {
    const updateBigCup = () => {
      const totalCups = smallCups.length;
      const percentage = document.getElementById(
        "percentage"
      ) as HTMLDivElement;
      const remained = document.getElementById("remained") as HTMLDivElement;
      const liters = document.getElementById("liters") as HTMLSpanElement;

      if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = "0";
      } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
      }

      if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = "0";
      } else {
        remained.style.visibility = "visible";
        // liters.innerText = `${(cupSize / 1000) * (totalCups - fullCups)}L`;
        liters.innerText = `${2 - (cupSize* fullCups / 1000)}L`
      }

      if (autoDrink && fullCups < totalCups) {
        const timer = setTimeout(() => {
          highlightCups(fullCups);
        }, drinkDuration * 1000); //---------- Multiply by 1000 to convert seconds to milliseconds

        return () => clearTimeout(timer);
      }
    };

    updateBigCup();
  }, [fullCups, smallCups.length, cupSize, autoDrink, drinkDuration]);

  return (
    <div>
     
     <div className="cup">
      
        <div className="remained" id="remained">
          <span id="liters"></span>
           <p>Remained</p>
        </div>

         <div className="percentage" id="percentage"></div>
      </div>

      <p className="text">
         Select how many glasses of water that you have drunk
     </p>

      <div className="cups">
         {smallCups.map((_, idx) => (
          <div
            key={idx}
            className={`cup cup-small ${idx < fullCups ? "full" : ""}`}
            onClick={() => {
              if (!autoDrink) {
                highlightCups(idx);
              }
            }}
          >
            {cupSize} ml
          </div>
        ))}
      </div>

      <div className="cup-sizes">
        
        <h2>
          Select Cup Sizes:-
          <button
            className={cupSize === 100 ? "active" : ""}
            onClick={() => selectCupSize(100)}
          >
            100-ml
          </button>
          <button
            className={cupSize === 200 ? "active" : ""}
            onClick={() => selectCupSize(200)}
          >
            200-ml
          </button>
          <button
            className={cupSize === 300 ? "active" : ""}
            onClick={() => selectCupSize(300)}
          >
            300-ml
          </button>
          <button
            className={cupSize === 400 ? "active" : ""}
            onClick={() => selectCupSize(400)}
          >
            400-ml
          </button>
          <button
            className={cupSize === 1000 ? "active" : ""}
            onClick={() => selectCupSize(1000)}
          >
            1000-ml
          </button>
        </h2>
      </div>
      <div className="auto-drink">
        <h2>
          <label htmlFor="autoDrink">Set to Auto Drink:</label>
          <input
            type="checkbox"
            id="autoDrink"
            checked={autoDrink}
            onChange={(e) => setAutoDrink(e.target.checked)}
          />
        </h2>
        {autoDrink && (
          <div>
            <label htmlFor="drinkDuration">Drink Duration in seconds:-</label>
            <input
              type="number"
              id="drinkDuration"
              value={drinkDuration}
              onChange={(e) => setDrinkDuration(parseInt(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DrinkWater;

