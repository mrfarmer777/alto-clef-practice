import NoteChooser from './NoteChooser'

test('it provides a random note from a list of notes', ()=>{
  const noteChooser = new NoteChooser();

  const results = Array(10).fill(0).map((_, i) => { return noteChooser.select()})
  results.forEach((r)=>{
    expect(["a", "b", "c", "d", "e", "f", "g"]).toContain(r)
  })
})