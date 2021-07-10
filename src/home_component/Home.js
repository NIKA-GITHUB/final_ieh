import React from "react";
import "./Home.css";
import Product from "../product_component/Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.neow.in/news/images/uploaded/2019/02/1551367567_amazonlogo_story.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="ველოტრენაჟორი KETTLER AXOS AVIOR M"
            price={1347}
            rating={3}
            image="https://img1.be.ge/images_cache/full/84341512KTHT1002300.jpg8k_enl.jpg"
          />
          <Product
            id="49538094"
            title="წყლის გამაცხელებელი VIVA JSG20-10N1"
            price={239.0}
            rating={1}
            image="https://img2.be.ge/images_cache/full/65848viva_jsg_20_10_n_1ga_enl.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="PUMA x JBOKU კაცის ჰუდი"
            price={199.99}
            rating={4}
            image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/530220/04/fnd/EEA/fmt/png/PUMA-x-BOKU-Men's-Hoodie"
          />
          <Product
            id="23445930"
            title="APPLE MACBOOK PRO 13 M1 256GB"
            price={6479}
            rating={5}
            image="https://res-2.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1600,q_auto,w_1600/v1605180489/wmqyip7z8nlarg1hecye.png"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={1499.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908241232"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={3000}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90821332"
            title="Alienware 17 Gaming Laptop"
            price={3000}
            rating={4}
            image="https://i.dell.com/is/image/DellContent/content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/alienware_17_r5_non_touch/spi/ng/notebook-alienware-17-r5-campaign-hero-504x350-ng.psd?hei=402&qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=pjpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="123309332"
            title="Razer BLACKWIDOW"
            price={210}
            rating={4}
            image="https://assets2.razerzone.com/images/blackwidow-2019/BlackWidow2019_OGimage-1200x630.jpg"
          />
          <Product
            id="90009332"
            title="Razer Viper Mini"
            price={150}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81hn2q%2BMzsL._AC_SL1500_.jpg"
          />
          <Product
            id="1290829332"
            title="Logitech G502 HERO"
            price={150}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7122"
            title="Captain Cardinal Electronic Helmet"
            price={210}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41TwtgbtaCL._AC_.jpg"
          />
          <Product
            id="91239332"
            title="Star Wars გროგუს სათამაშო"
            price={60}
            rating={6}
            image="https://images-na.ssl-images-amazon.com/images/I/71-RNACX5hL._AC_SL1500_.jpg"
          />
          <Product
            id="123636"
            title="Star Wars: The Mandalorian ნაღდი Beskar Armor"
            price={160}
            rating={6}
            image="https://images-na.ssl-images-amazon.com/images/I/41RwYZW%2Bu2L._AC_.jpg"
          />
          <Product
            id="123636"
            title="Captain Phasma Helmet"
            price={260}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91fpoy323NL._AC_SL1500_.jpg"
          />
        </div>
        <div>
          <Product
            id="999666333123"
            title="GTA VI (
              N̸̠͇̼͕̟̰̲̭̄͊̋̀̂ͅỌ̸̳̠̥͓̳̫̯̐͛T̶͍͌̄̾̈́͝ ̵͖̠͎͖̾̋̐̅͝Â̸͉̱̒̃̅͜ ̸̡̩̖͇̌͂̈́̑͠͝S̷̨͕̝͍̥͓̖̥̍̀̿̽̆̃̐͐͜͝C̴̢̨̟̰̯̺̯̱̃͂͌̔̉̓̂̕ͅÁ̵͖͍͔̥̼̬͓͔͌̏̏̇̑̽Ḿ̷̬̰̈́̈́͊̿͝͠  N⃞    O⃞    T⃞     A⃞     S⃞    C⃞    A⃞    M⃞  )"
            price={(999 * 99) ^ 9999}
            rating={40}
            image="https://st1.bgr.in/wp-content/uploads/2021/05/GTA-6.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
