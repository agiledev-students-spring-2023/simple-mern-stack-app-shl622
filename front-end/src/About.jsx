import myphoto from './myphoto.jpg'
import { useEffect,useState,lazy } from 'react'
import './Home.css'


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [content, setContent] = useState({paragraphs:[]})
  const [image, setImage] = useState("")
  console.log("content",content)
  console.log("image", image)
  useEffect(()=>{
    const getData = async () =>{
      const res = await fetch('http://localhost:5002/api/about',{
        method: 'GET'
      })
      const data = await res.json()
      console.log(data)
      setContent({...data.content})
      const imageImport = await require(`./${data.image}`)
      setImage(imageImport)
    }
    getData()
  },[])
  const renderP = () => {
    return content.paragraphs.map((paragraph,index)=>{
      return <p key={index}>{paragraph}</p>
    })
  }
  return (
    <>
    {/* if image is truthy */}
    {image&&<img src={image}/>}
    {renderP()}
    </>
  )
}

// make this component available to be imported into any other file
export default About
