import { Header } from "./Header";
import Home from "./Home";
import HomeBody from "./HomeBody";
import Search from "./Search";
import UserLogIn from "./UserLogIn";
import {createBrowserRouter} from "react-router-dom"


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
    }
  ]
)
// export default App;
