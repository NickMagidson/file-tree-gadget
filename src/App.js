import React from "react";

function App() {
  return <div> 
    <Folder name="Desktop" isOpen={false}>
      <Folder name="Music">
        <File name="all_star.mp3"/>
        <File name="express_file.mp3"/>  
      </Folder>
      <File name="dogs.jpeg"/>
      <File name="cats.png"/>
    </Folder>

    <Folder name="Applications"/>

    </div> 
}

const Folder = (props) => {
  return <div>
    {props.name}
    <div style={{ marginLeft: '17px' }}>
    {props.isOpen ? props.children: null}
    </div>
  </div>
};

const File = (props) => {
  return <div>{props.name}</div>
}


export default App;
