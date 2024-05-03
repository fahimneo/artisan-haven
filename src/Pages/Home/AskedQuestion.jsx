const AskedQuestion = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 mb-8 dark:text-gray-600">
              Got questions? We've got answers! Explore our FAQs below.
            </p>
          </div>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What materials do I need to get started?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Whether you're diving into painting or drawing, the basics
                remain the same. All you need are some quality brushes, paints,
                and paper or canvas. Feel free to experiment with different
                mediums and surfaces to find what suits your style best.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How can I improve my drawing skills?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Practice makes perfect! Set aside dedicated time each day to
                sketch and explore new techniques. Don't be afraid to study from
                life or reference images to understand form, light, and
                perspective better. And most importantly, embrace the
                journey—every stroke brings you closer to mastery.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How do I find my unique artistic style?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Your artistic style is as unique as you are! Explore different
                techniques, subjects, and mediums to discover what resonates
                with you. Don't rush the process—let your style evolve naturally
                over time. Remember, it's not about perfection but authenticity.
                Trust your instincts and let your creativity lead the way.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AskedQuestion;
