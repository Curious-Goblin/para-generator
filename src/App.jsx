
import { RecoilRoot, useRecoilState } from 'recoil'
import './App.css'
import { ParaAtom } from './Para'

function App() {
  return (
    <RecoilRoot>
      <ParaGenerator />
    </RecoilRoot>
  )
}
function ParaGenerator() {
  const [paragraph, setParagraph] = useRecoilState(ParaAtom)

  function GenerateParagraph(value) {
    const totalLines = 500;
    let paragraph = []
    for (let i = 0; i < totalLines; i++) {
      let sentences = "";
      for (let j = 0; j < value.length; j++) {
        sentences += value[Math.floor(value.length * Math.random())]
        sentences += ' ';
      }
      paragraph.push(sentences)
    }
    setParagraph(paragraph);
  }



  return <div id='parentDiv'>
    <div id='mainDiv'>Para Generator</div>
    <input id='inputBox' type='text' ></input>
    <button id='button' onClick={(e) => {
      const inputValue = e.target.previousSibling.value
      const value = inputValue.split(',').map(word => word.trim());
      GenerateParagraph(value)
    }}>Generate Paragraph</button>
    {paragraph.map(word => <div className='paraSentence' key={1}>
      {word}
    </div>)}
  </div>
}
export default App

