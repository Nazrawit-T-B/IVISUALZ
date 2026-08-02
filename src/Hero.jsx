import {Button} from './components/ui/button'
import './hero.css'
import { Separator } from "@/components/ui/separator"

const Hero=()=>{

    return (
        <>
        <div className="hero">
            <div className="title">
               <h1>Interesting Algorithms and Comp Sci concepts Visualized For better learning and Understanding</h1> 
            </div>
            <div className="sub-title">
                Built for Students and Passionate Enthusaists
            </div>
            <div className="Btns">
                <Button variant="outline" size="lg" className="text-gray-700"> Explore</Button>
                <Button variant="outline" size="lg" className="text-gray-700"> Know More</Button>
            </div>
        </div>
         <Separator className="bg-gray-800 dark:bg-gray-900 my-4" />

        </>
        
    )
}
export default Hero