
export default function ProductShipping() {
  return <>
    <div className="flex justify-between items-center gap-5 py-8 px-10">
        <div>
            <h2 className="text-xl font-semibold">Shipping & Returns</h2>
            <div className="mt-6">
                <span className="text-gray-700 text-lg mb-5">Shipping information</span>
                <div className="flex justify-between items-center gap-x-6">
                    <ul>
                        <li>Standard:</li>
                        <li>Express:</li>
                         <li>Free Shipping:</li>
                    </ul>   
                    <ul className="text-gray-800">
                        <li>3-5 business days ($4.99)</li>
                        <li>1-2 business days ($9.99)</li>
                        <li>Orders over 50$</li>
                    </ul>
                </div>
                <ul></ul>
            </div>
        </div>
             <div>
                <span className="text-gray-700 text-lg mb-5">Return policy</span>
                <div className="flex justify-between items-center gap-x-6">
                    <ul>
                        <li>Time Limit:</li>
                        <li>Condition:</li>
                        <li>Refund:</li>
                    </ul>   
                    <ul className="text-gray-800">
                        <li>30 Days</li>
                        <li>Unopened original packaging</li>
                        <li>Full refund available</li>
                    </ul>
                </div>
                <ul></ul>
            </div>
    </div>
  
  
  </>
}
