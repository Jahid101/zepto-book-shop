import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/router';
import { GoHeartFill } from "react-icons/go";


const Wishlist = ({ data = [], setWishlist }) => {
    const router = useRouter()
    const { toast } = useToast();

    const removeFromWishlist = (item) => {
        let oldData = [...data]
        const updatedWishlist = oldData.filter(book => book?.id !== item?.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist)

        toast({
            variant: "success",
            title: `Book id: ${item?.id} removed from wishlist`,
        })
    }


    return (
        <div className='py-5'>
            <div className='flex justify-center mb-10 w-full'>
                {data?.length > 0 ?
                    <div className='w-full max-w-[1610px] flex flex-wrap gap-7 px-5 md:gap-3 lg:gap-7 justify-center animate-fadeInUp'>
                        {data?.length > 0 && data.map((item, index) => {
                            return (
                                <div className="relative flex w-full max-w-[23rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-105" key={item?.id}>
                                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-primary py-2">
                                        {/* <Image */}
                                        <img
                                            src={item?.formats['image/jpeg'] || 'images/noImg.jpg'}
                                            alt="book"
                                            className="rounded-lg mx-auto h-[300px] w-[385px]s shadow-xl border"
                                        // width={385}
                                        // height={255}
                                        />
                                        <button
                                            className="!absolute top-4 right-2 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-200 flex justify-center items-center shadow-xl"
                                            type="button"
                                            data-ripple-dark="true"
                                            onClick={() => removeFromWishlist(item)}
                                        >
                                            <GoHeartFill
                                                className='w-5 h-5'
                                            />
                                        </button>
                                        <span
                                            className="!absolute bottom-2 right-2 h-8 max-h-[32px] px-2 select-none rounded-md text-center align-middle font-sans text-xs uppercase text-gray-700 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-200 flex justify-center items-center font-bold shadow-xl"
                                        >
                                            ID #{item?.id}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-3 flex items-center justify-between">
                                            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased text-left">
                                                {item?.title?.toString()?.length > 25 ? item?.title?.toString()?.substring(0, 25) + " ....." : item?.title?.toString()?.substring(0, 25)}
                                            </h5>
                                            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                5.0
                                            </p>
                                        </div>

                                        <div className='flex gap-1 font-sans text-base leading-relaxed text-gray-700 antialiased'>
                                            <p className='font-semibold'>By</p>
                                            <p>
                                                {item?.authors?.length > 0 && item?.authors?.map((author, index) => {
                                                    return (
                                                        <span key={author?.name}>{index != 0 && ', '}{author?.name}</span>
                                                    )
                                                })}
                                            </p>
                                        </div>

                                        <div className="h-[75px]">
                                            {item?.subjects.slice(0, 3).map((subject, index) => (
                                                <Badge key={index} className='bg-gray-500 text-white ml-2 mt-1'>
                                                    {subject.split(' -- ')[0]}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <Button
                                            className="w-full"
                                            onClick={() => router.push(`book/${item?.id}`)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    :
                    <div className='flex flex-col justify-center items-center h-72'>
                        <p className='text-center text-2xl font-semibold'>Wishlist is empty!</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Wishlist;
