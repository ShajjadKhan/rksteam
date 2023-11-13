import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";
import Services from "../Layout/Services/Services";
import Portfolio from "../Layout/Portfolio/Portfolio";
import Contact from "../Layout/Contact/Contact";


const routers = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/services',
        element : <Services></Services>
      },
      {
        path : '/portfolio',
        element :<Portfolio></Portfolio>
      },
      {
        path : '/contact',
        element :<Contact></Contact>
      }
    ]
  }
]);

export default routers;