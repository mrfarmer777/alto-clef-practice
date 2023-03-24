const noteNames = ["c", "d", "e", "f", "g", "a", "b"]
const octaves = [2,3,4,5]
class NoteChooser{

  select(rangeStart="c/3", rangeEnd="d/5"){
    const availableNotes = octaves.reduce((notes, octave) => {
      const octaveNotes = noteNames.map((noteName) => { return `${noteName}/${octave}`})
      return notes.concat(octaveNotes);
    }, [])

    const notesInRange = availableNotes.slice(availableNotes.indexOf(rangeStart), availableNotes.indexOf(rangeEnd)+1)
    const selectedNote = notesInRange[Math.floor(Math.random() * notesInRange.length)].split('/')
    return  { noteName: selectedNote[0], octave: selectedNote[1]}
  }
}

export default NoteChooser;