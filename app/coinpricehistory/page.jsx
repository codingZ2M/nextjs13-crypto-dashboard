"use client"
import { Card, Title, LineChart } from "@tremor/react";
import {  Flex, Text, ProgressBar } from "@tremor/react";

import { getCoinPriceHistory, getCoinSupply } from '@/util/cryptoapi';
import {  useSearchParams} from 'next/navigation';


const CoinPriceHistory = async () => {
    const searchParams = useSearchParams();
  const coinUUID = searchParams.get('uuid');

  const cryptoCoinPriceData = await getCoinPriceHistory(coinUUID);
  console.log(cryptoCoinPriceData.data.history);

  const coinSupplyData = await getCoinSupply(coinUUID);
  console.log(coinSupplyData.data.supply);

  return (
   <div className="mt-6 sm:mt-12 w-full px-2 flex flex-col gap-6 items-center justify-center">
       <Card className="bg-gray-900">
          <Title className="text-white">Crypto Coin Price History: {coinUUID} [UUID]</Title>
             <LineChart className="mt-6" data={cryptoCoinPriceData.data.history} index="timestamp"
                            categories={["price"]}
                            colors={["emerald"]}     
                            yAxisWidth={40}
             />
       </Card>

       <div className="w-full px-2 flex flex-col sm:flex-row gap-4">
          <Card className="w-full sm:w-1/3">
            <div className="flex justify-between text-xs">
              <span>Circulating Amount</span>
              <span>Circulating Synced At</span>
            </div>
            <Flex>
              <Text>{coinSupplyData.data.supply.circulatingAmount}</Text>
              <Text>{coinSupplyData.data.supply.circulatingSyncedAt}</Text>
            </Flex>
            <ProgressBar value={45} color="teal" className="mt-3" />
          </Card>

          <Card className="w-full sm:w-1/3 ">
            <div className="flex justify-between text-xs">
              <span>Total Amount</span>
              <span>Total Synced At</span>
            </div>
            <Flex>
              <Text>{coinSupplyData.data.supply.totalAmount}</Text>
              <Text>{coinSupplyData.data.supply.totalSyncedAt}</Text>
            </Flex>
            <ProgressBar value={45} color="teal" className="mt-3" />
          </Card>
       </div>
    </div>
  )
}

export default CoinPriceHistory;