import React, {useState} from 'react'
import './App.css';
/* 
Deliverables
- Use the `useState` hook for the `image` and `likes` variables
- When the New Fox button is clicked, use the `handleNewFoxClick` function to fetch a random fox image. Use the image response from fetch to set the image variable.
- When the Like button is clicked, create an event handler that will increment the number of likes in state. Use the callback version of the state setter function to set the new number of likes.
*/

function App() {
//   const image = "https://randomfox.ca/images/41.jpg"
//   const likes = 0
  const [likes, setLikes] = useState(0)
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  console.log(image)
  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(image)
        setLikes(0)
      })
  }
  function handleLikes(){
      setLikes(prevLikes => prevLikes+1)
  }
  
  return (
    <div id='foxRoot'>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick} >New 🦊 Please</button>
          <button onClick={handleLikes} >Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App;