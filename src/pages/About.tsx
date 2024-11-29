
function About() {
  return (
    <section className="conatiner bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At Wear 38, we focus on modern design that redefines everyday
              style. Our brand combines clean lines, bold silhouettes, and
              contemporary trends to create clothing that speaks to the
              fashion-forward individual. We are committed to delivering
              high-quality, versatile pieces that empower you to express your
              unique personality with confidence. Whether you're dressing for
              work or play, Wear 38 is here to elevate your wardrobe with style
              that stands out.
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="./arival2.png"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
