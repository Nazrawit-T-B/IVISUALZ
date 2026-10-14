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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Smoothly fades up
};

const App = () => {
  return (
    <>
      <Header />

      <Hero />

      <motion.div
        id="algorithms"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={fadeUpVariants}
        className="section-shell overflow-hidden"
      >
        <p className="section-kicker">The collection</p>
        <div className="mt-2">
          <CardDemo />
        </div>
      </motion.div>

      <motion.div
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpVariants}
        className="border-t border-black/10 bg-[#f3ecdf]"
      >
        <Process />
      </motion.div>

      <motion.div
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
        className="border-t border-black/10 bg-[#f5f1ea]"
      >
        <EmailSection />
      </motion.div>

      <Footer />
    </>
  );
};

export default App;
