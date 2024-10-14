import Image from "next/image";
import Logo from "../public/images/logo.webp";

export default function Home() {

  return (
    <div className="text-center py-10">
      <div className="flex justify-center">
        <Image
          src={Logo}
          alt="Error image"
          className="rounded-lg"
          width={500}
          height={350}
        />
      </div>
      <p className="text-2xl font-bold mt-5">Welcome to Zepto Book Shop</p>
    </div>
  );
}
