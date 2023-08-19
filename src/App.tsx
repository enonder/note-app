import { useEffect, useState } from 'react'
import Button from './components/Button'
import Row from './components/Row'
import Input from './components/Input'
import NoteCard from './components/NoteCard'
import TextArea from './components/TextArea'
import Column from './components/Column'
import Header from './components/Header'
import Box from './components/Box'

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
    <Box style={{ maxWidth: 800, margin: "50px auto" }}>
      <Row style={{ alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
        <Header>My-Notes</Header>
        <Button type='outline-primary' onClick={() => addNote()}>New Note</Button>
      </Row>

      <Row>
        <Column>
          {notes.map((note, index) => {
            return (
              <NoteCard key={index} title={note.title} onClick={() => { setCurrentNote({ ...note, index }) }} />)
          })}
        </Column>

        <Column style={{ width: '100%' }}>
          <Input onChange={handleTitle} value={currentNote.title} placeholder='Subject' />
          <TextArea onChange={handleDescription} value={currentNote.description}></TextArea>
          <Row style={{ gap: 10, alignItems: 'center', justifyContent: 'end' }}>
            {currentNote.index !== null && <Button style={{ width: 75 }} type='outline-secondary' onClick={() => deleteNote(currentNote.index)}>Delete</Button>}
            <Button style={{ width: 75 }} type='primary' onClick={() => saveNote()}>Save</Button>
          </Row>

        </Column>
      </Row>
    </Box>
  )

}

export default App
