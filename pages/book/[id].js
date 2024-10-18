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
            <div className='max-w-[1570px] m-auto'>

                {!loading && !data?.id &&
                    <NoData />
                }
                {loading && router?.isReady &&
                    <CustomLoader msg={getRandomLoadingMsgs()} />
                }

                {!loading && data?.id &&
                    <div className='flex items-center justify-center gap-7 px-5 w-full'>
                        <CardContent className="w-full"></CardContent>

                        <CardContent className="w-full">

                            <div className="">
                                {data?.subjects.slice(0, 3).map((subject, index) => (
                                    <Badge key={index} className='bg-gray-600 text-white ml-2'>
                                        #{subject.split(' -- ')[0]}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </div>
                }
            </div>
        </div>
    );
};

export default BookDetailsPage;
