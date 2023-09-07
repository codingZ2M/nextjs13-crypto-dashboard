import { Card, Metric, Text } from "@tremor/react";

const DashboardOverview = ({coinsStats}) => {
  return (
    <div className="bg-black shadow-lg shadow-tremor-content-emphasis p-4">
      <h2 className="text-xl text-white font-normal mb-4">Crypto Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="max-w-xs mx-auto h-24 bg-gray-900 " decoration="top" decorationColor="indigo">
             <Text className="text-white">Total Coins</Text>
             <Metric className="text-xl text-white">{coinsStats.totalCoins}</Metric>
        </Card>
        <Card className="max-w-xs mx-auto h-24 bg-gray-900 " decoration="top" decorationColor="rose">
             <Text className="text-white">Total Markets</Text>
             <Metric className="text-xl text-white">{coinsStats.totalMarkets}</Metric>
        </Card>
        <Card className="max-w-xs mx-auto h-24 bg-gray-900 " decoration="top" decorationColor="purple">
             <Text className="text-white">Total Exchanges</Text>
             <Metric className="text-xl text-white">{coinsStats.totalExchanges}</Metric>
        </Card>
        <Card className="max-w-xs mx-auto h-24 bg-gray-900 " decoration="top" decorationColor="green">
             <Text className="text-white">Total Market Cap</Text>
             <Metric className="text-xl text-white">{coinsStats.totalMarketCap}</Metric>
        </Card>
        <Card className="max-w-xs mx-auto h-24 bg-gray-900 " decoration="top" decorationColor="blue">
             <Text className="text-white">Tota l24h Volume</Text>
             <Metric className="text-xl text-white">{coinsStats.total24hVolume}</Metric>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
