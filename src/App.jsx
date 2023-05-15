import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Comments from "./components/Comments"
import Albums from "./components/Albums"
import Photos from "./components/Photos"
import Post from "./components/Post"
import Todos from "./components/Todos"
import Users from "./components/Users"

const router = createBrowserRouter(
  [
  {
    path:'/comments',
    element:<Comments/>
  },
  {
    path:'/albums',
    element:<Albums/>
  },
  {
    path:'/photos',
    element:<Photos/>
  },
  {
    path:'/post',
    element:<Post/>
  },
  {
    path:'/todos',
    element:<Todos/>
  },
  {
    path:'/users',
    element:<Users/>
  }
]
) 
  

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
