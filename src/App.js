import React, { useState } from "react";

function App() {
  return <div> 
    <Folder name="Desktop">
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
  const [ isOpen, setIsOpen ] = useState(true);

  const { name, children } = props;
  return <div>
    {props.name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children: null}
    </div>
  </div>
};

const File = (props) => {
  return <div>{props.name}</div>
}


export default App;
