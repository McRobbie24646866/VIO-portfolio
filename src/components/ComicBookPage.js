import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './ComicBookPage.css';
import ComicBookPDF from './ComicBook.pdf';

const ComicBookPage = ({ setCurrentPage }) => {
  return (
    <div className="comic-book-page">
      <nav className="comic-nav">
        <div className="comic-nav-content">
          <button
            className="back-button"
            onClick={() => setCurrentPage('projects')}
          >
            <ArrowLeft size={24} />
            Back to Projects
          </button>
          <h1 className="comic-title">Comic Book - VIO101</h1>
        </div>
      </nav>

      <div className="comic-viewer">
        <iframe
          src={ComicBookPDF}
          title="Comic Book PDF"
          className="pdf-viewer"
        />
      </div>
    </div>
  );
};

export default ComicBookPage;
