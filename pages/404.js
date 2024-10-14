import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Error from "../public/images/error.webp";
import Link from "next/link";


export default function Custom404() {

  return (
    <div className="flex flex-col justify-center items-center h-dvh px-2">
      <Image
        src={Error}
        alt="Error image"
        className="rounded-lg"
        width={400}
        height={350}
      />

      <p
        className="text-default text-2xl text-center mt-5"
      >
        We can't seem to find the page you're looking for.
      </p>

      <Link
        className="flex justify-center items-center mt-5 cursor-pointer"
        href="/"
      >
        <FaArrowLeftLong className="text-tertiary text-2xl" />
        <p className="ml-3 text-tertiary text-2xl">Back</p>
      </Link>

    </div>
  );
}
