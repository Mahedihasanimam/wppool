import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-50 text-gray-900 min-h-screen">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Experience remarkable WordPress products with a new level of power,
          beauty, and human-centered designs.
        </h1>
        <div className="text-sm text-gray-500 mt-8">
          <p>©2024 Terms of Use Privacy Policy</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat.
          </p>
        </div>
      </div>
      <div className="flex-1 md:ml-8">
        <div className="lg:flex md:flex  justify-around space-y-8">
          <div>
            <h3 className="font-semibold mb-2">Jump to</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-blue-600 hover:underline">
                About Us
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Portfolio
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                News
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Stories
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Jobs
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                About Us
              </a>
            </div>
          </div>
          <div className="my-12"> 
            <div >
              <h3 className="font-semibold mb-2">Cambridge</h3>
              <p>70728 Yost Burg, <br /> North Magdaleneview, <br /> UT 97952-2814</p>
            </div>
            <hr />
            <br />
            <div>
              <h3 className="font-semibold mb-2">London</h3>
              <p>Suite 292 903 Stehr Streets, <br /> Langworthtown,  <br /> SC 94577-9465</p>
            </div>
            <hr />
            <br />
            <div>
              <h3 className="font-semibold mb-2">San Francisco</h3>
              <p>
                19837 Gilberto Lodge, <br /> Lake Kendallville, <br /> Colorado - 97392,
                Bhutan
              </p>
            </div>
            <hr />
            <br />
            <div className="flex space-x-4">
            <FaLinkedin size={25}/>
            <FaTwitterSquare size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
