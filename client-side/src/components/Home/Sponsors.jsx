import React from "react";
import spon1 from '../../assets/1.png'
import spon2 from '../../assets/2.jpg'
import spon3 from '../../assets/3.png'
import spon4 from '../../assets/4.png'
import spon5 from '../../assets/5.jpg'
const Sponsors = () => {
    const sponsors = [spon1, spon2, spon3, spon4, spon5]
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="text-center space-y-2 mt-16 mb-8">
        <h1 className="section-title">Our Sponsors</h1>
        <p>Restaurants and companies who buys regularly</p>
      </div>
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
        {
             sponsors.map(image => <div className="h-[100px] w-[150px] mx-auto bg-slate-200">
                 <img className="object-cover w-full h-full " src={image} alt="" />
             </div>)
        }
    </div>
    </div>
  );
};

export default Sponsors;
