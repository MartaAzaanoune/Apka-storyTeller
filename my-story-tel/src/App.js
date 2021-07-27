import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import AudioList from './AudioList';

export default function App() {
   const [file, setFile] = useState(null)
  return (
      <div>
          <input type='file' onChange={e => setFile(e.target.files)} />
        <AudioList/>
      </div>
  )
}
ReactDOM.render(<App/>, document.getElementById("root"));




