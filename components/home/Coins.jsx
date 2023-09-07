import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
  } from "@tremor/react";
import Link from "next/link";


const Coins = ({coins}) => {
  return (
    <div className="container mx-auto my-12 ">
      <Card className="bg-gray-900">
        <Title className="text-white">Crypto Coins</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
                <TableHeaderCell className="text-red-500">UUID</TableHeaderCell>
                <TableHeaderCell className="text-red-500">SYMBOL</TableHeaderCell>
                <TableHeaderCell className="text-red-500">NAME</TableHeaderCell>
                <TableHeaderCell className="text-red-500">MARKET CAP</TableHeaderCell>
                <TableHeaderCell className="text-red-500">PRICE</TableHeaderCell>
                <TableHeaderCell className="text-red-500">LISTED AT</TableHeaderCell>
                <TableHeaderCell className="text-red-500">TIER</TableHeaderCell>
                <TableHeaderCell className="text-red-500">CHANGE</TableHeaderCell>
                <TableHeaderCell className="text-red-500">RANK</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {coins.map((coin) => (
                <TableRow key={coin.uuid}>
                  <TableCell>
                    <Text className="text-gray-300">
                      <Link href={`/coinpricehistory?uuid=${coin.uuid}`}>{coin.uuid}</Link>
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-white">{coin.symbol}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.marketCap}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.price}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.listedAt}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.tier}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.change}</Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-gray-300">{coin.rank}</Text>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default Coins
