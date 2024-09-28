import IconArrowRight from "../Components/Icons/IconArrowRight"
import PizzaImage from '../assets/Images/pizza2.png'
import CookingImage from "../assets/Images/cooking1.png";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from '../assets/Images/orderFood.png'
import Pickup from '../assets/Images/pickup.png'
import Enjoy from '../assets/Images/enjoy.png'
import Layout from "../Layouts/Layout";

function Home() {
    return (
        <Layout>
        <div>
            {/* Hero Section*/}
            
            <section className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                <div className="flex justify-center text-4xl md:justify-normal">
                    <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                        Enjoy the Slice {' '}
                    </h1>
                    <h1>
                        😋
                    </h1>
                </div>
                
                <p className="pb-4 text-transparent bg-gradient-to-r from-yellow-800 to-red-400 bg-clip-text">
                    The Pizza App lets you order your favourite pizza from the comfort of your home.
                    Enjoy the best pizza in the town with just a few clicks.
                </p>
                <button className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 group">
                Order Now {' '}
                <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                    <IconArrowRight/>
                </span>
                </button>
                </div>

                <div>
                    <img src={PizzaImage} alt="Pizza" width={550} height={550}/>
                </div>

            </section>

            <section className="py-4 mt-4 bg-gradient-to-r from-amber-50 to-orange-300">
             
             <div className="container flex flex-col md:flex-row">

                <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                
                <img src={CookingImage} alt="CookingImage"
                 width={500}
                 className="rounded-lg"
                 />

                </div>

                <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                
                <div>
                <div className="flex flex-col items-center lg:items-start">

<h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
Cooked By the Best <br /> Chefs In the World</h2>

<p className="text-xl leading-relaxed bg-gradient-to-r text-transparent from-yellow-800 to-red-400 bg-clip-text">
    There Are Many benefits regarding to that but the main ones are:
</p>

</div>
                </div>

           
                <div className="w-full p-1">

                    <div className="flex items-center h-full p-2 text-2xl rounded">
                   <IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4"/>
                    <span className="font-bold title-font">Perfect Taste</span>

                    </div>

                </div>
                <div className="w-full p-1">

<div className="flex items-center h-full p-2 text-2xl rounded">
<IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4"/>
<span className="font-bold title-font">Prepared Quickly</span>

</div>

</div>

<div className="w-full p-1">

<div className="flex items-center h-full p-2 text-2xl rounded">
<IconPatchCheck className="text-[#f38339] w-10 h-10 mr-4"/>
<span className="font-bold title-font">Food Hygeine Guaranteed</span>

</div>

</div>
              

              <div className="px-5 py-4 mx-auto">

                <div className="flex justify-center py-4">

                    <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div></div>
                    <div className="flex flex-wrap space-y-6 md:space-y-0">

                 <div className="flex flex-col items-center text-center p-4 md:w-1/3" /**Box 1 */>
                        
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                        <img src={OrderFood} alt="Order Food" />
                        </div>

                        <div className="flex-grow">
                            <h2
                            className="mb-3 text-lg font-bold text-gray-900 title-font"
                            >Order Food!</h2> 
                            <p className="text-base leading-relaxed">
                                As Easy 1 ,2 ,3  . Just Select Your Favourite Pizza  And Place Your Order 
                            </p>
                        </div>

                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:w-1/3" /**Box 2 */>
                        
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                        <img src={Pickup} alt="Pickup Food" />
                        </div>

                        <div className="flex-grow">
                            <h2
                            className="mb-3 text-lg font-bold text-gray-900 title-font"
                            >Pickup Food!</h2> 
                            <p className="text-base leading-relaxed">
                                Pickup Your Order From The Nearest Store Or Get It Delivered To your Doorstep
                            </p>
                        </div>

                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:w-1/3" /**Box 3 */>
                        
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                        <img src={Enjoy} alt="Enjoy Food" />
                        </div>

                        <div className="flex-grow">
                            <h2
                            className="mb-3 text-lg font-bold text-gray-900 title-font"
                            >Enjoy Food!</h2> 
                            <p className="text-base leading-relaxed">
                                As Soon As You Get Your Order , Enjoy The Delicious Food
                            </p>
                        </div>

                        </div>
              
                    
                </div>

              </div>

                </div>




             </div>

            </section>

        </div>
        </Layout>
    )
}

export default Home