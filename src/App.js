import './App.css';
import NoteInput from './components/NoteInput'
import List from "./components/List";

function App() {
  var data=[];
  return (
    <div>
      <div className="container App">
          <h1>To-Do</h1>
          <NoteInput/>
          <List data={data}/>
      </div>
    </div>
  );
}

export default App;
