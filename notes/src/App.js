import { useEffect, useState } from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import NodeList from './components/NotesList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is the first thing in the useState",
    date: "29/06/2023"
    },
    {
      id: nanoid(),
      text: "This is the second thing in the useState",
      date: "29/07/2023"
    },
    {
      id: nanoid(),
      text: "This is the third thing in the useState",
      date: "30/07/2023"
    }
  ]);

  const [searchText, setSearchText] = useState('');


  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete it?");
    if (confirmDelete) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <SearchBar handleSearchNote={setSearchText}/>
        <NodeList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          />
      </div>
    </div>
  );
}

export default App;
