/* eslint-disable @next/next/no-img-element */
export function Hero() {
  return (
    <>
      <section className="w-full bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10442456/data/7231e048cae967cebab4c68ff57d625d/1x1_messaging-side/616/wwmw-ss25-sale-launch.jpeg"
              alt="Hero"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sale now on: <span className="text-red-600">up to 50% off</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {
                "Your style, our unique curation — shop this season's highlights."
              }
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-white pb-10 pt-4">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10442252/data/6546700a639c0b1f1b8d6c42805d3b48/1x1_messaging-side/616/2025-05-14-mw-webapp-summer-shoes-vacation-multibrand-multicategory-img.jpeg"
              alt="Hero"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full flex items-center justify-center flex-col md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The shoes of summer
            </h2>
            <p className="text-lg text-center max-w-lg text-gray-700 mb-6">
              Meet the styles you will want to live in all season, courtesy of
              Bally and more
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
