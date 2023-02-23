 import { createBrowserRouter } from "react-router-dom";
 import Home from "../views/Home";
 import DetailedView from "../views/DetailedView";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "services",
                element: <DetailedView />,
                loader: fetchServices,
            },
           {
                path: "homepage",
                element: <Home />,
            },
            
        ],
    },
]);

async function fetchServices() {
    const services = await productHandler.loadProducts();
    return { services }
}