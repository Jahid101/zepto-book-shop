import CardContent from '@/components/customUI/CardContent';
import NoData from '@/components/customUI/NoData';
import CustomLoader from '@/components/loader/loader';
import TopNavBar from '@/components/top/TopNavBar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { booksAPIs } from '@/utility/api/bookApi';
import { getRandomLoadingMsgs } from '@/utility/utilityFunctions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NoImg from '../../public/images/noImg.jpg';
import { Button } from '@/components/ui/button';
import { LuDownload } from "react-icons/lu";
import { LiaReadme } from "react-icons/lia";


const BookDetailsPage = () => {
    const router = useRouter()
    const { toast } = useToast();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        if (router?.isReady) {
            getBookById()
        }
    }, [router.isReady]);


    const getBookById = async () => {
        try {
            const response = await booksAPIs.getBookById(router?.query?.id);
            if (response) {
                // console.log('response ==>', response);

                if (response?.id) {
                    setData(response)
                }
                setLoading(false);
            }
        } catch (error) {
            console.log("error ==>", error);
            if (error?.response?.data?.detail == "Not found") {
                toast({
                    variant: "error",
                    title: 'Book not found',
                })
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

    return (
        <div>
            <TopNavBar />
            <div className="pt-24"></div>
            <div className='w-fit max-w-[1570px] m-auto px-2 sm:px-5 pb-10'>

                {!loading && !data?.id &&
                    <NoData />
                }
                {loading && router?.isReady &&
                    <CustomLoader msg={getRandomLoadingMsgs()} />
                }

                {!loading && data?.id &&
                    <CardContent className="flex flex-col sm:flex-row justify-center gap-7 p-2 sm:px-5 sm:py-7 w-full ">
                        <div className='w-full sm:w-[40%]'>
                            <img
                                src={data?.formats['image/jpeg'] || NoImg}
                                alt="book"
                                className="rounded-lg max-h-[400px] sm:max-h-[700px] w-[400px] shadow-xl border m-auto"
                            />
                        </div>

                        <div className="w-full sm:w-[60%] pb-5">
                            <h5 className="text-2xl font-bold text-blue-gray-900">
                                {data?.title}
                            </h5>

                            <div className='flex gap-1 text-base text-gray-700 my-2'>
                                <p className='font-semibold'>By</p>
                                <p>
                                    {data?.authors?.length > 0 && data?.authors?.map((author, index) => {
                                        return (
                                            <span key={author?.name}>{index != 0 && ', '}{author?.name}</span>
                                        )
                                    })}
                                </p>
                            </div>

                            <div className='flex gap-1 text-base text-gray-700 my-2'>
                                <p className='font-semibold'>Total downloads: </p>
                                <p>
                                    {data?.download_count}
                                </p>
                            </div>

                            <div className='flex gap-1 text-base text-gray-700 my-2'>
                                <p className='font-semibold'>Available languages: </p>
                                <p className='uppercase'>
                                    {data?.languages?.toString()}
                                </p>
                            </div>

                            {data?.subjects.map((subject, index) => (
                                <Badge key={index} className='bg-gray-600 text-white ml-1 mt-1'>
                                    {subject.split(' -- ')[0]}
                                </Badge>
                            ))}

                            <div className='mt-5 flex flex-col sm:flex-row gap-3'>
                                {data?.formats['application/octet-stream'] &&
                                    <Button
                                        className="mr-3"
                                        variant="outline"
                                        onClick={() => window.open(data?.formats['application/octet-stream'])}
                                    >
                                        Download the book &nbsp;<LuDownload />
                                    </Button>
                                }

                                {data?.formats['text/html'] &&
                                    <Button
                                        className="mr-3"
                                        onClick={() => window.open(data?.formats['text/html'])}
                                    >
                                        Read Online &nbsp;<LiaReadme className='w-5 h-4' />
                                    </Button>
                                }
                            </div>

                        </div>
                    </CardContent>
                }
            </div>
        </div>
    );
};

export default BookDetailsPage;
