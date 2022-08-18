import React from 'react';
import paper from '../../image/paper-pen.png'

const Mission = () => {
    return (
        <>
            <div className="mission my-8 max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="mission-text flex flex-col justify-center">
                    <h2 className='text-gray-400 font-semibold text-[18px]'>MISSION</h2>
                    <h3 className='text-gray-600 font-semibold text-[23px]'>What is Our Mission?</h3>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident labore inventore accusamus rerum facilis sapiente, sequi totam veniam quaerat molestias facere voluptatum a veritatis doloremque, quo sint sit dolorem laborum quia repudiandae vitae recusandae. Quo voluptas cum obcaecati sunt qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti voluptatem sit officiis. Architecto libero facilis quo consectetur, explicabo aspernatur?</p>
                </div>
                <div className="img-holder">
                    <img src={paper} alt="" />
                </div>
            </div>
        </>
    );
};

export default Mission;