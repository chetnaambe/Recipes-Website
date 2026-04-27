
import { Route, Routes } from "react-router-dom"
import Recipes from "../pages/Recipes"
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Create from '../pages/Create'
import Fav from '../pages/Fav'
import RecipeDetails from "../pages/RecipeDetails"
import PageNotFound from "../pages/PageNotFound"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import ProtectedRoute from "../Components/ProtectedRoute"
const Mainroutes = () => {
  return (
   
  
 
   <Routes>
    <Route path ="/" element = { <Home />} />
     <Route path ="/recipes" element = { <Recipes />} />
          <Route path ="/recipes/details/:id" element = { <RecipeDetails />} />
      <Route path ="/contact" element = { <Contact />} />
       <Route path ="/create" element = { 
        <ProtectedRoute>
        <Create />
        </ProtectedRoute>
        } />
        <Route path ="/fav" element = { <Fav />} />
     <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup/>} />
       <Route path="*" element = { <PageNotFound /> } />
    </Routes>
   
    
  )
}

export default Mainroutes