const Blog = () => {
    return (
      <div className="mt-40 container mx-auto">
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
          <h2 className="inter text-5xl font-bold text-center ">
            Latest Articles & Blog
          </h2>
          <p className="w-2/3 mx-auto mt-4 text-center leading-relaxed text-gray-600">
            Discover our latest articles and blog posts for insightful
            perspectives, expert advice, and timely updates on a diverse range of
            topics. Stay informed, inspired, and engaged with our
            thought-provoking content. Explore now for fresh insights and ideas.
          </p>
        </div>
  
        <section
        data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
         className="py-10 ws  sm:py-16 lg:py-14">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid  max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-60"
                    src="https://images.squarespace-cdn.com/content/v1/5e959b5110e0e16067a04ae5/a606d14e-6e13-4d3b-af85-4a1ce2f8eeeb/Volunteer+Managers+Choosing+Volunteer+Management+Software.png?format=2500w"
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                  {" "}
                  Explanatory{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="">
                  Optimizing Engagement: The Evolution of Volunteer Management Systems
                  </a>
                </p>
                <p className="mt-4 text-gray-500">
                Delve into the dynamic landscape of Volunteer Management Systems (VMS). From traditional spreadsheets to modern   cloud-based solutions and here this blog explores how VMS have evolved to enhance volunteer engagement, streamline operations, and drive organizational impact.
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Oliver Omnibus. June 12, 2023{" "}
                </span>
              </div>
  
              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-60"
                    src="https://assets-global.website-files.com/618ec2e36c7ec23e185f0a7e/65f3faf100b564c42b63ad69_Working%20from%20home.jpg"
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                  {" "}
                  Inspirational{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="">
                  Empowering Volunteers: Leveraging Technology for Effective Volunteer Management
                  </a>
                </p>
                <p className="mt-4 text-gray-500">
                Uncover the ways in which Volunteer Management Systems empower volunteers. This blog examines how user-friendly interfaces, mobile apps, and communication tools provided by VMS facilitate seamless volunteer recruitment, training, and recognition, ultimately fostering a more fulfilling volunteer experience.
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Liam Literary . June 12, 2023{" "}
                </span>
              </div>
  
              <div>
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-60"
                    src="https://www.pointsoflight.org/wp-content/uploads/2023/02/dreamstime_m_198117357-1024x677.jpg"
                    alt=""
                  />
                </a>
                <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                  {" "}
                  Guidance{" "}
                </span>
                <p className="mt-6 text-xl font-semibold">
                  <a href="#" title="">
                  Data-Driven Insights: Harnessing the Power of Volunteer Management Systems
                  </a>
                </p>
                <p className="mt-4 text-gray-500">
                Learn how Volunteer Management Systems leverage data analytics to drive strategic decision-making. This blog illuminates how VMS generate valuable insights into volunteer preferences, performance metrics, and engagement trends, enabling organizations to optimize their volunteer programs for maximum impact.
                </p>
                <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                  {" "}
                  Sofia Storyteller . January 12, 2024{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Blog;
  