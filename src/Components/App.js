import Home from "./Home";
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
      element:<Home/>
    }
  ]
)
// export default App;
