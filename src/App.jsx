//Note: 
// 1. This is the main file of the project. All the routes is defined in this page.
// 2. Make a new branch with your name and your page name.
// 3. Do not make any changes in any of the files except the one which is assigned to you.
// 4. If you want to use any component from the components folder then import it like this.
// 5. All the css file should be in css-files folder.
// 6. Don't use unrelevant names for variables. Try to keep it more readable.
// 7. Don't wirte css for dark theme as I will take of that. 


// Instructions to folder structure
/*All the components is in src->components folder, and you have to do the same. If you are making a
  component then keep it in component folder only and name it accordingly.
  If your are making some components then make a folder and name it as your assigned page and then make
  a jsx file of that component. 
  Your component file structure should be like this , src->components->page_name->component_name.jsx
  Same goes with CSS files.
*/

// Instructions to run the project
/* 1. Clone the repo
   2. Run npm install
   3. Run npm run dev
*/

// Importing fromo react
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'

// Importing Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import Competitions from './pages/Competitions';
import BlogsPage from './pages/BlogsPage';
import AboutUs from './pages/AboutUs';

// ThemeProvide for dark and light theme
import { ThemeProvider } from './contexts/theme';
import BlogPage from './pages/BlogPage';



function App() {

  const [themeMode, setThemeMode] = useState('light');
    const darkTheme = ()=>{
        setThemeMode('dark');
    }

    const lightTheme = ()=>{
        setThemeMode('light');
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('dark',"light");
        document.querySelector('html').classList.add(themeMode);
    },[themeMode])

  return (
    <BrowserRouter>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/blogs" element={<BlogsPage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/blogpage" element = {<BlogPage></BlogPage>}></Route>
      </Routes>
      
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App
