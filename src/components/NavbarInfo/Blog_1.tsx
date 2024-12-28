import React from 'react';
import Footer from '../HomePages/Footer';

const Blog_1 = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="w-screen bg-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://image-resource.creatie.ai/145720426227716/145720426227718/66ea4685e864e08f190bd9ac09179cf6.jpg')" }}>
        <h1 className="text-4xl font-bold text-white">Rahu Enters Cancer And Ketu Enters Capricorn</h1>
        <nav className="flex space-x-2 text-white">
          <span>Home</span>
          <span>›</span>
          <span>Blogs</span>
          <span>›</span>
          <span>Rahu Enters Cancer And Ketu Enters Capricorn</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="mt-8 px-8">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">Rahu Enters Cancer And Ketu Enters Capricorn</h2>
        <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg" alt="Main" className="w-96 max-w-screen-lg mx-auto rounded-lg" />
        <p className="text-lg text-gray-600 text-justify mt-8">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tortor quam,
          sagittis pretium eros quis, elementum dapibus ligula. In finibus imperdiet laoreet. Proin ornare est nec neque
          posuere volutpat. Proin pharetra blandit velit id tincidunt. Pellentesque neque eros, elementum maximus tempus
          tempus, dapibus ut arcu. Donec aliquam rhoncus facilisis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a nam molestiae tempore. Saepe magni porro amet cumque,
          a veritatis fugit doloremque delectus itaque numquam. Dolorem blanditiis libero aut deleniti?. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore cum praesentium architecto accusamus deserunt iusto vel pariatur? Consequatur in sapiente architecto et iste minus fuga illum ut? Dolorum, veniam adipisci.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, harum eaque. Quia dicta recusandae, veritatis magnam quisquam 
          voluptatum alias aut iste? Blanditiis, odit magni amet perferendis vitae voluptates deleniti dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae tempora in porro magni dolor rem est repudiandae reiciendis. Corrupti odio quia nisi iusto sit, ab vero? Atque adipisci assumenda doloribus!
        </p>
      </div>

      {/* Similar Blogs */}
      <div className="mt-12 px-20">
        <h3 className="text-2xl font-semibold text-black mb-4">Similar Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-md w-full max-w-[320px] rounded-lg mx-auto">
              <img src="https://image-resource.creatie.ai/146256977394650/146256977394652/cb38bd710d96f57d34fea8aef5036ef9.jpg" alt="Similar" className="w-full h-52 rounded-t-lg object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">Rahu Enters Cancer And Ketu Enters Capricorn</h4>
                <p className="text-sm text-gray-600 mt-2">Learn the top tips to become a successful blogger.</p>
                <button className="mt-4 py-2 px-6 bg-orange-500 text-white rounded-lg">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer className="bg-white text-black py-8 mt-36">
        <div className="flex flex-col md:flex-row justify-between ml-40 items-center">
          <img
            src="https://image-resource.creatie.ai/146256977394649/146256977394651/699ab2aa049ff7258c72bcdb4a392392.png"
            alt="Logo"
            className="w-48 mb-4 md:mb-0"
          />
          <form className="flex space-x-4 mr-64">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-lg">Submit</button>
          </form>
        </div>

        <div className="max-w-screen-lg mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Corporate Info</h4>
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Astro-Branding</li>
                <li>Astro-Management</li>
                <li>Astro-Staffing</li>
                <li>Vastu & Vibrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">Corpastro © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      <div className='mt-36'>
      <Footer />
      </div>

    </div>
  );
};

export default Blog_1;
