import { useState } from "react"
import {PostComponent} from "./posts"
function App(){
  const [posts,setPosts] = useState([])

  const PostComponents = posts.map(post=>
    <PostComponent
    name={post.name}
    title={post.title}
    time={post.time}
    description={post.description}
    image={post.image}

    />
  )
  function addPost(){
    setPosts([...posts,{
      name: "Prashant",
      title: "random bs",
      time: "1 day ago",
      description:"it was the best of times,it was the worst of times.It was the age of wisdom ,it was the age of foolishness",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq1ZxF9BO4pzpRRhRBOmLIN_kj5yFlU6ZHA&s"
    }
    ])
  }

  return (
    <div style={{height:"100%" ,background:"white" ,padding:"10px 0px"}}>
      <button onClick={addPost}>Add Post</button>
      <div> 
        {PostComponents}
      </div>
    </div>
  )
}

export default App