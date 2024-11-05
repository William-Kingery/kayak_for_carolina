import React, {useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
// style
import "./Home.scss";

const Home = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const donationUrls = {
      venmo: "https://venmo.com/code?user_id=4189803545364018575&created=1730651423", 
      paypal: "i_will_put_something_here", // replace with your actual PayPal URL
      fareharbor: "https://fareharbor.com/embeds/book/kayakcarolina/items/584178/availability/1576440430/book/?full-items=yes"
   };

   const handleDonateClick = (e) => {
      e.preventDefault();
      setIsPopupOpen(true);
   };

   const handleBookingClick = (e, href) => {
      e.preventDefault();
      const userConfirmed = window.confirm("You are being redirected to our secure event booking and donation site.");
      if (userConfirmed) {
         window.open(href, "_blank", "noopener,noreferrer");
      }
   };

   return (
      <main>
         <Header/>
         <section className="hero">
            <h1 className="hero__header">Kayak For Carolina</h1>
            <div className="hero__button">
               <div className="button">
                  <button onClick={handleDonateClick} className="button__donate">Donate</button>
                  <a href="https://fareharbor.com/embeds/book/kayakcarolina/items/584178/availability/1576440430/book/?full-items=yes" 
                     onClick={(e) => handleBookingClick(e, "https://fareharbor.com/embeds/book/kayakcarolina/items/584178/availability/1576440430/book/?full-items=yes")} className="button__book">Book Event</a>
               </div>
            </div>
         </section>
         <section className="hero__cont">
               <h2 className="hero__sub-header">Upcoming Fundraising Event</h2>
               <p className="hero__description">Kayak for Carolina Paddle to Benefit Western North Carolina</p>
               <p className="hero__description"><strong><em>Saturday, November 16, 2024</em></strong></p>
               <p className="hero__description">Cape Fear River</p>
         </section>
         <section className="event">
            <h2 className="event__header">Event Overview</h2>
            <p className="event__description">
               Join Kayak Carolina for an exciting kayak adventure on Saturday, November 16, to raise funds for our neighbors to the west! We have launched Kayak for Carolina, a non-profit dedicated to the needs of the Carolinas.
            </p>
            <p className="event__description">
               For this event, 100% of your donations and registration fees will go to two wonderful organizations: <a href="https://hurricanehelenewnc.com/" className="event__link">Helene Rebuild Collaborative</a> Helene Rebuild Collaborative, organized by fellow paddling industry folks to the west, 
               and <a className="event__link" href="https://mountaintrue.org/mountainstrong/">MountainTrue</a>, dedicated to clean waters, resilient forests, and healthy communities through their <a className="event__link" href="https://mountaintrue.org/mountainstrong/">MountainStrong</a> Recovery and Resilience Fund. 
               Both causes are boots-on-the-ground collaborative efforts to help lay the groundwork for recovery and rebuilding.
            </p>
         </section>
         <section className="options"> 
            <h2 className="options__header">Three wonderful ways to join this fun event</h2>
            <p className="options__sub-description">Your registration donation includes your kayak, paddle and pfd!</p>
            <div className="options__cont">
               <h3 className="options__sub-header">Ride The Tide!</h3>
               <p className="options__description">
                  Launch at 10 a.m. from Dram Tree Park in downtown Wilmington and Ride the Tide down our beautiful Cape Fear River along Eagle Island, stopping at Shark's Tooth Island before taking out at River Road Park. 
                  The route covers about 9 miles, all with the current, and takes approximately 4.5 hours. It's ideal for experienced paddlers, fit individuals, or anyone up for an adventure.
               </p>
            </div>
            <div className="options__cont">
               <h3 className="options__sub-header">Float and Paddle!</h3>
               <p className="options__description">
               Launch at noon from Riverlights, next to the Smoke on the Water landing, and cruise down the Cape Fear River. Enjoy a gentle paddle to Shark's Tooth Island, then take out at River Road Park.
               The journey spans about 3 miles, all with the current, and lasts approximately 3 hours. It's suited for intermediate to experienced paddlers, adventurous beginners, or anyone ready for a bit of a longer paddle.
               </p>
            </div>
            <div className="options__cont">
               <h3 className="options__sub-header">Hop, Skip and Paddle!</h3>
               <p className="options__description">
                  Launch at 2pm from River Road Park and enjoy a leisurely-paced paddle to Shark’s Tooth Island, with a stop at Keg Island on the return journey, ending back at River Road Park. 
                  This round trip covers about 1 mile and takes 2 hours. Both beginners and experienced paddlers will enjoy this short paddle for a great cause.
               </p>
            </div>
         </section>
         <div className="more-info">
            <div className="button">
               <a href="/WNC_pamphlet.pdf" target="_blank" rel="noopener noreferrer" className="button__info">
                  More Info
               </a>
            </div>
         </div>
         <section className="donate">
            <div className="donate__cont">
               <h2 className="donate__header">Donations!</h2>
               <p className="donate__sub-header">Donations will go to support:</p>
               <ul className="donate__ul">
                  <li className="donte__items"><strong>MountainStrong Hurricane Recovery Fund - </strong><a href="https://mountaintrue.org/mountainstrong" target="_blank" rel="noopener noreferrer">mountaintrue.org/mountainstrong</a></li>
                  <li className="donte__items"><strong>Helene Rebuild Collaborative - </strong><a href="https://hurricanehelenewnc.com" target="_blank" rel="noopener noreferrer">hurricanehelenewnc.com</a></li>
               </ul>
            </div>
         </section>

         {/* <section className="kayak">
         <h2 className="kayak__header">Kayak Options</h2>
            <div className="kayak__cont">
               <p className="kayak__description"><strong>Single Kayaks:</strong> Enter the number of singles needed. Ages 12 and up.</p>
               <p className="kayak__description"><strong>Tandem Kayaks:</strong> Enter the number of doubles needed (not the number of people, there are two people per double).</p>
               <p className="kayak__description"><strong>Event Date:</strong> Saturday, November 16, 2024, at 10:00 AM.</p>
            </div>
            <div className="kayak__cont">
               <h2 className="kayak__header">What to Bring</h2>
               <ul className="kayak__ul">
                  <li className="kayak__item">Dry box/bag for phones</li>
                  <li className="kayak__item">Sunscreen, hat, and other sun protection</li>
                  <li className="kayak__item">Sandals or water shoes (no flip-flops)</li>
                  <li className="kayak__item">Water, snacks, and any other necessary fuel</li>
                  <li className="kayak__item">Bug spray (just in case)</li>
               </ul>
            </div>
         </section> */}
         <section className="bottom ">
            <div className="button">
               <button onClick={handleDonateClick} className="button__donate">Donate</button>
               <a href="https://fareharbor.com/embeds/book/kayakcarolina/items/584178/availability/1576440430/book/?full-items=yes" 
                  onClick={(e) => handleBookingClick(e, "https://fareharbor.com/embeds/book/kayakcarolina/items/584178/availability/1576440430/book/?full-items=yes")} className="button__book">Book Event</a>
            </div>
         </section>
         <Footer />
         <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} urls={donationUrls} />
      </main>
   );
};
export default Home;





