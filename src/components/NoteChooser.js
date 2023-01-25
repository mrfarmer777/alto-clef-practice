

const noteNames = ["a", "b", "c", "d", "e", "f", "g"]
class NoteChooser{

  select(){
    return noteNames[Math.floor(Math.random() * noteNames.length )]
  }
}

export default NoteChooser;