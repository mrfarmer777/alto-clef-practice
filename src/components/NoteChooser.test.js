import NoteChooser from './NoteChooser'

describe("NoteChooser#select", () => {
  const fullRange = ["a/1","b/1","c/1","d/1","e/1","f/1","g/1","a/2","b/2","c/2","d/2","e/2","f/2","g/2","a/3","b/3","c/3","d/3","e/3","f/3","g/3","a/4","b/4","c/4","d/4","e/4","f/4","g/4","a/5","b/5","c/5","d/5","e/5","f/5","g/5"]
  test('it provides a random note from a list of notes', ()=>{
    const noteChooser = new NoteChooser();

    const results = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 }
    for(let i=0; i < 10; i++){
      const selection = noteChooser.select();
      results[selection["noteName"]] +=1;
    }

    const total = Object.keys(results).reduce((accumulator, key) => {
      return accumulator += results[key]
    },0)

    expect(total).toEqual(10)

  })

  test('it includes an octave number as a string in the response', ()=>{
    const noteChooser = new NoteChooser();

    const result = noteChooser.select();

    expect([1,2,3,4,5]).toContain(parseInt(result["octave"]))

  })

  test('it accepts a range between which to select a note', ()=> {
    const noteChooser = new NoteChooser();

    const result = noteChooser.select("c/2", "e/2");

    expect(["c", "d", "e"]).toContain(result["noteName"])
    expect(result["octave"]).toEqual("2")
  })

  test('it accepts notes within a range that spans multiple octaves', () => {
    const noteChooser = new NoteChooser();
    const rangeStartInput = "c/3"
    const rangeEndInput = "d/5"

    const minExpectedIndex = fullRange.indexOf(rangeStartInput);
    const maxExpectedIndex = fullRange.indexOf(rangeEndInput);

    for(let i = 0; i<10; i++){
      const result = noteChooser.select(rangeStartInput, rangeEndInput);
      const resultString = `${result["noteName"]}/${result["octave"]}`
      const resultIndex = fullRange.indexOf(resultString)

      expect(resultIndex).toBeGreaterThanOrEqual(minExpectedIndex)
      expect(resultIndex).toBeLessThanOrEqual(maxExpectedIndex)
    }
  })
})
