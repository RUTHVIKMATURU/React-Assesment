import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/sixth-seventh-tenth/Home';
import Rootlayout from './components/sixth-seventh-tenth/Rootlayout';
import Register from './components/sixth-seventh-tenth/Register';
import Login from './components/sixth-seventh-tenth/Login';
import Technologies from './components/sixth-seventh-tenth/Technologies';
import UserProfile from './components/sixth-seventh-tenth/UserProfile';
import Vue from './components/sixth-seventh-tenth/Vue';
import Nodejs from './components/sixth-seventh-tenth/Nodejs';
import Express from './components/sixth-seventh-tenth/Express';
function App(){
    let browserRouterObj=createBrowserRouter([
        {
            path:"",
            element:<Rootlayout/>,
            children:[
              {
                path:"",
                element:<Home/>
              },
              {
              path:"Register",
              element:<Register/>
              },
              {
                path:"Login",
                element:<Login/>
              },
              {
                path:"Technologies",
                element:<Technologies/>,
                children:[
                    {
                      path:"vue",
                      element:<Vue/>
                    },
                    {
                      path:"nodejs",
                      element:<Nodejs/>
                    },
                    {
                      path:"express",
                      element:<Express/>
                    },
                    {
                      path:"",
                      element:<Navigate to="vue"/>
                    }
                  ]
            },
              {
                path:"UserProfile",
                element:<UserProfile/>
              }
            ]
        }
    ])
    return <RouterProvider router={browserRouterObj} />;
}

export default App;