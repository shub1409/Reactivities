import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboards/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path:'/',
        element:<App />,
        children:[
            {path:'activities', element: <ActivityDashboard />},
            {path:'activities/:id', element: <ActivityDetails />},
            {path:'createActivity', element: <ActivityForm key='create' />},
            {path:'manage/:id', element: <ActivityForm key='manage' />},
        ]
    }
]
export const router = createBrowserRouter(routes);