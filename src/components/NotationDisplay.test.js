import { render, screen } from '@testing-library/react';
import NotationDisplay from './NotationDisplay';

test('renders an svg canvas', () => {
  render(
    <div>
      <NotationDisplay />
      <div id={'output'} title={'notation-output'}></div>
    </div>
    );
  const content = screen.getByTitle(/notation-output/i);

  expect(content).toBeInTheDocument();
  const svgEl = content.querySelector("[viewBox='0 0 500 500']")
  expect(svgEl).toBeDefined();
});

test('it renders the note given by the prop', ()=>{
  render(
    <div>
      <NotationDisplay targetNote='c' octave="3" />
      <div id={'output'} title={'notation-output'}></div>
    </div>
  )

  const content = screen.getByTitle(/notation-output/i);
  const originalSvg = content.querySelector("[viewBox='0 0 500 500']")
  const originalNoteHeadEl = originalSvg.querySelector(".vf-notehead path")

  expect(originalNoteHeadEl).toMatchSnapshot();

  render(
    <div>
      <NotationDisplay targetNote='d' octave="3"/>
    </div>
  )

  const newContent = screen.getByTitle(/notation-output/i);
  const secondSvg = newContent.querySelector("[viewBox='0 0 500 500']")
  const noteHeadEl = secondSvg.querySelector(".vf-notehead path")
  expect(noteHeadEl).toMatchSnapshot()
})

test('it renders the note in the octave given by the prop', ()=>{
  render(
    <div>
      <NotationDisplay targetNote='d' octave='4' />
      <div id={'output'} title={'notation-output'}></div>
    </div>
  )

  const newContent = screen.getByTitle(/notation-output/i);
  const secondSvg = newContent.querySelector("[viewBox='0 0 500 500']")
  const noteHeadEl = secondSvg.querySelector(".vf-notehead path")

  expect(noteHeadEl).toBeDefined();
})