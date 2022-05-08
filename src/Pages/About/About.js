import React from 'react';
import hamidul from '../../images/Hamidul.jpg';

const About = () => {
    return (
        <div>
            {/* About Section */}
        <div className='container'>
            <h1 className='services-title mt-3 mb-2 text-center'>About </h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />
            <div className='row my-5 align-items-center shadow-lg p-3 mb-5 about rounded'>
                <h2 className='about-me-title text-center'>About Me</h2>
                <div className='col-lg-4 col-12'>
                    <img className='img-fluid rounded-circle' src={hamidul} alt="" />
                </div>
                <div className='col-lg-8 col-12'>
                    <h3 className='text-warning'> Md.Hamidul Islam</h3>
                    <p > I'm a very good learner. I want to learn every day to grow up my skills.
                        I'm also a hard worker and dedicated person.
                        I have completed my graduation from Daffodil International University in Computer Science and Engineering.
                        I'm an expert in some programming languages like JavaScript, React JS and Python. I am also expert in some frameworks like
                        Bootstrap, Tailwind
                    </p>
                </div>
            </div>

            <div className='row mt-5 align-items-center shadow-lg p-3 mb-5 about rounded'>
                <h2 className='about-me-title text-center my-3'>Goal</h2>
                <div className='col-lg-6 col-12 mt-3'>
                    <h3 className='text-warning'>About My Goal</h3>

                    <p >Every person has a goal. I am not the different one, To achieve this    goal they can do their best.I have a goal. I want to be a full-stack developer. In the future, I want to build my carrier in React development. In the future, I want to build a company in the IT sector.
                    </p>
                </div>
                <div className='col-lg-6 col-12 mt-3'>

                    <h3 className='text-warning'>How I work hard?</h3>
                    <p >
                        To be a part of a challenging team that strives for the better growth of the
                        organization which explores my potential and provides me with the
                        opportunity to enhance my talent with an intention to be an asset to the
                        company. I am a candidate for the inclusion of an ordinary hardworking man.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;