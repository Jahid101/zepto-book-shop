import BookList from "@/components/book/BookList";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {

  return (
    <div className="text-center py-10">
      {/* <HeroSection /> */}

      <BookList />
    </div>
  );
}
