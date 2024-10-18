import Pagination from '@/components/customUI/Pagination';
import CustomLoader from '@/components/loader/loader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { booksAPIs } from '@/utility/api/bookApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GoHeart, GoHeartFill } from "react-icons/go";
import NoImg from '../../public/images/noImg.jpg';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";


const BookList = () => {
    const router = useRouter()
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [totalBooks, setTotalBooks] = useState(null);
    const [wishlistData, setWishlistData] = useState([])
    const [selectedBook, setSelectedBook] = useState({});
    const [data, setData] = useState([
        {
            "id": 84,
            "title": "Frankenstein; Or, The Modern Prometheus",
            "authors": [
                {
                    "name": "Shelley, Mary Wollstonecraft",
                    "birth_year": 1797,
                    "death_year": 1851
                }
            ],
            "translators": [],
            "subjects": [
                "Frankenstein's monster (Fictitious character) -- Fiction",
                "Frankenstein, Victor (Fictitious character) -- Fiction",
                "Gothic fiction",
                "Horror tales",
                "Monsters -- Fiction",
                "Science fiction",
                "Scientists -- Fiction"
            ],
            "bookshelves": [
                "Browsing: Culture/Civilization/Society",
                "Browsing: Fiction",
                "Browsing: Gender & Sexuality Studies",
                "Browsing: Literature",
                "Browsing: Science-Fiction & Fantasy",
                "Gothic Fiction",
                "Movie Books",
                "Precursors of Science Fiction",
                "Science Fiction by Women"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/84.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/84.kf8.images",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/84.txt.utf-8",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/84/pg84-h.zip"
            },
            "download_count": 78467
        },
        {
            "id": 84,
            "title": "Frankenstein; Or, The Modern Prometheus",
            "authors": [
                {
                    "name": "Shelley, Mary Wollstonecraft",
                    "birth_year": 1797,
                    "death_year": 1851
                }
            ],
            "translators": [],
            "subjects": [
                "Frankenstein's monster (Fictitious character) -- Fiction",
                "Frankenstein, Victor (Fictitious character) -- Fiction",
                "Gothic fiction",
                "Horror tales",
                "Monsters -- Fiction",
                "Science fiction",
                "Scientists -- Fiction"
            ],
            "bookshelves": [
                "Browsing: Culture/Civilization/Society",
                "Browsing: Fiction",
                "Browsing: Gender & Sexuality Studies",
                "Browsing: Literature",
                "Browsing: Science-Fiction & Fantasy",
                "Gothic Fiction",
                "Movie Books",
                "Precursors of Science Fiction",
                "Science Fiction by Women"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/84.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/84.kf8.images",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/84.txt.utf-8",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/84/pg84-h.zip"
            },
            "download_count": 78467
        },
        {
            "id": 84,
            "title": "Frankenstein; Or, The Modern Prometheus",
            "authors": [
                {
                    "name": "Shelley, Mary Wollstonecraft",
                    "birth_year": 1797,
                    "death_year": 1851
                }
            ],
            "translators": [],
            "subjects": [
                "Frankenstein's monster (Fictitious character) -- Fiction",
                "Frankenstein, Victor (Fictitious character) -- Fiction",
                "Gothic fiction",
                "Horror tales",
                "Monsters -- Fiction",
                "Science fiction",
                "Scientists -- Fiction"
            ],
            "bookshelves": [
                "Browsing: Culture/Civilization/Society",
                "Browsing: Fiction",
                "Browsing: Gender & Sexuality Studies",
                "Browsing: Literature",
                "Browsing: Science-Fiction & Fantasy",
                "Gothic Fiction",
                "Movie Books",
                "Precursors of Science Fiction",
                "Science Fiction by Women"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/84.html.images",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/84.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/84.kf8.images",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/84.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/84.txt.utf-8",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/84/pg84-h.zip"
            },
            "download_count": 78467
        },
        {
            "id": 1513,
            "title": "Romeo and Juliet",
            "authors": [
                {
                    "name": "Shakespeare, William",
                    "birth_year": 1564,
                    "death_year": 1616
                }
            ],
            "translators": [],
            "subjects": [
                "Conflict of generations -- Drama",
                "Juliet (Fictitious character) -- Drama",
                "Romeo (Fictitious character) -- Drama",
                "Tragedies",
                "Vendetta -- Drama",
                "Verona (Italy) -- Drama",
                "Youth -- Drama"
            ],
            "bookshelves": [
                "Browsing: Fiction",
                "Browsing: Literature",
                "Browsing: Poetry"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/1513.html.images",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/1513.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/1513.kf8.images",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/1513.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/1513.txt.utf-8",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/1513/pg1513-h.zip"
            },
            "download_count": 62300
        },
        {
            "id": 1342,
            "title": "Pride and Prejudice",
            "authors": [
                {
                    "name": "Austen, Jane",
                    "birth_year": 1775,
                    "death_year": 1817
                }
            ],
            "translators": [],
            "subjects": [
                "Courtship -- Fiction",
                "Domestic fiction",
                "England -- Fiction",
                "Love stories",
                "Sisters -- Fiction",
                "Social classes -- Fiction",
                "Young women -- Fiction"
            ],
            "bookshelves": [
                "Best Books Ever Listings",
                "Browsing: Culture/Civilization/Society",
                "Browsing: Fiction",
                "Browsing: Literature",
                "Harvard Classics"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/1342.html.images",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/1342.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/1342.kf8.images",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/1342.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/1342.txt.utf-8",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/1342/pg1342-h.zip"
            },
            "download_count": 58812
        },
        {
            "id": 2701,
            "title": "Moby Dick; Or, The Whale",
            "authors": [
                {
                    "name": "Melville, Herman",
                    "birth_year": 1819,
                    "death_year": 1891
                }
            ],
            "translators": [],
            "subjects": [
                "Adventure stories",
                "Ahab, Captain (Fictitious character) -- Fiction",
                "Mentally ill -- Fiction",
                "Psychological fiction",
                "Sea stories",
                "Ship captains -- Fiction",
                "Whales -- Fiction",
                "Whaling -- Fiction",
                "Whaling ships -- Fiction"
            ],
            "bookshelves": [
                "Best Books Ever Listings",
                "Browsing: Fiction",
                "Browsing: Literature"
            ],
            "languages": [
                "en"
            ],
            "copyright": false,
            "media_type": "Text",
            "formats": {
                "text/html": "https://www.gutenberg.org/ebooks/2701.html.images",
                "text/html; charset=utf-8": "https://www.gutenberg.org/files/2701/2701-h/2701-h.htm",
                "application/epub+zip": "https://www.gutenberg.org/ebooks/2701.epub3.images",
                "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/2701.kf8.images",
                "text/plain; charset=utf-8": "https://www.gutenberg.org/files/2701/2701-0.txt",
                "application/rdf+xml": "https://www.gutenberg.org/ebooks/2701.rdf",
                "image/jpeg": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
                "application/octet-stream": "https://www.gutenberg.org/cache/epub/2701/pg2701-h.zip",
                "text/plain; charset=us-ascii": "https://www.gutenberg.org/ebooks/2701.txt.utf-8"
            },
            "download_count": 58362
        },
    ]);
    const { toast } = useToast();
    const [render, setRender] = useState(null)
    const [filters, setFilters] = useState({
        page: 0,
    });


    useEffect(() => {
        // getBookList()
    }, [filters]);

    useEffect(() => {
        let oldWishlist = localStorage.getItem('wishlist')
        let wishlist = JSON.parse(oldWishlist) || [];
        setWishlistData(wishlist)
    }, [render]);


    const getBookList = async () => {

        try {
            const response = await booksAPIs.getAllBook(filters)
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
                        src={item?.formats['image/jpeg'] || NoImg}
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
            <div className='flex justify-center mb-10 w-full'>
                {data?.length > 0 && !loading ?
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
                    :
                    <CustomLoader />
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
        </div >
    );
};

export default BookList;
