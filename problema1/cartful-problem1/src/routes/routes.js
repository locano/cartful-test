import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Barista from "../pages/barista/barista";
import Q2 from "../pages/q2/q2";
import Result from "../pages/result/results";
import Sidebar from "../pages/sidebar/sidebar";


function AppRoutes() {
    return (
        <Router>
            <Sidebar>
            </Sidebar>
            <Routes>
                <Route exact path="/" element={<Barista />} >
                </Route>
                <Route path="/q2" element={<Q2 />}>
                </Route>
                <Route path="/results" element={<Result />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;
