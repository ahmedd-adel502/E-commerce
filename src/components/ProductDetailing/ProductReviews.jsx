import Rating from "../Rating/Rating";

export default function ProductReviews() {
  return <>
    <div className="space-y-4 px-4 py-6">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Customer Reviews</h3>
            <button className="btn bg-primary-600 text-white">Write a review</button>
        </div>
        <div className="space-y-2">
            <div className="flex items-center gap-x-2">
                <Rating rating={4.5} />
                <span className="text-gray-600">4.5 Out of 5</span>
            </div>
            <span className="text-gray-600">Based on 159 reviews</span>
        </div>
       <div className="space-y-4">
            <div className="flex justify-between items-center border-b py-3 border-gray-300/50">
                <div className="space-y-3">
                        <div className="flex items-center gap-x-4">
                            <Rating rating={5} />
                            <span>John Doe</span>
                        </div>
                        <p className="text-sm text-gray-600">Absolutely delicious! The strawberries were fresh, sweet and perfectly ripe. will definitely be ordering again!</p>
                </div>
                <span className="text-gray-600">2 Days ago</span>
            </div>
            <div className="flex justify-between items-center border-b py-3 border-gray-300/50">
                <div className="space-y-3">
                        <div className="flex items-center gap-x-4">
                            <Rating rating={4} />
                            <span>Sarah M.</span>
                        </div>
                        <p className="text-sm text-gray-600">Great quality organic strawberries. They lasted longer than i expected in the fridge.</p>
                </div>
                <span className="text-gray-600">1 Week ago</span>
            </div>
       </div>
    </div>
  </>
}
