import MainLayout from "../components/Layout/MainLayout.js";
import { Route, Routes } from "react-router-dom";
import MainApp from '../pages/index.js';
import Experience from '../pages/experiences.js';
import Skills from '../pages/skills.js';
import Project from '../pages/project.js';
export default function Main({children}){
    const items = [
        { path: '/', label: 'Home', element: <MainApp />},
        { path: '/experiences', label: 'Working Experience', element: <Experience />},
        { path: '/project', label: 'Projects', element: <Project />},
        { path: '/skills', label: 'Skills', element: <Skills />},
    ];
    return(
        <>
            <MainLayout />
            <Routes>
                {
                    items.map((v) => (
                        <Route path={v.path} element={v.element} key={v.path} />
                    ))
                }
            </Routes>
        </>
    )
}