import { createContext } from 'react';
import PROJECTS_DATA from 'AppData/ProjectData';
import ABOUTDATA from 'AppData/AboutData';

const AppContext = createContext({} as any);
export const ProjectsContext = createContext(PROJECTS_DATA);
export const AboutContext = createContext(ABOUTDATA);

export default AppContext;
