import { useState } from 'react';
import { nanoid  } from 'nanoid';
import NotesList from './components/NotesList'; 

const App = () => {
  const [ notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "Thjis is my first note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Thjis is my second note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Thjis is my third note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Thjis is my fourth note",
      date: "13/04/2021",
    },
]);

  return <div className='container'>
    <NotesList notes={ notes }/>
  </div>
};

export default App;