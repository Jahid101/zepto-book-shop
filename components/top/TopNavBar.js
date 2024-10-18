import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from '../../public/images/logo.png';


const TopNavBar = () => {
    const router = useRouter()

    return (
        <div className='bg-slate-50 fixed w-full z-10 py-2 shadow-lg'>
            <div className="flex items-center justify-between max-w-[1575px] mx-auto text-end px-3 sm:px-5">
                <div className="flex items-center">
                    <div className="w-14">
                        <Image
                            src={Logo}
                            style={{ margin: 'auto', cursor: 'pointer', borderRadius: '5px' }}
                            alt="logo"
                            onClick={() => router.push('/')}
                        />
                    </div>
                    <p className="w-fit text-xl font-bold hidden md:block text-black ml-3">Booksy</p>
                </div>

                <div>
                    <Button
                        className="mr-3"
                        variant={router?.asPath == '/' ? "" : "outline"}
                        onClick={() => router.push(`/`)}
                    >
                        Home
                    </Button>

                    <Button
                        variant={router?.asPath == '/wishlist' ? "" : "outline"}
                        onClick={() => router.push(`/wishlist`)}
                    >
                        Wishlist
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;
