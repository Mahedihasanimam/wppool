import React from 'react';
import stripe from "../../../assets/stripe.png"
import imageOne from "../../../assets/1.png"
import imageTow from "../../../assets/2.png"
import imageThre from "../../../assets/3.png"
import imageFour from "../../../assets/4.png"
import imageFive from "../../../assets/5.png"
import imageSix from "../../../assets/6.png"
import imageSaven from "../../../assets/7.png"
import imageEight from "../../../assets/8.png"
import imageNine from "../../../assets/9.png"





const PotentialListings = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-start">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Potential Future Listings
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={stripe} alt="Stripe" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageTow} alt="Klarna" className="h-6" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageOne} alt="Plaid" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageThre} alt="Checkout.com" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageFour} alt="Revolut" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageFive} alt="Chime" className="h-6" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageSix} alt="N26" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageSaven} alt="Brex" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageEight} alt="Deel" className="h-8" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white shadow rounded">
              <img src={imageNine} alt="Gusto" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialListings;
