// the business logic file of my application

// stay tuned for updates on this application, I was not able to get prices in my local cureency naira with promises but in 
// version 1.2.0(where I used fetch) I will be making use of this static function
export class CurrencyConvertService {
    static convertCurrencytToNaira() {

        // returning a promise this time around and not storing me promise in a variable
        return new Promise((promiseSucess, promiseReject) => {

            // reinstantiating my xmlHttpRequest object in my return block

            let convertToNairaRequest = new XMLHttpRequest();
            let conversionUrl = `https://openexchangerates.org/api/latest.json?app_id=${process.env.API_KEY}&symbols=ngn&prettyprint=false&show_alternative=false`;

            // using a new propery called .onload to determine tell javascript when my response will be ready

            convertToNairaRequest.onload = function () {
                // console.log(this.readyState);

                if (this.status === 200) {
                    // if the api call promise is a success, get me the response property and if it is a failure, do the same thing for me
                    promiseSucess(convertToNairaRequest.response);

                }
                else {
                    promiseReject(convertToNairaRequest.response);
                }
            }

            convertToNairaRequest.open("GET", conversionUrl, true);
            convertToNairaRequest.send();
        });
    }
}

export class CryptoService {
    static getAllCoins() {

        return new Promise((cryptoPromiseSuccess, cryptoPromiseReject) => {

            // reinstantiating a new request for all coins and data about those coins
            let allCoinsRequest = new XMLHttpRequest();

            // endpoint to get me price of first 20 coins
            // here I did not need an api key thanks to coin gecko, I only requested for the first 20 crypto's they have, thankfully the three crypto's I wanted was in that list(btc, bnb, eth)

            const allCoinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`;

            allCoinsRequest.onload = function () {
                if (this.status === 200) {
                    // if the api call promise is a success, get me the response property and if it is a failure, do the same thing for me
                    cryptoPromiseSuccess(allCoinsRequest.response);

                }
                else {
                    cryptoPromiseReject(allCoinsRequest.response);
                }
            }

            // opening and sending the request 

            allCoinsRequest.open("GET", allCoinsUrl, true);
            allCoinsRequest.send();

        });
    }
}

// the class for searching crypto's
export class SearchFeature{
    static searchMeCrypto(cryptoEntered) {

        // returning a promise this time around and not storing me promise in a variable
        return new Promise((searchPromiseSucess, searchPromiseFailed) => {

            // reinstantiating my xmlHttpRequest object in my return block

            let searchRequest = new XMLHttpRequest();
            let searchUrl = `https://api.coingecko.com/api/v3/search?query=${cryptoEntered}`;

            // using a new propery called .onload to determine tell javascript when my response will be ready

            searchRequest.onload = function () {
                // console.log(this.readyState);

                if (this.status === 200) {
                    // if the api call promise is a success, get me the response property and if it is a failure, do the same thing for me
                    searchPromiseSucess(searchRequest.response);

                }
                else {
                    searchPromiseFailed(searchRequest.response);
                }
            }

            searchRequest.open("GET", searchUrl, true);
            searchRequest.send();
        });
    }
}