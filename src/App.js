import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DarkModeToggle from "./components/darkMode/DarkModeToggle";
import Home from "./routes/home/Home.jsx";
import About from "./routes/about/About.jsx";
import Footer from "./components/footer/Footer";
import Admin from "./routes/admin/Admin";
import Dashboard from "./routes/admin/Dashboard";
import adminContext from "./contexts/adminContext";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
import darkModeContext from "./contexts/darkModeContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  const [admin, setAdmin] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  return (
    <>
      <adminContext.Provider value={{ admin, setAdmin }}>
        <darkModeContext.Provider value={{ dark, setDark }}>
          <div className='container'>
            <DarkModeToggle />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/projects' exact component={Projects} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/admin/auth' exact component={Admin} />
              {admin ? (
                <Route path='/admin/dashboard' exact component={Dashboard} />
              ) : (
                <Redirect to='/admin/auth' />
              )}
            </Switch>
            <Footer />
          </div>
        </darkModeContext.Provider>
      </adminContext.Provider>
    </>
  );
}
