import { createBrowserRouter } from "react-router-dom";
import Planets from "./Planets";
import App from "../App";
import Spaceship from "./Spaceship";
import People from "./People";
import Vehicle from "./Vehicle";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: 'planets', element: <Planets/> },
    { path: 'spaceship', element: <Spaceship/> },
    { path: 'people', element: <People/> },
    { path: 'vehicle', element: <Vehicle/> },
]);

export default router;