import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ParentLayout from './pages/ParentLayout'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostBlogPage from './pages/PostBlogPage'
import ArticelDetailsPage from './pages/ArticleDetailsPage'
import './App.css';

function App() {
  return (
   <>
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<ParentLayout/>}>
    <Route path='home' element={<HomePage/>}/>
    <Route path="post" element={<PostBlogPage/>}/>
    <Route path='details' element={<ArticelDetailsPage/>}/>
   </Route>
    

  
   
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
