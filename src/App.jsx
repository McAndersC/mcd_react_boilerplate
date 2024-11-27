import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";

// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },

            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        {/* GLOBAL NAVIGATION */}
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
