import Image from 'next/image';
import Reading from '../../public/images/reading.gif';


const CustomLoader = ({ msg = null }) => {

    return (
        <div className='flex flex-col justify-center items-center h-80 px-2'>
            <div className="w-36">
                <Image
                    src={Reading}
                    alt="Reading"
                />
            </div>
            {msg && <p className='mt-4 text-sm text-gray-500 text-center'>{msg}</p>}
        </div>
    );
};

export default CustomLoader;
