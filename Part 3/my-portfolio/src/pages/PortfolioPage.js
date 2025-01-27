import React from 'react';

const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
        <h3>Medical Management System</h3>
                <h4>Designed and developed a software application using VB.NET to manage patient records, 
                    appointments, and billing. Integrated a database management 
                    system to store and retrieve data efficiently.</h4>
        </div>
        <div className="portfolio-item">
        <h3>Tic-Tac-Toe Game</h3>
                <h4>
                    Created an interactive Tic-Tac-Toe game using React.
                         Focused on implementing dynamic components, state management, and a user-friendly interface.
                </h4>

        </div>
        <div className="portfolio-item">
        <h3>Music Player</h3>
                <h4>
                    Built a functional music player application that allows users to play, pause, and skip tracks. 
                    Worked on the design and logic to ensure a smooth user experience.
                </h4>

        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
