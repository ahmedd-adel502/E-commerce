
export default function NewsLetter() {
  return <>
     <div className="bg-primary-50 w-full py-12 flex flex-col justify-center items-center px-4">
          <div className="text-center space-y-4">
              <h2 className="text-black font-bold text-3xl">Subscribe to our Newsletter</h2>
              <span className="text-gray-600 text-sm lg:text-lg">Stay updated with our latest offers, recipes, and health tips.</span>
          </div>
          <div className="w-full lg:w-1/3 mt-4 rounded-lg overflow-hidden relative bg-white flex justify-between items-center border-2 border-transparent focus-within:border-primary-600 transition-all duration-300">
                <input type="email" placeholder="Your Email address" className="py-2 px-3 w-full outline-none peer  placeholder:text-black" />
                <button className="bg-primary-600 border-2 border-primary-600 py-2 px-3 cursor-pointer text-white absolute right-0">Subscribe</button>
          </div>
    </div>
  </>
}
