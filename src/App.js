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
import Details from './components/Details/Details';
import Blog from './components/Blog/Blog';

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
     },
     {
      path:'/blog',
      element:<Blog></Blog>
     },
     {
      path:'/details',
      
      element:<Details></Details>,
     
        }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}>
      
     
    </RouterProvider>
  );
}

export default App;
