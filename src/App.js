import React from "react";

function App() {
  return <div> 
    <Folder name="Desktop"/>
    <Folder name="Applications"/>
    </div> 
}

const Folder = (props) => {
  return <h4>{props.name}</h4>
};

const File = (props) => {
  
}


export default App;
