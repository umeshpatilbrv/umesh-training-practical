import React, { Dispatch, SetStateAction } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { IdManager, increment1 } from "../redux/SliceFile";

// -------Define the type of Glass component--------// 
type DataProps = {
  id: number;
  length: number;
  ischeck: boolean;
  selectedGlass: number;
  btnclick: boolean;
  setBtnClick: Dispatch<SetStateAction<boolean>>;
};

const Glass = (props: DataProps) => {
  // ------Get the selected id from the Redux store using the useSelector(hook)-------//
  let selId = useSelector(
    (state: { counter: { id: number } }) => state.counter.id
  );

  //------Destructure the props object to access its properties-----//
  const { id, ischeck, selectedGlass, btnclick, setBtnClick } = props;

  //----Get the dispatch function from the useDispatch(hook)--------//
  const dispatch = useDispatch();

  //------Handler function for the button click---------//
  const buttonHandler = () => {

    //------toggle the btnclick state using the setBtnClick function received in props---//
    setBtnClick((prev) => !prev);

    //---Dispatch an action to update the id in the Redux store using the IdManager action creator---//
    dispatch(IdManager(id));

    //--Dispatch an action to increment the selectedGlass value in the Redux store using the increment1 action creator--//
    dispatch(
      increment1({
        btnclick: btnclick,
        id: id,
        selectedGlass: selectedGlass,
      })
    );
  };

  return (
    <>
      {/* {/ Button element for glass/} */}
      <button
        id={`${props.id}`}
        onClick={buttonHandler}
        disabled={ischeck}
        className={`cup cup-small ${selId >= props.id ? "full" : ""}`}
      >
        {/* {/ Display the value of selectedGlass in the button /} */}
        {selectedGlass}
      </button>
    </>
  );
};

export default Glass;
