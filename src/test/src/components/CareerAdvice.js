import React from 'react';
import './CustomStyles.css'; // Import custom styles
import downloadImage from '../images/download.png';
const CareerAdvice = () => {
  return (
    <div className="row">
      {/* Advice Post 1 */}
      <div className="col-md-4 mb-4">
        <div className="card custom-card h-100">
          <img src={downloadImage} className="card-img-top custom-card-img" alt="Post 1" />
          <div className="card-body">
            <h5 className="card-title custom-title">What Does "Laid Off" Mean? (And How to Handle it?)</h5>
            <p className="card-text custom-text">Dive deep into the meaning of layoffs and learn how to handle being laid off...</p>
          </div>
          <div className="card-footer custom-footer">
          <img src='/images/image copy.png' className='circular-image' alt='e'/>
            <small className="text-muted">  by Gurneer Puri</small>
          </div>
        </div>
      </div>

      {/* Advice Post 2 */}
      <div className="col-md-4 mb-4">
        <div className="card custom-card h-100">
          <img src="/images/image4.png" className="card-img-top custom-card-img" alt="Post 2" />
          <div className="card-body">
            <h5 className="card-title custom-title">Workplace Anxiety: How to Manage It</h5>
            <p className="card-text custom-text">Discover strategies on how to deal with anxiety and stress at work...</p>
          </div>
          <div className="card-footer custom-footer">
          <img src='/images/image1copy.png ' className='circular-image' alt='e'/>
            <small className="text-muted">  by Smita Nag</small>
          </div>
        </div>
      </div>

      {/* Advice Post 3 */}
      <div className="col-md-4 mb-4">
        <div className="card custom-card h-100">
          <img src="/images/image.png" className="card-img-top custom-card-img" alt="Post 3" />
          <div className="card-body">
            <h5 className="card-title custom-title">Onboarding for Employees: Importance and How to Do It</h5>
            <p className="card-text custom-text">Here’s everything you need to know about the importance of onboarding...</p>
          </div>
          <div className="card-footer custom-footer">
            <img src='/images/image copy.png' className='circular-image' alt='e'/>
            <small className="text-muted">  by Gurneer Puri</small>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
