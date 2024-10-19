import BookList from "@/components/book/BookList";
import TopNavBar from "@/components/top/TopNavBar";

export default function Home() {

  return (
    <div className="mb-10">
      <TopNavBar />
      <div className="pt-24"></div>
      <BookList />
    </div>
  );
}
