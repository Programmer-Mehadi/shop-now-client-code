import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center'>
              <div>
                <p className='text-center text-xl font-bold'>Loading...</p>
                <progress className="progress w-56 mx-auto"></progress>
              </div>
            </div>
    );
};

export default Loading;