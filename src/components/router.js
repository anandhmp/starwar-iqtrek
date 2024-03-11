import { createBrowserRouter } from "react-router-dom";
import Planets from "./Planets";
import App from "../App";
import Spaceship from "./Spaceship";
import People from "./People";
import Vehicle from "./Vehicle";
import SpaceshipDetails from "./SpaceshipDetails";
import PersonDetail from "./PersonDetail";
import PlanetDetail from "./PlanetDetail";
import VehicleDetails from "./VehicleDetails";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: 'planets', element: <Planets/> },
    { path: 'spaceship', element: <Spaceship/> },
    { path: 'people', element: <People/> },
    { path: 'vehicles', element: <Vehicle/> },
    { path:"/spaceship/:uid", element:<SpaceshipDetails/>},
    { path:"/person/:id", element: <PersonDetail/>},
    { path:"/planet/:id" , element:<PlanetDetail/>},
    { path:"/vehicles/:id", element:<VehicleDetails/>}
]);

export default router;