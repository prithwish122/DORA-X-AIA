import { useState, useEffect } from 'react';
import { ethers } from "ethers";

const Home = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });
      }
    }
    setLoading(false);
    setItems(items);
  };

  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait();
    loadMarketplaceItems();
  };

  useEffect(() => {
    loadMarketplaceItems();
  }, []);

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="text-white">Loading...</h2>
    </main>
  );

  return (
    <div className="flex justify-center bg-gradient-to-br from-black via-gray-900 to-red-800 min-h-screen">
      <div className="container mx-auto px-4 pt-36"> {/* Increased padding-top to move items further down */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-t-lg border-b-4 border-red-500" // Changed border color
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.name}</h3> {/* Changed text color */}
                  <p className="text-gray-300 mb-4">{item.description}</p> {/* Changed text color */}
                  <button
                    onClick={() => buyMarketItem(item)}
                    className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                  >
                    Buy for {ethers.utils.formatEther(item.totalPrice)} AIA
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <main className="py-10 text-center">
            <h2 className="text-xl font-semibold text-gray-300">No listed assets</h2> {/* Changed text color */}
          </main>
        )}
      </div>
    </div>
  );
};

export default Home;
