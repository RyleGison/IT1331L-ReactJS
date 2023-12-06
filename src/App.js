import Student from './Student.jsx'
import profile1 from './assets/student-1.jpg'
import profile2 from './assets/student-2.jpg'
import profile3 from './assets/student-3.jpg'
import profile4 from './assets/student-4.jpg'

function App() {
    return(
      <>
        <Student profilePic={profile1} name="Spongebob" age={30} isStudent={true}/>
        <Student profilePic={profile2} name="Patrick" age={42} isStudent={false}/>
        <Student profilePic={profile3} name="Squidward" age={50} isStudent={false}/>
        <Student profilePic={profile4} name="Sandy" age={27} isStudent={true}/>
      </>
    );
}
export default App