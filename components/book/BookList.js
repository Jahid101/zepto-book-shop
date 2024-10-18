import { booksAPIs } from '@/utility/api/bookApi';
import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import NoImg from '../../public/images/noImg.jpg';
import CustomLoader from '@/components/loader/loader';
import Pagination from '@/components/customUI/Pagination';
import { GoHeart } from "react-icons/go";


const BookList = () => {
    const [loading, setLoading] = useState(false);
    const [totalBooks, setTotalBooks] = useState(null);
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
    const [date, setDate] = useState(null)
    const [filters, setFilters] = useState({
        page: 0,
    });


    useEffect(() => {
        // getBookList()
    }, [filters]);


    const getBookList = async () => {
        setLoading(true);

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


    // if (loading) {
    //     return <CustomLoader />
    // }



    return (
        <div className='bg-teal-700 py-5'>
            <div className='flex justify-center mb-10 w-full'>
                {data?.length > 0 && !loading ?
                    <div className='max-w-[1610px] flex flex-wrap gap-7 px-5 md:gap-3 lg:gap-7 justify-center'>
                        {data?.length > 0 && data.map((item, index) => {
                            return (
                                <div className="relative flex w-full max-w-[23rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg" key={item?.id}>
                                    <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                        <Image
                                            src={item?.formats['image/jpeg'] || NoImg}
                                            alt="book"
                                            className="rounded-lg h-[400px] w-[385px] shadow-xl border"
                                            width={385}
                                            height={255}
                                        />
                                        {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div> */}
                                        <button
                                            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-gray-200 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-gray-300 flex justify-center items-center"
                                            type="button"
                                            data-ripple-dark="true"
                                        >
                                            <GoHeart className='w-5 h-5' />

                                            {/* <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="h-6 w-6"
                                                >
                                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                                </svg>
                                            </span> */}
                                        </button>
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
                                            <p className='font-semibold'>ID:</p>
                                            <p>{item?.id}</p>
                                        </div>

                                        <div className='flex gap-1 font-sans text-base leading-relaxed text-gray-700 antialiased'>
                                            <p className='font-semibold'>Authors:</p>
                                            <p>
                                                {item?.authors?.length > 0 && item?.authors?.map((author, index) => {
                                                    return (
                                                        <span key={author?.name}>{index != 0 && ', '}{author?.name}</span>
                                                    )
                                                })}
                                            </p>
                                        </div>

                                        <div className='flex gap-1 font-sans text-base leading-relaxed text-gray-700 antialiased'>
                                            <p className='font-semibold'>Genre/Topics:</p>
                                            <p className='text-left'>
                                                {/* {getTopics(item?.subjects)} */}
                                                {item?.subjects?.toString()?.length > 105 ? item?.subjects?.toString()?.substring(0, 105) + " ....." : item?.subjects?.toString()?.substring(0, 105)}
                                            </p>
                                        </div>

                                        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                                    <span
                                        data-tooltip-target="money"
                                        className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                                clip-rule="evenodd"
                                            ></path>
                                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                                        </svg>
                                    </span>
                                </div> */}
                                    </div>
                                    <div className="p-6 pt-0">
                                        <button
                                            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            data-ripple-light="true"
                                        >
                                            Reserve
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    :
                    <CustomLoader />
                }
            </div>

            {data?.length > 0 && !loading &&
                <Pagination
                    total={totalBooks}
                    limit={32}
                    selectedPage={filters?.page}
                    setPage={(page) => {
                        setFilters({ ...filters, page: page?.selected })
                    }}
                />
            }
        </div>
    );
};

export default BookList;
