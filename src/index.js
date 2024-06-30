import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import { appStore } from "./utils/appStore";
import { appRouter } from '../src/Components/App';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter} ></RouterProvider>
    </Provider>

);


