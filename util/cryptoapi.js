export async function getCoins() {
    const headers = {
        'X-RapidAPI-Key': '5c5bca9d66msh16cdbd1523eb053p13f8d1jsn2baeb24e46cb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    };
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
                                  {headers: headers},
                                 );

     const cryptoStatsAndCoins = await response.json();
     return cryptoStatsAndCoins;
   }


   export async function getCoinPriceHistory(coinUUID) {
    const coinPriceDataUrl =`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${coinUUID}&timePeriod=1y`
    const headers = {
        'X-RapidAPI-Key': '5c5bca9d66msh16cdbd1523eb053p13f8d1jsn2baeb24e46cb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    };
    const response = await fetch(coinPriceDataUrl,
                                  {headers: headers},
                                 );

     const cryptoCoinPriceHistory = await response.json();
     return cryptoCoinPriceHistory;
   }

   export async function getCoinSupply(coinUUID) {
    const coinSupplyUrl =`https://coinranking1.p.rapidapi.com/coin/${coinUUID}/supply`
    const headers = {
        'X-RapidAPI-Key': '5c5bca9d66msh16cdbd1523eb053p13f8d1jsn2baeb24e46cb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    };
    const response = await fetch(coinSupplyUrl,
                                  {headers: headers},
                                 );

     const coinSupplyData = await response.json();
     return coinSupplyData;
   }