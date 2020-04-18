import React from "react";
const MicRecorder = require('mic-recorder-to-mp3');
 
const Microphone=()=>{


// New instance
const recorder = new MicRecorder({
  bitRate: 128
});
 
// Start recording. Browser will request permission to use your microphone.
const startRec = ()=>(
recorder.start().then(() => {
  // something else
}).catch((e) => {
  console.error(e);
})
)
 
// Once you are done singing your best song, stop and get the mp3.
const stopRec = ()=>(
recorder
.stop()
.getMp3().then(([buffer, blob]) => {
  // do what ever you want with buffer and blob
  // Example: Create a mp3 file and play
  const file = new File(buffer, 'me-at-thevoice.mp3', {
    type: blob.type,
    lastModified: Date.now()
  });

  const player = new Audio(URL.createObjectURL(file));
  player.play();
 
}).catch((e) => {
  alert('We could not retrieve your message');
  console.log(e);
})
)
return (
  <div className="readygo-button">

    <button onClick={(e)=>startRec()}>
      Start
    </button>
    <button onClick={(e)=>stopRec()}>
        Stop
    </button>
  </div>
)

}
export default Microphone;





// import { ReactMic } from 'react-mic';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       record: false,
//       sound: null
//     }
//   }

//   startRecording = () => {
//     this.setState({ record: true });
//   }

//   stopRecording = () => {
//     this.setState({ record: false });
//   }

//   onData = (recordedBlob) =>  {
//     console.log('chunk of real-time data is: ', recordedBlob);
//     this.setState({
//         sound: this.state.sound + recordedBlob
//     });
//     if(this.state.record==false) {
//     console.log('stop recordedBlob is: ', recordedBlob);
//     const finalSound = this.state.sound + recordedBlob;
//     console.log('the final sound is', finalSound);
//   }
// }

//   render() {
//     return (
//       <div>
//         <ReactMic
//           record={this.state.record}
//           className="sound-wave"
//           onStop={this.onStop}
//           onData={this.onData}
//           strokeColor="#000000"
//           backgroundColor="#FF4081" />
//         <button onClick={this.startRecording} type="button">Start</button>
//         <button onClick={this.stopRecording} type="button">Stop</button>
//       </div>
//     );
//   }
// }