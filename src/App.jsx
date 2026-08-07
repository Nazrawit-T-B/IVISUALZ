import { motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import CardDemo from "./CardDemo";
import Footer from "./Footer";
import EmailSection from "./EmailSection";
import Process from "./Process";

// Define a reusable animation configuration variant
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts hidden, shifted down 50px
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } // Smoothly fades up
};

const App = () => {
  return (
    <>
      <Header />
      
      {/* 1. Hero entry view */}
      <Hero />
      
      {/* 2. Collection Section with Scroll Trigger */}
      <motion.div
        id="algorithms"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }} // Animates once when 15% of the item is visible
        variants={fadeUpVariants}
        className="min-h-screen py-12 overflow-hidden"
        style={{
          width: "100%",
          background: "var(--bg-elevated)",
        }}
      >
        <div className="w-full px-10">
          <p className="text-white tracking-widest">THE COLLECTION</p>
        </div>
        <div className="mt-8">
          <CardDemo />
        </div>
      </motion.div>

      {/* 3. Process Section with Slide/Fade Scroll Trigger */}
      <motion.div 
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <Process />
      </motion.div>

      {/* 4. Contact/Email Section with Scroll Trigger */}
      <motion.div 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <EmailSection />
      </motion.div>

      <Footer />
    </>
  );
};

export default App;
