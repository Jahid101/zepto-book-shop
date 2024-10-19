import CardContent from '@/components/customUI/CardContent';
import NoData from '@/components/customUI/NoData';
import Pagination from '@/components/customUI/Pagination';
import CustomLoader from '@/components/loader/loader';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/searchInput';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/components/ui/use-toast';
import { booksAPIs } from '@/utility/api/bookApi';
import { getRandomLoadingMsgs } from '@/utility/utilityFunctions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GoHeart, GoHeartFill } from "react-icons/go";


const BookList = () => {
    const router = useRouter()
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [totalBooks, setTotalBooks] = useState(null);
    const [wishlistData, setWishlistData] = useState([])
    const [selectedBook, setSelectedBook] = useState({});
    const [data, setData] = useState([]);
    const { toast } = useToast();
    const [render, setRender] = useState(null)
    const [filters, setFilters] = useState({
        page: 0,
        page_size: 24,
        search: '',
        topic: '',
    });

    const options = [
        "Adventure", "Science Fiction", "Fantasy", "Mystery", "Romance",
        "Historical Fiction", "Horror", "Biography", "Autobiography", "Philosophy",
        "Religion", "Politics", "Science", "Technology", "Mathematics",
        "Economics", "Education", "Art", "Music", "Poetry", "Drama", "Literature",
        "Classics", "Humor", "Travel", "Cooking", "Health & Fitness", "Self-Help",
        "Psychology", "Nature", "Gardening", "Sports", "History", "Military",
        "Children's Books", "Young Adult", "Crime", "Thriller", "Western",
        "Essays", "Short Stories", "Folklore & Mythology", "Anthropology",
        "Linguistics", "Sociology", "Law", "Medicine", "Astronomy", "Physics",
        "Chemistry", "Engineering", "Architecture", "Environmental Studies",
        "Geography", "Zoology", "Botany", "Astronomy", "Computing"
    ];


    useEffect(() => {
        const oldFilters = localStorage.getItem('filters')
        const lsFilters = JSON.parse(oldFilters) || filters;
        setFilters(lsFilters)
        getBookList(lsFilters)
    }, []);

    useEffect(() => {
        let oldWishlist = localStorage.getItem('wishlist')
        let wishlist = JSON.parse(oldWishlist) || [];
        setWishlistData(wishlist)
    }, [render]);


    const getBookList = async (filter = filters) => {
        setLoading(true)

        localStorage.setItem('filters', JSON.stringify(filter))

        try {
            const response = await booksAPIs.getAllBook(filter)
            if (response) {
                // console.log('response ==>', response);
                setTotalBooks(response?.count)
                setData(response?.results)
                setLoading(false);
            }
        } catch (error) {
            console.log("error ==>", error);
            if (error?.response?.data == "Not found") {
                setData([])
                setLoading(false);
                return
            }

            toast({
                variant: "error",
                title: 'Something went wrong',
            })
            setLoading(false);
        }
    }



    const CardItem = ({ item, isWishListed }) => {
        return (
            <div className="relative flex w-full max-w-[23rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition-transform duration-300 transform hover:scale-105" key={item?.id}>
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-primary p-3">
                    <img
                        src={item?.formats['image/jpeg'] || 'images/noImg.jpg'}
                        alt="book"
                        className="rounded-lg mx-auto h-[300px] w-[385px]s shadow-xl border"
                    />
                    <button
                        className="!absolute top-4 right-2 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-200 flex justify-center items-center shadow-xl"
                        type="button"
                        data-ripple-dark="true"
                        onClick={() => {
                            if (isWishListed) {
                                setSelectedBook(item)
                                setOpenAlert(true)
                            } else {
                                addToWishlist(item)
                            }
                        }}
                    >
                        {isWishListed ?
                            <GoHeartFill
                                className='w-5 h-5'
                            />
                            :
                            <GoHeart
                                className='w-5 h-5'
                            />
                        }
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

                    <div className="md:h-[75px]">
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
    }


    const addToWishlist = (item) => {
        let oldWishlist = localStorage.getItem('wishlist')
        let wishlist = JSON.parse(oldWishlist) || [];
        wishlist.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        setRender(Math.random()) //for re-render

        toast({
            variant: "success",
            title: `Book id: ${item?.id} added to wishlist`,
        })
    }

    const removeFromWishlist = () => {
        const updatedWishlist = wishlistData.filter(book => book?.id !== selectedBook?.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setRender(Math.random()) //for re-render

        toast({
            variant: "success",
            title: `Book id: ${selectedBook?.id} removed from wishlist`,
        })
        setOpenAlert(false)
    }



    return (
        <div className='py-5'>

            {/* Filters */}
            <div className='px-5'>
                <CardContent className="flex flex-col lg:flex-row justify-end gap-5 w-full max-w-[1560px] mb-7 mx-autos">
                    <div className='flex items-center gap-5 flex-wrap'>
                        <div className="w-full md:w-72">
                            <p className='text-md text-primary mb-1'>Filter by Genre/Topic</p>

                            <Select
                                value={filters.topic}
                                disabled={loading}
                                onValueChange={(value) => {
                                    setFilters({ ...filters, topic: value })
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select genre/topic" />
                                </SelectTrigger>
                                <SelectContent className='max-h-96' >
                                    {options?.map((item, index) => {
                                        return (
                                            <SelectItem
                                                key={item}
                                                value={item}
                                            >
                                                {item}
                                            </SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full md:w-72">
                            <p className='text-md text-primary mb-1'>Search by Title</p>

                            <SearchInput
                                type="text"
                                id="search"
                                placeholder="Search"
                                className="placeholder:text-default"
                                disabled={loading}
                                icon={filters?.search && filters?.search?.length > 0}
                                value={filters?.search}
                                onClear={() => {
                                    setFilters({ ...filters, page: 0, search: '' })
                                }}
                                onChange={(e) => {
                                    setFilters({ ...filters, page: 0, search: e.target.value })
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex items-end gap-3 justify-end mt-5 md:mt-0'>
                        <p
                            className='cursor-pointer underline text-tertiary'
                            onClick={() => {
                                if (!loading) {
                                    setFilters({
                                        page: 0,
                                        page_size: 24,
                                        search: '',
                                        topic: '',
                                    })
                                    getBookList({
                                        page: 0,
                                        page_size: 24,
                                        search: '',
                                        topic: '',
                                    })
                                }
                            }}
                        >
                            Clear filter
                        </p>

                        <Button
                            disabled={loading}
                            onClick={() => getBookList()}
                        >
                            Filter
                        </Button>
                    </div>

                </CardContent>
            </div>

            {!loading && data?.length < 1 &&
                <NoData />
            }

            {loading && router?.isReady &&
                <CustomLoader msg={getRandomLoadingMsgs()} />
            }

            <div className='flex justify-center mb-10 w-full'>
                {data?.length > 0 && !loading &&
                    <div className='w-full max-w-[1610px] flex flex-wrap gap-7 px-5 md:gap-3 lg:gap-7 justify-center animate-fadeInUp'>
                        {data?.length > 0 && data.map((item, index) => {
                            return (
                                <CardItem
                                    item={item}
                                    isWishListed={wishlistData.some((book) => book.id === item.id)}
                                />
                            )
                        })
                        }
                    </div>
                }
            </div>

            {
                data?.length > 0 && !loading &&
                <Pagination
                    total={totalBooks}
                    limit={32}
                    selectedPage={filters?.page}
                    setPage={(page) => {
                        setFilters({ ...filters, page: page?.selected })
                        getBookList({ ...filters, page: page?.selected })
                    }}
                />
            }

            <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will remove the book from the wishlist.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Button
                            onClick={() => removeFromWishlist()}
                        >
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default BookList;
