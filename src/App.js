import React, { useState } from 'react';
import SplashPage from './components/SplashPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ComicBookPage from './components/ComicBookPage';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');

  return (
    <div>
      {currentPage === 'splash' && <SplashPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'projects' && <ProjectsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'comicbook' && <ComicBookPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

export default App;