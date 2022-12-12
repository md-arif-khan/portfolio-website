import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './layout/Main';
import About from './components/About/About';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
     {
      path:'/about',
      element:<About></About>
     }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}>
      
      <Home></Home>
    </RouterProvider>
  );
}

export default App;
