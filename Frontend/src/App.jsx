import './App.css'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import ForgetPassword from './pages/ForgetPassword'
import HomePage from './pages/HomePage'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from './pages/MainPage'
import Products from './components/Products'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Pricing from './components/Pricing'
import Templetes from './components/Templetes'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path='/home' element={<HomePage />}/>
          <Route path='/main' element={<MainPage />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/templetes' element={<Templetes />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
