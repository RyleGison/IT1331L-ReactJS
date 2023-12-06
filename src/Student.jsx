import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className="student">
            <img className="card-image" src={props.profilePic} alt="profile picture"/>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes ={
    profilePic: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultPops = {
    profilePic: "./assets/student-1.jpg",
    name: "Guest",
    age: 0,
    isStudent: false,
};
export default Student