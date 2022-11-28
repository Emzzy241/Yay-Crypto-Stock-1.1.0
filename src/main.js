// the userInterface Logic file

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// importing my CurrencyConvertService and my CryptoService class
import { CurrencyConvertService, CryptoService, SearchFeature } from "./app-service.js";


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// importing font-awesome into my 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons/faStarHalfAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons/faUserSecret";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";


library.add(faCheck);
library.add(faBars);
library.add(faInfinity);
library.add(faSearch);
library.add(faHeart);
library.add(faUser);
library.add(faTimes);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faEye);
library.add(faUserSecret);
library.add(faDollarSign);
library.add(faHeadset);
library.add(faQuoteRight);

dom.watch();
// Note: without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page!

// importing all images I used in application 


import mineCrypto from "./assets/images/cryptoMine.jpg";

import btcImage from "./assets/images/btcImage.png";
import myOfferImg from "./assets/images/cryptoOffer.png";
import stockOffer from "./assets/images/stockOffers.png";
import teslaStock from "./assets/images/ttt3.png";
import teslaImage from "./assets/images/ttt.png";
import microsoftStock from "./assets/images/msft3.svg";
import companyStock from "./assets/images/msftStock.jpg";
import msftImage from "./assets/images/msft2.png";
import appleImage from "./assets/images/apple.png";
import eth from "./assets/images/eth.svg";
import bnc from "./assets/images/bnc.png";
import secureCrypto from "./assets/images/secure.png";
import spImage from "./assets/images/sp.svg";
import excImage from "./assets/images/exchange.png";
import stkExchange from "./assets/images/stExchange.svg";
import course from "./assets/images/course.png";
import bot from "./assets/images/bot2.svg";
import wallet from "./assets/images/wallet.png";
import pcOne from "./assets/images/pic-1.png";
import pcTwo from "./assets/images/pic-2.png";
import pcThree from "./assets/images/pic-3.png";
import pcFour from "./assets/images/pic-4.png";
import tethImg from "./assets/images/teth.png";
import doge from "./assets/images/dg.svg";
import ripple from "./assets/images/ripp2.png";
import jsBadgeImg from "./assets/images/js-badge.svg";








$(document).ready(function () {

    let myOfferImage = $("img.offer");
    myOfferImage.attr("src", myOfferImg);





    let myBtcImage = $(".imgBTC");
    myBtcImage.attr("src", btcImage);

    let myStockOffer = $(".imgStock");
    myStockOffer.attr("src", stockOffer);

    let myTeslaStock = $(".tsla");
    myTeslaStock.attr("src", teslaStock);

    let myMsStock = $(".rippCoin");
    // change image and image import name
    myMsStock.attr("src", microsoftStock);

    let myEth = $(".eth");
    myEth.attr("src", eth);

    let myBnc = $(".bnc");
    myBnc.attr("src", bnc);

    let msftImg = $(".msImg");
    msftImg.attr("src", msftImage);

    let tslaImg = $(".dgCoin");
    // change image to doge
    tslaImg.attr("src", teslaImage);

    let apImg = $(".tethCoin");
    apImg.attr("src", appleImage);

    let secureImg = $(".secu");
    secureImg.attr("src", secureCrypto);

    let mineImg = $(".mine");
    mineImg.attr("src", mineCrypto);

    let exchangeImg = $(".exc");
    exchangeImg.attr("src", excImage);

    let stkExchangeImg = $(".stex");
    stkExchangeImg.attr("src", stkExchange);

    let courseImg = $(".cour");
    courseImg.attr("src", course);

    let botImg = $(".bot");
    botImg.attr("src", bot);

    let walletImg = $(".wallet");
    walletImg.attr("src", wallet);

    let companyImg = $(".cs");
    companyImg.attr("src", companyStock);

    let picOneImg = $(".pc1");
    picOneImg.attr("src", pcOne);

    let picTwoImg = $(".pc2");
    picTwoImg.attr("src", pcTwo);

    let picThreeImg = $(".pc3");
    picThreeImg.attr("src", pcThree);

    let picFourImg = $(".pc4");
    picFourImg.attr("src", pcFour);

    let tetherImg = $(".tethCoin");
    tetherImg.attr("src", tethImg);

    let rippImg = $(".rippCoin");
    rippImg.attr("src", ripple);

    let dogeImg = $(".dgCoin");
    dogeImg.attr("src", doge);

    // for the top image in app
    let topImg = $(".appImg");
    topImg.attr("href", jsBadgeImg);




    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    $(".navbar").addClass("no-nav");

    // for opening and closing the navbar in small screen sizes
    $("#menu-bars").click(() => {
        $(".navbar").toggleClass("no-nav");
    });




    // for the home slider swiper

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });

    // for the review slider swiper

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },

        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    });

    // working with api calls now

    
    
    // the first .then() for handling when my conversion call is successful
    // not using this function now until the version 1.2.0

        // let myConverterPromise = CurrencyConvertService.convertCurrencytToNaira();
        
        // myConverterPromise.then((currencyConvertSuccess) => {
        //     // console.log(currencyConvertSuccess);


        //     // parsing the json I get so I can be able to access them like a javaScript object
        //     const myConverterResponse = JSON.parse(currencyConvertSuccess);

        //     // console.log(myConverterResponse);

        //     // getting how much 1 dollar equals 1 naira

        //     let naijaRate = myConverterResponse.rates.NGN;



        // },
        //     // the callbacks that run when my promise gets rejected
        //     (currencyConvertFailed) => {
        //         $(".apiCall-btctoNaira").text(`There was an error processing your request ${currencyConvertFailed}`);
        //         $(".apiCall-ethToNaira").text(`There was an error processing your request ${currencyConvertFailed}`);
        //         $(".apiCall-BnctoNaira").text(`There was an error processing your request ${currencyConvertFailed}`);
        //         $(".apiCall-tethToNaira").text(`There was an error processing your request ${currencyConvertFailed}`);
        //         $(".apiCall-rippletoNaira").text(`There was an error processing your request ${currencyConvertFailed}`);
        //     }
        // );


        // // where I made use of the static method on my class in the app-service.js
        let getMeCoinsRequest = CryptoService.getAllCoins();


        // the 2nd .then function to handle when all of the 20 stocks I querried my api for has been gotten

        getMeCoinsRequest.then((getCoin) => {
            // parsing the json once again this time for when I've been granted the stocks I querried for
            const myCoinRequest = JSON.parse(getCoin);

            // not using this currency converter algorithm because Promises couldn't work with it 
            // in version 1.2.0(where I used a new ES6 technology called fetch) I will be making use of this algorithm

            // naijaRate = myConverterResponse.rates.NGN;

            // let btcToNaira = naijaRate * getCoin[0].current_price
            // let ethToNaira = naijaRate * getCoin[1].current_price
            // let bncToNaira = naijaRate * getCoin[4].current_price
            // let tehthToNaira = naijaRate * getCoin[2].current_price
            // let rippleToNaira = naijaRate * getCoin[2].current_price
            // let dogeToNaira = naijaRate * getCoin[7].current_price

            // console.log(btcToNaira, ethToNaira, bncToNaira);
            // console.log(getCoin[0].name);

            // for getting bitcoin 
            $(".apiCall-BTCName").text(`${myCoinRequest[0].name}`);
            $(".apiCall-BTC").text(`$${myCoinRequest[0].current_price}`);
            // $(".apiCall-btctoNaira").text(`₦${btcToNaira}`)

            // for getting ethereum 
            $(".apiCall-ETHName").text(`${myCoinRequest[1].name} coin`);
            $(".apiCall-ETH").text(`$${myCoinRequest[1].current_price}`);
            // $(".apiCall-ethToNaira").text(`₦${ethToNaira}`);

            // for getting binance 
            $(".apiCall-BinanceCoinName").text(`${myCoinRequest[4].name}`);
            $(".apiCall-BinanceCoin").text(`$${myCoinRequest[4].current_price}`);
            // $(".apiCall-BnctoNaira").text(`₦${bncToNaira}`);

            // for getting tether
            $(".apiCall-tethName").text(`${myCoinRequest[2].name} coin`);
            $(".apiCall-tethCoin").text(`$${myCoinRequest[2].current_price}`);
            // $(".apiCall-tethToNaira").text(`₦${tehthToNaira}`);

            // for getting ripple
            $(".apiCall-rippCoinName").text(`${myCoinRequest[6].name} coin`);
            $(".apiCall-ripple").text(`$${myCoinRequest[6].current_price}`);
            // $(".apiCall-rippletoNaira").text(`₦${rippleToNaira}`);


            // for getting doge
            $(".apiCall-dgCoinName").text(`${myCoinRequest[7].name}`);
            $(".apiCall-dgCoin").text(`$${myCoinRequest[7].current_price}`);
            // $(".apiCall-dgCointoNaira").text(`₦${dogeToNaira}`);

        });



    // working with the search feature; All you have to do is input
    // the 3 ticker symbol for that crypto and get updates on it(ticker symbol examples: btc, eth, xrp)
    // in ths feature you can also search by name but it is advisable to use only ticker symbols for searching


    $("form.searching").submit( function(event){
        event.preventDefault();

        let userSearch = $("#cryp").val();
        // clearing out the input fields to allow users to input another ticker symbol
        $("#cryp").val("");

        let mySearchPromise = SearchFeature.searchMeCrypto(userSearch);

        mySearchPromise.then( (searchPassed) =>{
            // console.log(searchPassed);

            // parsing the  json got so I can be able to accss it as normal javascript
            const mySearchResponse = JSON.parse(searchPassed);

            // displaying values for my user
            $(".content-name").text(`Coin Name: ${mySearchResponse.coins[0].name}`);
            $(".content-id").text(`Coin Id: ${mySearchResponse.coins[0].id}`);
            $(".content-marketcapRank").text(`Coin Market cap Rank: ${mySearchResponse.coins[0].market_cap_rank}`);
            $(".content-symbol").text(`Coin Symbol: ${mySearchResponse.coins[0].symbol}`);
           
        },
        // the callback that run when my promise gets rejected
        (coinSearchFailed) => {
            $(".content-name").text(`There was an error processing your request ${coinSearchFailed}`);
            $(".content-id").text(`There was an error processing your request ${coinSearchFailed}`);
            $(".content-marketcapRank").text(`There was an error processing your request ${coinSearchFailed}`);
            $(".content-symbol").text(`There was an error processing your request ${coinSearchFailed}`);
        }
        );



    });






});