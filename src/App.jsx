/*****  Firefox Does Not Support Speech Recognition API  *****/



import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {

  const startListning = ()=> SpeechRecognition.startListening({ continuous: true, language:'en-IN' })
  const stopListning=()=> SpeechRecognition.stopListening();


  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return "Not Working"
  }


  return (
    <div className="App">
      <h2>Speech Recognition App</h2>
      <br/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus assumenda, quo at sed voluptates, ducimus ipsa magni saepe doloremque id deserunt recusandae voluptatem non sapiente. Modi, optio! Quibusdam, consectetur molestiae!</p>
      <div className="content">
        {transcript}
      </div>
      <div className="btn">
        <button>Copy</button>
        <button onClick={startListning}>Start Listning</button>
        <button onClick={stopListning}>Stop Listning</button>
      </div>
    </div>
  );
}

export default App;
