import './App.css';
import AddTodo_fragment from './component/FragmentCode';
import { AddTodo_Mutation } from './component/MutationCode';

function App() {
  return (
    <div className="App">
      <AddTodo_Mutation/>
      <h1>------------------------</h1>
     <AddTodo_fragment/>
    </div>
  );
}

export default App;
