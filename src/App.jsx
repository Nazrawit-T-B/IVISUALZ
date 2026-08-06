import Header from "./Header";
import Hero from "./Hero";
import CardDemo from "./CardDemo";
import Footer from "./Footer";
import { Separator } from "@/components/ui/separator";
import EmailSection from "./EmailSection";
import Process from "./Process";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <div
        className="min-h-screen py-12 overflow-hidden"
        style={{
          width: "100%",
          background: " var(--bg-elevated)",
        }}
      >
        <div className="w-full px-10">
          <p className="text-white tracking-widest">THE COLLECTION</p>
        </div>

        <div className="mt-8">
          <CardDemo />
        </div>
      </div>
      <Process />
      <Separator className="bg-gray-800 dark:bg-gray-900 my-2" />
      <EmailSection />
      <Footer />
    </>
  );
};
export default App;
