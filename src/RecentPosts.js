import React from 'react';
import './CustomStyles.css'; // Import custom styles

const RecentPosts = () => {
    return (
        <div className="row">
            {/* Post 1 */}
            <div className="col-md-4 mb-4">
                <div className="card custom-card h-100">
                    <img src="/images/image1.png" className="card-img-top custom-card-img" alt="Post 1" />
                    <div className="card-body">
                        <h5 className="card-title custom-title">How to Write Leave Application for Sister’s Marriage?</h5>
                        <p className="card-text custom-text">Write a leave application or email for your sister’s wedding using these samples...</p>
                    </div>
                    <div className="card-footer custom-footer">
                    <img src='/images/image copy.png' className='circular-image' alt='e'/>
                        <small className="text-muted">by Gurneer Puri</small>
                    </div>
                </div>
            </div>

            {/* Post 2 */}
            <div className="col-md-4 mb-4">
                <div className="card custom-card h-100">
                    <img src="/images/image2.png" className="card-img-top custom-card-img" alt="Post 2" />
                    <div className="card-body">
                        <h5 className="card-title custom-title">How to Optimize Your Job Search with AI: Tips</h5>
                        <p className="card-text custom-text">Use technology to boost your resume, cover letter, and interview skills...</p>
                    </div>
                    <div className="card-footer custom-footer">

                        <img src='/images/image.png' className="mr-2 circular-image" alt="Post 2" />
                        <small className="text-muted">   by Naukri Guest Posts</small>


                    </div>
                </div>
            </div>

            {/* Post 3 */}
            <div className="col-md-4 mb-4">
                <div className="card custom-card h-100">
                    <img src="/images/image3.png" className="card-img-top custom-card-img" alt="Post 3" />
                    <div className="card-body">
                        <h5 className="card-title custom-title">How to Post a Job Online: Step-by-Step Guide for Employers</h5>
                        <p className="card-text custom-text">Learn how to post a job online with Naukri’s Hiring Suite and attract top talent to your company...</p>
                    </div>
                    <div className="card-footer custom-footer">
                    <img src='/images/image1copy.png' className='circular-image' alt='e'/>
                        <small className="text-muted">  by Smita Nag</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentPosts;
