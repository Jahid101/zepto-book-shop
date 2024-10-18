import BookList from "@/components/book/BookList";
import ScrollToTop from "@/components/customUI/ScrollToTop";
import TopNavBar from "@/components/top/TopNavBar";

export default function Home() {

  return (
    <div className="mb-10">
      <TopNavBar />
      <div className="pt-24"></div>
      <BookList />
      <ScrollToTop />
    </div>
  );
}
