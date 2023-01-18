import React from 'react';

const AboutDetails = () => {
    return (
        <div className='px-20 py-10 flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>ReactJS Development</h2>
            <p className='text-xl font-bold text-slate-400'>Simmi Foundation Organization</p>
            <h2 className='text-xl font-bold'>About Simmi Foundation Organization</h2>
            <p>Simmi Foundation is a not-for-profit, non-governmental organization that aims to work for the upliftment and betterment of society. We work on creating awareness about environmental and social issues through educational seminars and interactive classroom sessions. Our focus is on creating awareness among the youth and the younger generation. We also focus on social issues, working towards educating the younger generation about burning social problems, and talking about topics generally considered taboo in our society, for instance, menstruation, malnutrition, and safety measures for women during pregnancy.</p>
            <a className='btn bg-white text-slate-800 border-2 hover:text-white w-fit' href='https://simmifoundation.org/home/home.php'>Go website</a>
        </div>
    );
};

export default AboutDetails;