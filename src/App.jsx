import Header from './Header'
import Hero from './Hero'
import CardDemo from './CardDemo'
import Footer from './Footer'
import ProductCard from 'src/components/shadcn-space/card/card-03.jsx'
import { Separator } from "@/components/ui/separator"
const App=()=>{
  return(
    <>
        <Header/>
        <Hero/>
        <CardDemo/>
        <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />
        <Footer/>
    </>


  )
}
export default App;