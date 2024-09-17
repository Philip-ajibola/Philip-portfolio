import Layout from "../components/layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

export const ROUTE = [

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home />,
            },

            {
                path: "/myPortfolio",
                element: <Home/>,
            },

        ]


    }



]
