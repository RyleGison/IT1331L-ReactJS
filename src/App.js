import React, { useState } from 'react';
import Student from './Student.jsx'
import profile1 from './assets/student-1.jpg';
import profile2 from './assets/student-2.jpg';
import profile3 from './assets/student-3.jpg';
import profile4 from './assets/student-4.jpg';

function App() {
  const [selectedStud, setSelectedStud] = useState(null);
    return(
      <>
        <Student profilePic={profile1} studentNum="1001" name="Spongebob" birth="July 14" quote="I'm, I'm, I'm- I'M A GOOFY GOOBER." Selected={selectedStud === "1001"} onClick={() => setSelectedStud("1001")}/>
        <Student profilePic={profile2} studentNum="1002" name="Finn" birth="March 14" quote="With you, I would walk down any road, milady—especially if it leads to the movies." Selected={selectedStud === "1002"} onClick={() => setSelectedStud("1002")}/>
        <Student profilePic={profile3} studentNum="1003" name="Mordecai" birth="January 15" quote="Dude, you can’t run from the future!" Selected={selectedStud === "1003"} onClick={() => setSelectedStud("1003")}/>
        <Student profilePic={profile4} studentNum="1004" name="Gumball" birth="July 24" quote="That's not what you are, it's just how you feel." Selected={selectedStud === "1004"} onClick={() => setSelectedStud("1004")}/>
      </>
    );
}
export default App