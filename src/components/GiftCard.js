import React, { useState } from 'react';
import Header from './Header';
import Navbar from './NavBar';
import Footer from './Footer';
import '../assets/styles/GiftCard.css'; 

import giftCard1 from '../assets/images/gift_my_show_1';  
import giftCard2 from '../assets/images/gift_my_show_2.avif';
import giftCard4 from '../assets/images/gift_my_show_4.avif';
import giftCard5 from '../assets/images/gift_my_show_5.avif';
import giftCard6 from '../assets/images/gift_my_show_6.avif';
import giftCard7 from '../assets/images/gift_my_show_7.avif';
import giftCard8 from '../assets/images/gift_my_show_8.avif';

// Physical gift card images
import phyGift1 from '../assets/images/phy_gift_1.avif';
import phyGift2 from '../assets/images/phy_gift_2.avif';
import phyGift3 from '../assets/images/phy_gift_3.avif';
import phyGift4 from '../assets/images/phy_gift_4.avif';
import phyGift5 from '../assets/images/phy_gift_5.avif';
import phyGift6 from '../assets/images/phy_gift_6.avif';

const GiftCard = () => {
  const [selectedCard, setSelectedCard] = useState('E-Gift'); // Default to 'E-Gift'

  const handleEGiftClick = () => {
    setSelectedCard('E-Gift');
  };

  const handlePhysicalGiftClick = () => {
    setSelectedCard('Physical Gift');
  };

  const images = [
    giftCard1,
    giftCard2,
    giftCard4,
    giftCard5,
    giftCard6,
    giftCard7,
    giftCard8,
  ];

  // Images for Physical Gifts
  const physicalImages = [phyGift1, phyGift2, phyGift3];

  return (
    <div>
      <Header />
      <Navbar />
      <br />
      <br />
      <br />
      
      <div className="button-container">
        <button className="gift-button" onClick={handleEGiftClick}>
          E-Gift Cards
        </button>
        <button className="gift-button" onClick={handlePhysicalGiftClick}>
          Physical Gift Cards
        </button>
      </div>

      <div className="content">
        {selectedCard === 'E-Gift' && (
          <div className="egift-container">
            <h1>Pick a card out of the given themes</h1>
            <br />
            <div className="grid-container">
              {/* Repeat images for 4 rows */}
              {Array.from({ length: 4 }).map((_, rowIndex) => (
                <div className="grid-row" key={rowIndex}>
                  {images.map((src, index) => (
                    <div className="grid-item" key={index}>
                      <img src={src} alt={`E-Gift Card ${index + 1}`} className="card-image" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {selectedCard === 'Physical Gift' && (
          <div className="egift-container">
            <h1>Physical Gift Cards</h1>
            <div className="grid-container">
              {/* 3 rows with 3 columns */}
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <div className="grid-row" key={rowIndex}>
                  {Array.from({ length: 3 }).map((_, colIndex) => (
                    <div className="grid-item" key={colIndex}>
                      <img
                        src={physicalImages[(rowIndex * 3 + colIndex) % physicalImages.length]}
                        alt={`Physical Gift Card ${(rowIndex * 3 + colIndex) + 1}`}
                        className="card-image"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <br />
      <div>
        <div className="terms-container">
          <p className="terms">Terms and Conditions</p>
          <p className="terms">Need Help?</p>
          <p className="terms">Check Gift Card Balance</p>
        </div>
      </div>
      <br />
      
      <div className="book-show-section">
        <h3 className="book-show-title">BOOK-SHOW GIFT CARDS</h3>
        <p className="book-show-content">
          Gift an experience to your loved ones like never before! Give them a gift of fun and entertainment with BookMyShow gift cards. Whatever be the occasion, a BookMyShow Gift Card is just right to delight someone. From birthdays, anniversaries, festivals to special occasions, there is a wide selection of quirky and cool gift cards you can choose from.
          Redeem your gift card at the secure payment page while booking your tickets. Click on the "Gift Voucher" tab and enter your Gift Card code.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default GiftCard;
