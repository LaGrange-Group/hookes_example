import React, {useState, useEffect} from 'react';


function App() {
  const instructors = ['David', 'JJ', 'Megan'];

  const [instructorObject, setInstructorObject] = useState({ name: 'David', awesomenessLevel: 75});

  function generateNewValues(){
    let randomName = instructors[Math.floor(Math.random() * (0, instructors.length))];
    setInstructorObject({...instructorObject, name: randomName, lastName: 'Some Last Name'});
  }

  return (
    <div>
      <h1>Instructor Name: {instructorObject.name}</h1>
      <h1>Awesomeness Level: {instructorObject.awesomenessLevel}</h1>
      {instructorObject.lastName &&
       <h1>Last Name: {instructorObject.lastName}</h1>
      }
      <button onClick={() => generateNewValues()}>Change Values</button>
    </div>

  );
}

export default App;
