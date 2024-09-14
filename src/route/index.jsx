import Layout from "../components/layout";
import Home from "../pages/home";

export const ROUTE = [

    {
        path: "/",
        element: <Layout/>,
        children: [

            {
                path: "/myPortfolio",
                element: <Home/>,
            }
        ]


    }



]
