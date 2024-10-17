import Layout from "../components/layout";
import Home from "../pages/home/Home";

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
                // element: <Home/>,
            },

        ]


    }



]
