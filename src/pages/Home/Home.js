import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// style
import "./Home.scss";

const Home = () => {


   return (
      <main>
         <Header/>
         <section className="hero">
            <h1 className="hero__header">Kayak For Carolina</h1>
            <div className="hero__button">
               <div className="button">
               <a href="YOUR_DONATION_SITE_URL" className="button__donate">Donate</a>
               <a href="https://kayakcarolina.com/kayak-tours/" className="button__book">Book Event</a>
               </div>
            </div>
         </section>
         <section className="hero__cont">
               <h2 className="hero__sub-header">Upcoming Fundraising Event</h2>
               <p className="hero__description">Ride the Tide Paddling Event to benefit WNC impacted by Hurricane Helene.</p>
               <p className="hero__description"><strong><em>Saturday, November 16, 2024</em></strong></p>
         </section>
         <section className="event">
            <h2 className="event__header">Event Overview</h2>
            <p className="event__description">Join Kayak Carolina for a paddle downriver from Downtown Wilmington at Dramtree Park to River Road Park, stopping by Shark's Tooth Island at the end.
               The paddle is approximately 8 miles, all going with the downriver current and the outgoing tide.
               For this event, you are more than welcome to bring your kayak and any gear you wish. Feel free to bring a team from work or friends to enjoy the paddle for a great cause!</p>
            <p className="event__description"><strong>Duration:</strong> 4-6 hours</p>
            <p className="event__description"><strong>Meeting Point:</strong> Dramtree Park, 602 Surry Street, Wilmington, NC 28405</p>
         </section>
         <section className="donate">
            <div className="donate__cont">
               <h2 className="donate__header">Donations!</h2>
               <p className="donate__description">100% of all kayak rental proceeds will be used as donations</p>
               <p className="donate__header">Donations will go to support:</p>
               <ul className="donate__ul">
                  <li className="donte__items"><strong>MountainStrong Hurricane Recovery Fund - </strong><a href="https://mountaintrue.org/mountainstrong" target="_blank" rel="noopener noreferrer">mountaintrue.org/mountainstrong</a></li>
                  <li className="donte__items"><strong>Helene Rebuild Collaborative - </strong><a href="https://hurricanehelenewnc.com" target="_blank" rel="noopener noreferrer">hurricanehelenewnc.com</a></li>
               </ul>
               <p className="donate__description">If you are unable to paddle the event, please contact us. Your donation will go directly to the non-profit organizations.</p>
            </div>
         </section>

         <section className="kayak">
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
         </section>
         <section className="cancel">
            <h2 className="cancel__header">Cancellations</h2>
            <p className="cancel__description">If you cancel within 24 hours of the event, no refund is issued. 
               For weather-related cancellations, Kayak Carolina will offer rescheduling or refunds as needed.
            </p>
            <div className="button">
               <a href="YOUR_DONATION_SITE_URL" className="button__donate">Donate</a>
               <a href="https://kayakcarolina.com/kayak-tours/" className="button__book">Book Event</a>
            </div>
         </section>

         
         <Footer />
      </main>
   );
};
export default Home;





