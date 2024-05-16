import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-40 container mx-auto">
        <h2 data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" className="inter text-5xl font-bold text-center ">Contact Us </h2>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"
       className="container raleway pb-10 md:pb-20 md:pt-10 mx-auto mt-10 px-5 lg:px-0">
        <section className="py-10 ws bg-gray-800 rounded-xl sm:py-16 ">
          <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
              <div className="flex flex-col justify-between lg:py-5">
                <div>
                  <h2 className="text-3xl font-bold leading-tight text-white m:text-4xl lg:leading-tight lg:text-5xl">
                    It’s time to experience and do something exciting!
                  </h2>
                  <p className="max-w-xl text-white mx-auto mt-4 text-base leading-relaxed ">
                    We are helping our community through volunteering and here you guys can post your to get your desired volunteers.
                  </p>

                  <img
                    className="relative z-10 max-w-xs mx-auto -mb-16 hidden"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                    alt=""
                  />

                  <img
                    className="hidden w-full translate-x-24 translate-y-8 md:block"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                    alt=""
                  />
                </div>

                <div className="hidden md:mt-auto md:block">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <blockquote className="mt-6">
                    <p className="text-lg leading-relaxed text-white">
                      I am so pleased with your manner.It was outstanding .I
                      learned many things from volunteering different places  and I am recommended
                      this website for everyone.
                    </p>
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                      alt=""
                    />
                    <div className="ml-4">
                      <p className="text-base font-semibold text-white">
                        Jenny Wilson
                      </p>
                      <p className="mt-px text-sm text-gray-400">
                        Professor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="overflow-hidden bg-white rounded-md">
                  <div className="p-6 sm:p-10">
                    <h3 className="text-3xl font-bold text-black">
                      Send us a message
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      Feel free to contact with us. We will response within 24
                      hour.
                    </p>

                    <form action="#" method="POST" className="mt-4">
                      <div className="space-y-6">
                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Your name{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Your Message{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <textarea
                              name=""
                              id=""
                              placeholder="Enter your message"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>

                        <div>
                          <Link className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#59C6D2] border border-transparent rounded-md focus:outline-none hover:bg-[#59C6D2] focus:bg-[#59C6D2]">
                            Send Message
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="md:hidden">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg leading-relaxed text-white">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                  </p>
                </blockquote>

                <div className="flex items-center mt-8">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-base font-semibold text-white">
                      Jenny Wilson
                    </p>
                    <p className="mt-px text-sm text-gray-400">
                      Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
