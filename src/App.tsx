import { useEffect, useState } from 'react'
import Button from './components/Button'
import Row from './components/Row'
import Input from './components/Input'
import NoteCard from './components/NoteCard'
import TextArea from './components/TextArea'
import Column from './components/Column'
import Header from './components/Header'

function App() {

  let [notes, setNotes] = useState<{ title: string, description: string }[]>([]);
  let [currentNote, setCurrentNote] = useState<{ title: string, description: string, index: any }>({ title: "", description: "", index: null });

  useEffect(() => {
    if (window.localStorage.getItem('notes')) {
      setNotes(JSON.parse((window as any).localStorage.getItem('notes')));
    }
  }, [])


  function addNote() {
    setCurrentNote({ title: "", description: "", index: null });
  }

  function saveNote() {
    let copyList = notes.slice();

    if (currentNote.index !== null) {
      copyList[currentNote.index].title = currentNote.title;
      copyList[currentNote.index].description = currentNote.description;
      window.localStorage.setItem('notes', JSON.stringify(copyList))
      setNotes(copyList);
    } else {
      let copyNote = { ...currentNote };
      delete copyNote.index;
      copyList.push(copyNote);
      window.localStorage.setItem('notes', JSON.stringify(copyList))
      setNotes(copyList);
    }

    setCurrentNote({ title: "", description: "", index: null });
  }

  function deleteNote(i: number) {
    let copyList = notes.slice();
    copyList.splice(i, 1);
    setNotes(copyList);
    setCurrentNote({ title: "", description: "", index: null });
    window.localStorage.setItem('notes', JSON.stringify(copyList))

  }


  function handleTitle(e: any) {
    setCurrentNote({
      title: e.target.value, description: currentNote.description, index: currentNote.index
    })
  }

  function handleDescription(e: any) {
    setCurrentNote({
      title: currentNote.title, description: e.target.value, index: currentNote.index
    })
  }


  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <Row style={{ alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
        <Header>My-Notes</Header>
        <Button type='primary' onClick={() => addNote()}>+ Add</Button>
      </Row>

      <Row>
        <Column>
          {notes.map((note, index) => {
            return (
              <Row key={index}>
                <NoteCard title={note.title} onClick={() => { setCurrentNote({ ...note, index }) }} />
                <Button type='danger' onClick={() => deleteNote(index)}>Delete</Button>
              </Row>)
          })}
        </Column>

        <Column style={{ width: '100%' }}>
          <Input onChange={handleTitle} value={currentNote.title} placeholder='Subject' />
          <TextArea onChange={handleDescription} value={currentNote.description}></TextArea>
          <Button type='success' onClick={() => saveNote()}>Save</Button>
        </Column>
      </Row>


    </div>
  )

}

export default App
