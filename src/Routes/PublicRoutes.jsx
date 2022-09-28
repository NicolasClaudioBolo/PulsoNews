import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { NotFound, Home, Layout, NoticeTemplate } from "./index";



const PublicRoutes = () => {




    return (
        <Router>
            <Layout>
                <Routes>
                    {/* <Route
                        exact
                        path="/login"
                        element={logged ? <Navigate to="/" /> : <Login />}
                    /> */}
                    {/* <Route
                        exact
                        path="/register"
                        element={logged ? <Navigate to="/" /> : <Register />}
                    /> */}
                    <Route exact path="/" element={<Home />} />

                    <Route  path="/:id" element={<NoticeTemplate />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>


        </Router>
    );
};

export default PublicRoutes;




 