import { useState, useEffect } from 'react';
import { ethers } from "ethers";

const MyPurchases = ({ marketplace, nft, account }) => {
  const [loading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState([]);
  
  const loadPurchasedItems = async () => {
    try {
      if (!account) {
        throw new Error('Account is not defined');
      }

      // Get the latest block number
      const latestBlock = await marketplace.provider.getBlockNumber();
      // Set the block range to query
      const fromBlock = Math.max(0, latestBlock - 1000); // Adjust this number as needed

      // Create a filter for the Bought events with the buyer set as the account
      const filter = marketplace.filters.Bought(null, null, null, null, null, account);
      // Fetch the results with a block range
      const results = await marketplace.queryFilter(filter, fromBlock, latestBlock);
      
      // Fetch metadata of each NFT and create a purchases array
      const purchases = await Promise.all(results.map(async (i) => {
        // Fetch arguments from each result
        const args = i.args;
        // Get the URI from the NFT contract
        const uri = await nft.tokenURI(args.tokenId);
        // Fetch the NFT metadata stored on IPFS
        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error(`Failed to fetch metadata: ${response.statusText}`);
        }
        const metadata = await response.json();
        // Get the total price of the item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(args.itemId);
        // Define the purchased item object
        return {
          totalPrice,
          price: args.price,
          itemId: args.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        };
      }));

      setPurchases(purchases);
    } catch (error) {
      console.error('Error loading purchased items:', error);
      alert(`Error loading purchases: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPurchasedItems();
  }, []);

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="text-white">Loading...</h2>
    </main>
  );

  return (
    <div className="flex justify-center bg-gradient-to-br from-black via-gray-900 to-red-800 min-h-screen">
      <div className="container mx-auto px-4 pt-36"> {/* Increased padding-top to move items further down */}
        {purchases.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {purchases.map((item, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-t-lg border-b-4 border-red-500" // Changed border color
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.name}</h3> {/* Changed text color */}
                  <p className="text-gray-300 mb-4">{item.description}</p> {/* Changed text color */}
                  <p className="text-gray-300 mb-4">
                    Total Price: {ethers.utils.formatEther(item.totalPrice)} AIA
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <main className="py-10 text-center">
            <h2 className="text-xl font-semibold text-gray-300">No purchases</h2> {/* Changed text color */}
          </main>
        )}
      </div>
    </div>
  );
};

export default MyPurchases;
