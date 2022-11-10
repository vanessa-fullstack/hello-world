import './Greeting.css';

const Greeting = (props) => {
    return <p className="greeting-paragrapgh">Hello {props.name}, you are {props.age} years old.</p>;
}

export default Greeting;