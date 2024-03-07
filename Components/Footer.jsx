import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className='flex justify-center items-center fixed w-full bottom-0 h-24'>
        <div className='w-full h-full bg-gray-900 grid grid-cols-4 gap-0 text-white'>
          <div>

          </div>
          <div className='flex flex-col items-center justify-start pt-2'>
            <p className=' text-2xl'>Contact me:</p>
            <p>Phone: +91-9764118770</p>
            <p>Email: rutujagodghate@gmail.com</p>
          </div>
          <div className='flex flex-col ml-4 mb-9 pt-2'>
          
            <a href='https://www.linkedin.com/in/rutuja-godghate-53a513229?' target='_blank' rel=''>
              <div className='flex'>
                <img src='linkedin.png' alt='LinkedIn Logo' className='h-8 w-8 pb-2 pr-2' />
                <span>LinkedIn</span>
              </div>
            </a>

            <a href='https://github.com/rutxyz' target='_blank' rel='' >
              <div className='flex'>
               <img src='github.png' alt='GitHub Logo' className='h-8 w-8 pb-2 pr-2' />
              <span>GitHub</span>
              </div>
            </a>

            <a href='https://auth.geeksforgeeks.org/user/bt21cs5n0z' target='_blank' rel=''>
            <div className='flex'>
            <img src='gfg.png' alt='GeeksforGeeks Logo' className='h-8 w-8 pb-2 pr-2 ' />
              <span>GeeksforGeeks</span>
              </div>
            </a>
         
            
          </div>
          <div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
