import { Link } from 'react-router-dom'
import myphoto from './myphoto.jpg'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Hi, I'm Brian</h1>
      <img src={myphoto}/>
      <p>I am a senior majoring in Computer Science (suprise!)</p>
      <p>I have a strong passion for web development, and look forward to working in front-end soon, hopefully full-stack in the near future.</p>
      <p>The first "Hello, World" in an intro Python course was fun enough to get me in this field, but now I feel relieved that I know much more than that. </p>
      <p>Outside of computers, I am a huge fan of soccer (but really <em>football</em>).
      <br/>
      If there are any Cityzens out there, glad to meet you!</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
