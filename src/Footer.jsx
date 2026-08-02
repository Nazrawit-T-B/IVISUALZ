import ProductCard from 'src/components/shadcn-space/card/card-03.jsx'

const Footer=()=>{
    return(
        <footer className="bg-gray-800 dark:bg-gray-900 py-4">
            <div className="text-center">
                <h1>IVISUALZ</h1>
                <p>Visuals</p>
            </div>
           <div className="flex gap-50  my-7">
            <div className="info-section p-5" >
                <div></div>
                <div className="flex gap-30">
                    <div>
                        <h6>For General Inquires</h6>
                        <p>nazrawitbezabih@gmail.com</p>
                        <h6>For General Inquires</h6>
                        <p>nazrawitbezabih@gmail.com</p>
                        <h6>For General Inquires</h6>
                        <p>nazrawitbezabih@gmail.com</p>
                        <h6>For General Inquires</h6>
                        <p>nazrawitbezabih@gmail.com</p>
                    </div>
                    <div>
                        <h4>Pages </h4>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <h4>Visuals</h4>
                        <ul>
                             <li><a href="">Huffman Coding</a></li>
                            <li><a href="">Ceaser's Cipher</a></li>
                          <li><a href="">Sorting Algorithms</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="emailing-section">
                <ProductCard/>
            </div>
            </div>
        </footer>
    )
}
export default Footer