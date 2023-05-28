import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTask from '../pages/CreateTask';
import ListTask from '../pages/ListTaks';
import Home from '../pages/Home';
import EditTask from '../pages/EditTask';
import Wedding from '../pages/Wedding';

const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wedding />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<CreateTask />} />
                <Route path="/list" element={<ListTask />} />
                <Route path="/edit" element={<EditTask />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Routers;
