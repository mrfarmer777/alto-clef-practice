import { Voice, Stave, StaveNote, Formatter, Renderer } from 'vexflow';
import { useEffect } from 'react'

function NotationDisplay(props){

  const buildNote = () => {
    const noteName = props.targetNote ?? "c"
    const octave = props.octave ?? "4"
    return new StaveNote( { clef: "alto", keys: [`${noteName}/${octave}`], duration: "w"})
  }

  const numberToHex = (value) => {
    const number = Math.floor(0.01 * value * 255);
    return `#${number.toString(16)}${number.toString(16)}${number.toString(16)}`
  };

  useEffect(() => {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';
    const renderer = new Renderer(outputElement, Renderer.Backends.SVG);
    renderer.resize(400,275);

    const context = renderer.getContext();
    context.scale(2,2);
    context.setFont('Arial', 10);

    const formatter = new Formatter();
    const trebleStave = new Stave(0, -15, 400);
    trebleStave.addClef('treble').setStyle({strokeStyle: numberToHex(props.opacity), fillStyle: numberToHex(props.opacity)})

    const bassStave = new Stave(0, 45, 400);
    bassStave.addClef('bass').setStyle({strokeStyle: numberToHex(props.opacity), fillStyle: numberToHex(props.opacity)})

    const altoStave = new Stave(70,15, 350);
    altoStave.addClef('alto')

    const targetNote = buildNote();
    const voice = new Voice({num_beats: 4, beat_value: 4})
    voice.addTickables([targetNote])


    formatter.joinVoices([voice]).format([voice])

    trebleStave.setContext(context).drawWithStyle();
    bassStave.setContext(context).drawWithStyle();
    context.setStrokeStyle('#000')
    voice.setStave(altoStave);
    altoStave.setContext(context).draw();
    voice.draw(context);

    const trebleTickables = []
    if(props.trebleHelpers.length > 0){
      trebleTickables.push(new StaveNote({ clef: 'treble', keys: props.trebleHelpers, duration: "w" }))
      const trebleVoice = new Voice({num_beats: 4, beat_value: 4})
      trebleVoice.addTickables(trebleTickables)
      trebleVoice.setStave(trebleStave).setStyle({strokeStyle: numberToHex(props.opacity), fillStyle: numberToHex(props.opacity)});
      formatter.joinVoices([trebleVoice]).format([trebleVoice])
      trebleVoice.setContext(context).drawWithStyle();
    }

    const bassTickables = []
    if(props.bassHelpers.length > 0){
      bassTickables.push(new StaveNote({ clef: 'bass', keys: props.bassHelpers, duration: "w" }))
      const bassVoice = new Voice({num_beats: 4, beat_value: 4})
      bassVoice.addTickables(bassTickables)
      bassVoice.setStave(bassStave).setStyle({strokeStyle: numberToHex(props.opacity), fillStyle: numberToHex(props.opacity)});;
      formatter.joinVoices([bassVoice]).format([bassVoice])
      bassVoice.setContext(context).drawWithStyle();
    }
  })


  return ('')
}

export default NotationDisplay;