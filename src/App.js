import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import Title from './components/Title'
import UploadForm from './components/UploadForm'



function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;
