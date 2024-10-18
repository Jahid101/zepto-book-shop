import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDebouncedValue } from '@/utility/utilityFunctions';
import { SearchInput } from '@/components/ui/searchInput';
import { cn } from '@/lib/utils';
import { useSelector } from 'react-redux';
import { themeData } from '@/store/slices/themeSlice';


const TopSection = () => {
    const [stickyClassName, setStickyClassName] = useState('');
    const [hideImg, setHideImg] = useState(false);
    const { themeInfo } = useSelector(themeData);


    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    // css className while scrolling
    let handleScroll = () => {
        if (window.outerWidth > 639 && window.pageYOffset >= 90) {
            setStickyClassName("fixed w-full max-w-full rounded-sm z-10 bg-slate-50 py-1 px-2 shadow-md top-0 mt-0 min-[1800px]:px-[5%]")
        }
        else {
            if (window.outerWidth <= 639 && window.pageYOffset >= 160) {
                setStickyClassName("fixed w-full max-w-full rounded-sm z-10 bg-slate-50 py-1 px-2 shadow-md top-0 mt-0 min-[1800px]:px-[5%]")
                setHideImg(true);
            } else {
                setStickyClassName("")
                setHideImg(false);
            }
        }
    }


    return (
        <div
            id="searchSection"
            className={cn('mt-5 flex flex-col sm:flex-row gap-2 items-center   px-2 sm:px-[5%] min-[1800px]:px-0 max-w-[1720px] mx-auto', stickyClassName)}
        >

        </div>
    );
};

export default TopSection;
