import { Fragment, useState } from "react";

import Hobby from "./components/TaskForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const clickHandler = () => {
    setShowForm((prev) => !prev);
  };
  // const closeHandler = () => {
  //   setShowForm(false);
  // };
  return (
    <Fragment>
      <div className="app">
        <h1>Submit Your Name and Hobbies</h1>
        <button className="button-app" onClick={clickHandler}>
          (show-hide) Hobbies{" "}
        </button>
        {/* <button onClick={closeHandler}>HideForm</button> */}
        {showForm && <Hobby />}
      </div>
    </Fragment>
  );
}

export default App;
