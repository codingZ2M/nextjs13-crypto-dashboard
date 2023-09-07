import Coins from "@/components/home/Coins";
import DashboardOverview from "@/components/home/DashboardOverview";
import { getCoins} from "@/util/cryptoapi";

 const Home = async () => {
  const cryptoStatsAndCoins = await getCoins();
  const isCryptoStatsAndCoinsArray =  cryptoStatsAndCoins.length<1 || !cryptoStatsAndCoins;


  return (
    <div> 
      { !isCryptoStatsAndCoinsArray ? (
           <>
            <DashboardOverview coinsStats={cryptoStatsAndCoins.data.stats}/>
            <Coins coins={cryptoStatsAndCoins.data.coins}/>
           </>
      ):
      (
        <div>
            <span className='text-sm'>No Coins Available.</span>
          </div>   
      )
     }
  </div>
  )
}

export default Home;