import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from './components/List';

function App(){

  const [notes, updateList] = useState([]);

    function saveToList(note){
      updateList(prevValue => {
      return [...prevValue, note];
      })
    }

    function deleteNoteFromList(id){
      updateList(prevValue => {
        return notes.filter((note, index) => {
          return index !== id
        });
      });
    }

  return(
    <main>
      <Header />
      <section>
        <Form saveToList={saveToList} />
        <List notes={notes} deleteNoteFromList={deleteNoteFromList} />
      </section>
      <Footer />
    </main>
  )
}

export default App;
