import Image from 'next/image';
import React from 'react';
import NoDataImg from '../../public/images/noData.webp';


const NoData = () => {

    return (
        <div className='flex flex-col justify-center items-center h-72'>
            <div className="w-40 mb-5">
                <Image
                    src={NoDataImg}
                    style={{ borderRadius: '8px' }}
                    alt="No data"
                    onClick={() => router.push('/')}
                />
            </div>
            <p className='text-center text-2xl font-semibold'>Book not found</p>
        </div>
    );
};

export default NoData;
