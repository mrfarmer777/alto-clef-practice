import { Voice, Stave, StaveNote, Formatter, Renderer } from 'vexflow';
import { useEffect } from 'react'

function NotationDisplay(){
  useEffect(() => {
    const outputElement = document.getElementById('output');
    const renderer = new Renderer(outputElement, Renderer.Backends.SVG);
    renderer.resize(1000,1000);

    const context = renderer.getContext();
    context.scale(2,2);
    context.setFont('Arial', 10);

    const formatter = new Formatter();

    const trebleStave = new Stave(10, 40, 400);
    trebleStave.addClef('treble').setStyle({strokeStyle: '#dedede'})

    const bassStave = new Stave(10, 100, 400);
    bassStave.addClef('bass').setStyle({strokeStyle: '#dedede'})

    const altoStave = new Stave(60,70, 350);
    altoStave.addClef('alto')



    const targetNote = new StaveNote({clef: "alto", keys: ["c/4"], duration: "w"})
    const voice = new Voice({num_beats: 4, beat_value: 4})
    voice.addTickables([targetNote])


    formatter.joinVoices([voice]).format([voice])

    voice.setStave(altoStave);
    voice.draw(context);
    trebleStave.setContext(context).draw();
    bassStave.setContext(context).draw();
    altoStave.setContext(context).draw();
  })


  return (
    'hello'
    )
}

export default NotationDisplay;