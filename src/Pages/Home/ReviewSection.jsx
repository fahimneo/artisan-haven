const ReviewSection = () => {
  return (
    <div>
      <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-bold leading-none text-center">
            What our customers are <br /> saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 h-96 shadow-2xl border-2 rounded-xl bg-gray-300 border-red-950 ">
            <div className="px-2 py-4 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative  text-lg italic text-center dark:text-gray-800">
                Artisan Haven Painting and Drawing templates have become my
                secret weapon in the world of art. As someone who juggles a
                hectic schedule, these templates have been a lifesaver. They
                provide me with a solid foundation to build upon while saving me
                valuable time.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 mt-4 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700 "
              />
              <p className="text-xl font-semibold leading-tight">Jane Doe</p>
              <p className="text-sm uppercase">
                Creative Director, Artistic Designs
              </p>
            </div>
          </div>

          {/* Second review */}
          <div className="flex flex-col max-w-sm mx-4 my-6 h-96 shadow-2xl border-2 rounded-xl bg-gray-300 border-red-950 ">
            <div className="px-2 py-4 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-2 py-1 text-lg italic text-center dark:text-gray-800">
                I stumbled upon Artisan Haven while searching for ways to
                improve my drawing skills, and I could not be happier with my
                discovery. Their templates offer a level of detail and guidance
                that I have struggled to find elsewhere.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50 mt-7">
              <img
                src="https://source.unsplash.com/50x50/?portrait?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">John Smith</p>
              <p className="text-sm uppercase">
                Lead Illustrator, Creative Minds Studio
              </p>
            </div>
          </div>

          {/* Third review */}
          <div className="flex flex-col max-w-sm mx-4 my-6 h-96 shadow-2xl border-2 rounded-xl bg-gray-300 border-red-950 ">
            <div className="px-2 py-4 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-2 py-1 text-lg italic text-center dark:text-gray-800">
                Artisan Haven has completely revolutionized the way I approach
                painting and drawing. Their templates are not just tools; they
                are sources of inspiration. I wholeheartedly recommend Artisan
                Haven to anyone looking to elevate their artistry.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50 mt-4">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Emily Johnson
              </p>
              <p className="text-sm uppercase">Art Director, Expressive Arts</p>
            </div>
          </div>

          {/* Fourth review */}
          <div className="flex flex-col max-w-sm mx-4 my-6 h-96 shadow-2xl border-2 rounded-xl bg-gray-300 border-red-950  ">
            <div className="px-2 py-4 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-2 py-1 text-lg italic text-center dark:text-gray-800">
                Artisan Haven is not just a store; it is a community of
                passionate artists dedicated to their craft. The Painting and
                Drawing templates they offer are a testament to their commitment
                to fostering creativity.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50 mt-7">
              <img
                src="https://source.unsplash.com/50x50/?portrait?4"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Michael Johnson
              </p>
              <p className="text-sm uppercase">Owner, Creative Inspirations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
