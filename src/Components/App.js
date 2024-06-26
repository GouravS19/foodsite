import { Header } from "./Header";
import Home from "./Home";
import HomeBody from "./HomeBody";
import Search from "./Search";
import UserLogIn from "./UserLogIn";
import {createBrowserRouter} from "react-router-dom"
import UsingHeader from "./UsingHeader";
import ResMenu from "./ResMenu";
import Cart from "./Cart";


const App=()=> {
  return (
      <UserLogIn/>
  );
}
export const appRouter= createBrowserRouter(
  [
    {
      path:"/",
      element:<UserLogIn/>
    },
    {
      path:"/home",
      element:<Home/>,
      children:[
        {
          path:"/home",
          element:<HomeBody/>
        },
        {
          path:"/home/search",
          element:<Search/>
        }
      ]
    },
    {
      path:"/res",
      element:<UsingHeader/>,
      children:[
        {
          path:"/res/:resIdis",
          element:<ResMenu/>
        },
        {
          path:"/res/cart",
          element:<Cart/>
        }
      ]

    }
  ]
)
// export default App;
