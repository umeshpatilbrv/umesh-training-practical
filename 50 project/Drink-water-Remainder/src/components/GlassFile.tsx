import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { IdManager, increment1 } from "../redux/SliceFile";
type DataProps = {
  id: number;
  length: number;
  ischeck: boolean;
  selectedGlass: number;
  btnclick: boolean;
  setBtnClick: Dispatch<SetStateAction<boolean>>;
};
const Glass = (props: DataProps) => {
  let selId = useSelector(
    (state: { counter: { id: number } }) => state.counter.id
  );

  const { id, ischeck, selectedGlass, btnclick, setBtnClick } = props;

  const dispatch = useDispatch();

  const buttonHandler = () => {
    setBtnClick((prev) => !prev);
    dispatch(IdManager(id));

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
      <button
        id={`${props.id}`}
        onClick={buttonHandler}
        disabled={ischeck}
        className={`cup cup-small ${selId >= props.id ? "full" : ""}`}
      >
        {selectedGlass}
      </button>
    </>
  );
};
export default Glass;

