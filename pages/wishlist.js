import Wishlist from '@/components/book/Wishlist';
import TopNavBar from '@/components/top/TopNavBar';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        const list = localStorage.getItem('wishlist')
        const data = JSON.parse(list) || [];
        setWishlist(data)
    }, []);


    return (
        <div>
            <TopNavBar />
            <div className="pt-24"></div>

            <Wishlist data={wishlist} setWishlist={setWishlist} />
        </div>
    );
};

export default WishlistPage;
