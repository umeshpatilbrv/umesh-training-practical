import { useSelector, useDispatch } from "react-redux";
import { selectedGlassSize, reset, incr2 } from "../redux/SliceFile";
import { useEffect, useState } from "react";
import Glass from "./GlassFile";

const DrinkWater =()=> {

  const [cupSize, setCupSize] = useState<string>("250ml"); //---------- store the selected cup size and default size is 250ml
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false); //--track if auto-drink is enabled
  const [opacity, setOpacity] = useState<number>(1); //-----------------to control the opacity of the glass
  const [btnclick, setBtnClick] = useState<boolean>(false); //----------track button click
  const [duration, setDuration] = useState<number>(5); //---------------store the duration for auto-drink

  let countNumber = 1;
  const dispatch = useDispatch();

       //--------- Get remaining and glassQuantity values from Redux store-------//
  let remaining = useSelector(
    (state: { counter: { remaining: number } }) => state.counter.remaining
  );
  const glassQuantity = useSelector(
    (state: { counter: { glassQuantity: number } }) =>
      state.counter.glassQuantity
  );

  let selectedGlass = +cupSize.replace(/[^0-9]/g, "");

  const [committedFieldsToAdd, setCommittedFieldsToAdd] = useState(8);

  useEffect(() => {
       //--------- Run the effect when isSubscribed and remaining change-----------//
    if (isSubscribed && remaining > 0) {
      for (let countNumber = 0; countNumber <= 8; countNumber++) {

         // ------Create an interval to dispatch incr2 action---------/
        const interval = setInterval(() => {
          countNumber++;
          dispatch(
            incr2({ count: countNumber + 1, glassQuantity: glassQuantity })
          );
        }, duration * 1000); //----------------Use the duration state for interval delay
        
        // --------Clean up the interval and reset the counter when the component unmounts---------//
        return () => {
          clearInterval(interval);
          dispatch(reset());
        };
      }
    }
  }, [countNumber, glassQuantity, isSubscribed, duration]); //---------------Include duration in dependencies

  useEffect(() => {
    //-------Dispatch selectedGlassSize and reset actions when cupSize or selectedGlass change-------//
    dispatch(selectedGlassSize(selectedGlass));
    dispatch(reset());
  }, [cupSize, selectedGlass, dispatch]);

  useEffect(() => {
    //-------- Calculate the number of fields to add based on glassQuantity-------//
    setCommittedFieldsToAdd(2000 / glassQuantity);
  }, [glassQuantity]);

  const onOptionChange = (e: { target: { value: string } }) => {
     // --------Update cupSize when the radio button selection changes------//
    setCupSize(e.target.value);
  };

  const handleChange = (event: { target: { checked: boolean } }) => {
    //------- Reset the counter and update isSubscribed based on checkbox change------//
    dispatch(reset());
    if (event.target.checked) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
      dispatch(reset());
    }
  };

  useEffect(() => {
    // ---------Update opacity based on isSubscribed----//
    if (isSubscribed) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
  }, [isSubscribed]);

  const handleDurationChange = (event: { target: { value: string } }) => {
     //-------- Update duration when the duration input value changes-------//
    setDuration(parseInt(event.target.value));
  };

  return (
    <>
      <div className="DrinkWater">
        <div className="cup">
          <div className="remained">
            {/* {/ Display the remaining amount /} */}
            <span className="remainSpan"> {remaining} ml Remained</span>  
          </div>

          <div
            className="percentage"
            style={{ height: `${100 - (remaining * 100) / 2000}% ` }}
          >
            {/*  Display the remaining percentage  */}
            {100 - (remaining * 100) / 2000}%
          </div>

        </div>
        <p className="text">
          Select how many glasses of water that you have drunk
        </p>
        <div className="cups" style={{ opacity: `${opacity}` }}>
          {[...Array(committedFieldsToAdd)].map(
            (value: number, index: number) => {
              return (
                <Glass
                  btnclick={btnclick}
                  setBtnClick={setBtnClick}
                  id={index + 1}
                  key={index}
                  ischeck={isSubscribed}
                  length={2000 / glassQuantity}
                  selectedGlass={selectedGlass}
                />
              );
            }
          )}
          <div>
            <label htmlFor="subscribe">
              <input
                type="checkbox"
                onChange={handleChange}
                id="subscribe"
                name="subscribe"
              />
              Set to Auto Drink:-
            </label>
          </div>
          {isSubscribed && (
            <div>
              <label htmlFor="duration">
                Duration (seconds):
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={duration}
                  onChange={handleDurationChange}
                />
              </label>
            </div>
          )}
          <h3>
            <b>Select Glass Size</b>
          </h3>
          <input
            type="radio"
            name="cupSize"
            value="100ml"
            id="100ml"
            checked={cupSize === "100ml"}
            onChange={onOptionChange}
          />
          <label htmlFor="100ml">100ml</label>

          <input
            type="radio"
            name="cupSize"
            value="250ml"
            id="250ml"
            checked={cupSize === "250ml"}
            onChange={onOptionChange}
          />
          <label htmlFor="250ml">250ml</label>

          {/* <input
            type="radio"
            name="cupSize"
            value="300ml"
            id="300ml"
            checked={cupSize === "300ml"}
            onChange={onOptionChange}
          />
          <label htmlFor="300ml">300ml</label> */}

          <input
            type="radio"
            name="cupSize"
            value="400ml"
            id="400ml"
            checked={cupSize === "400ml"}
            onChange={onOptionChange}
          />
          <label htmlFor="400ml">400ml</label>

          <input
            type="radio"
            name="cupSize"
            value="1000ml"
            id="1000ml"
            checked={cupSize === "1000ml"}
            onChange={onOptionChange}
          />
          <label htmlFor="1000ml">1000ml</label>
        </div>
      </div>
    </>
  );
};

export default DrinkWater;

