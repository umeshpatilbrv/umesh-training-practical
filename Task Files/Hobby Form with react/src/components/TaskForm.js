import { useState } from "react";

const Hobby = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredHobby, setEnteredHobby] = useState("");
  const [enteredHobbyTouched, setEnteredHobbyTouched] = useState(false);

  const [enteredHobby2, setEnteredHobby2] = useState("");
  const [enteredHobbyTouched2, setEnteredHobbyTouched2] = useState(false);

  const [enteredHobby3, setEnteredHobby3] = useState("");
  // const [enteredHobbyTouched3, setEnteredHobbyTouched3] = useState(false);

  const [enteredHobby4, setEnteredHobby4] = useState("");
  // const [enteredHobbyTouched4, setEnteredHobbyTouched4] = useState(false);

  //////////////////////////////////////////////////////////

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredHobbyIsValid = enteredHobby.trim() !== "";
  const HobbyInputIsInvalid = !enteredHobbyIsValid && enteredHobbyTouched;

  const enteredHobbyIsValid2 = enteredHobby2.trim() !== "";
  const HobbyInputIsInvalid2 = !enteredHobbyIsValid2 && enteredHobbyTouched2;

  // const enteredHobbyIsValid3 = enteredHobby3.trim() !== "";
  // const HobbyInputIsInvalid3 = !enteredHobbyIsValid3 && enteredHobbyTouched3;

  // const enteredHobbyIsValid4 = enteredHobby4.trim() !== "";
  // const HobbyInputIsInvalid4 = !enteredHobbyIsValid4 && enteredHobbyTouched4;

  ///////////////////////////////////////////////

  let formIsValid = false;

  if (enteredHobbyIsValid && enteredHobbyIsValid && enteredHobbyIsValid2) {
    formIsValid = true;
  }
  /////////////////////////

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const HobbyInputChangeHandler = (event) => {
    setEnteredHobby(event.target.value);
  };

  const HobbyInputChangeHandler2 = (event) => {
    setEnteredHobby2(event.target.value);
  };

  const HobbyInputChangeHandler3 = (event) => {
    setEnteredHobby3(event.target.value);
  };

  const HobbyInputChangeHandler4 = (event) => {
    setEnteredHobby4(event.target.value);
  };

  ////////////////////

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const HobbyInputBlurHandler = (event) => {
    setEnteredHobbyTouched(true);
  };

  const HobbyInputBlurHandler2 = (event) => {
    setEnteredHobbyTouched2(true);
  };

  // const HobbyInputBlurHandler3 = (event) => {
  //   setEnteredHobbyTouched3(true);
  // };

  // const HobbyInputBlurHandler4 = (event) => {
  //   setEnteredHobbyTouched4(true);
  // };

  ////////////////////////////
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredHobbyTouched(true);

    if (!enteredHobbyIsValid && !enteredHobbyIsValid && !enteredHobbyIsValid2) {
      return;
    }

    console.log(
      enteredName,
      enteredHobby,
      enteredHobby2,
      enteredHobby3,
      enteredHobby4
    );
    console.log(enteredName);
    console.log(enteredHobby);
    console.log(enteredHobby2);
    console.log(enteredHobby3);
    console.log(enteredHobby4);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredHobby("");
    setEnteredHobbyTouched(false);

    setEnteredHobby2("");
    setEnteredHobbyTouched2(false);

    setEnteredHobby4("");
    // setEnteredHobbyTouched3(false);

    setEnteredHobby4("");
    // setEnteredHobbyTouched4(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const HobbyInputClasses = HobbyInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const HobbyInputClasses2 = HobbyInputIsInvalid2
    ? "form-control invalid"
    : "form-control";

  // const HobbyInputClasses3 = HobbyInputIsInvalid3
  // ? "form-control invalid"
  // : "form-control";

  // const HobbyInputClasses4 = HobbyInputIsInvalid4
  // ? "form-control invalid"
  // : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <p>Your Name & Hobbies</p>
      <div className={nameInputClasses}>
        <label htmlFor="name1">Enter Your Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          id="name1"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Your Name must not be empty</p>
        )}
      </div>
      <div className={HobbyInputClasses}>
        <label htmlFor="name1">Enter Hobby-1</label>
        <input
          type="text"
          placeholder="---Enter Hobby-1---"
          id="name1"
          onChange={HobbyInputChangeHandler}
          onBlur={HobbyInputBlurHandler}
          value={enteredHobby}
        />
        {HobbyInputIsInvalid && (
          <p className="error-text">Hobby Name must not be empty</p>
        )}
      </div>
      <div className={HobbyInputClasses2}>
        <label htmlFor="name2">Enter Hobby-2</label>
        <input
          type="text"
          placeholder="---Enter Hobby-2---"
          id="name2"
          onChange={HobbyInputChangeHandler2}
          onBlur={HobbyInputBlurHandler2}
          value={enteredHobby2}
        />
        {HobbyInputIsInvalid2 && (
          <p className="error-text">Hobby Name must not be empty</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="name3">Enter Hobby-3</label>
        <input
          type="text"
          placeholder="---Enter Hobby-3---"
          id="name3"
          onChange={HobbyInputChangeHandler3}
          // onBlur={HobbyInputBlurHandler3}
          value={enteredHobby3}
        />
      </div>

      <div className="form-control">
        <label htmlFor="name4">Enter Hobby-4</label>
        <input
          type="text"
          placeholder="---Enter Hobby-4---"
          id="name4"
          onChange={HobbyInputChangeHandler4}
          // onBlur={HobbyInputBlurHandler4}
          value={enteredHobby4}
        />
      </div>

      <div>
        <input type="checkbox" disabled={!formIsValid} /> <span>continue</span>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}z>Submit</button>
      </div>
    </form>
  );
};

export default Hobby;

// import { useState } from "react";

// const Hobby = (props) => {
//   const [enteredHobby, setEnteredHobby] = useState("");
//   const [enteredHobbyTouched, setEnteredHobbyTouched] = useState(false);

//   const enteredHobbyIsValid = enteredHobby.trim() !== "";
//   const HobbyInputIsInvalid = !enteredHobbyIsValid && enteredHobbyTouched;

//   let formIsValid = false;

//   // if (enteredHobby.trim() === "") {
//   //   return;
//   // }

//   if (enteredHobbyIsValid) {
//     formIsValid = true;
//   }

//   const HobbyInputChangeHandler = (event) => {
//     setEnteredHobby(event.target.value);
//   };

//   const HobbyInputBlurHandler = (event) => {
//     setEnteredHobbyTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();

//     setEnteredHobbyTouched(true);

//     if (!enteredHobbyIsValid) {
//       return;
//     }

//     console.log(enteredHobby);

//     // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
//     setEnteredHobby("");
//     setEnteredHobbyTouched(false);
//   };

//   const HobbyInputClasses = HobbyInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <p>---Submit your Hobbies---</p>
//       <div className={HobbyInputClasses}>
//         <label htmlFor="name1">Enter Your Name</label>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           id="name1"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           value={enteredHobby}
//         />
//         {HobbyInputIsInvalid && (
//           <p className="error-text">Your Name must not be empty</p>
//         )}
//       </div>
//       <div className={HobbyInputClasses}>
//         <label htmlFor="name1">Enter Hobby-1</label>
//         <input
//           type="text"
//           placeholder="---Enter Hobby-1---"
//           id="name1"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           value={enteredHobby}
//         />
//         {HobbyInputIsInvalid && (
//           <p className="error-text">Hobby Name must not be empty</p>
//         )}
//       </div>
//       <div className={HobbyInputClasses}>
//         <label htmlFor="name2">Enter Hobby-2</label>
//         <input
//           type="text"
//           placeholder="---Enter Hobby-2---"
//           id="name2"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           value={enteredHobby}
//         />
//         {HobbyInputIsInvalid && (
//           <p className="error-text">Hobby Name must not be empty</p>
//         )}
//       </div>
//       <div className={HobbyInputClasses}>
//         <label htmlFor="name3">Enter Hobby-3</label>
//         <input
//           type="text"
//           placeholder="---Enter Hobby-3---"
//           id="name3"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           value={enteredHobby.trim()}
//         />
//         {HobbyInputIsInvalid && (
//           <p className="error-text">Hobby Name must not be empty</p>
//         )}
//       </div>

//       <div className="form-control">
//         <label htmlFor="name4">Enter Hobby-4</label>
//         <input
//           type="text"
//           placeholder="---Enter Hobby-4---"
//           id="name4"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           // value={enteredHobby}
//         />
//       </div>

//       <div className="form-control">
//         <label htmlFor="name5">Enter Hobby-5</label>
//         <input
//           type="text"
//           placeholder="---Enter Hobby-5---"
//           id="name5"
//           onChange={HobbyInputChangeHandler}
//           onBlur={HobbyInputBlurHandler}
//           value={enteredHobby}
//         />
//       </div>

//       <div>
//         <input type="checkbox" disabled={!formIsValid} /> <span>continue</span>
//       </div>

//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Hobby;
