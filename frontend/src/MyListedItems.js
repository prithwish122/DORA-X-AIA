import { useState, useEffect } from 'react';
import { ethers } from "ethers";

function renderSoldItems(items) {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Sold</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={`Item ${idx}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 border-t border-gray-600">
                <p className="text-gray-300 font-semibold">
                  For {ethers.utils.formatEther(item.totalPrice)} AIA - Received {ethers.utils.formatEther(item.price)} AIA
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MyListedItems({ marketplace, nft, account }) {
  const [loading, setLoading] = useState(true);
  const [listedItems, setListedItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);

  const loadListedItems = async () => {
    // Load all sold items that the user listed
    const itemCount = await marketplace.itemCount();
    let listedItems = [];
    let soldItems = [];
    for (let indx = 1; indx <= itemCount; indx++) {
      const i = await marketplace.items(indx);
      if (i.seller.toLowerCase() === account) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId);
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(i.itemId);
        // define listed item object
        let item = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        };
        listedItems.push(item);
        // Add listed item to sold items array if sold
        if (i.sold) soldItems.push(item);
      }
    }
    setLoading(false);
    setListedItems(listedItems);
    setSoldItems(soldItems);
  };

  useEffect(() => {
    loadListedItems();
  }, []);

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="text-white top-10">Loading...</h2>
    </main>
  );

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-red-800 min-h-screen flex items-center justify-center py-6"> {/* Decreased padding to move upwards */}
      <div className="container mx-auto px-4 mt-14"> {/* Adjusted padding-top to move items further down */}
        {listedItems.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Listed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {listedItems.map((item, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Listed Item ${idx}`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 border-t border-gray-600">
                    <p className="text-gray-300 font-semibold">
                      {ethers.utils.formatEther(item.totalPrice)} AIA
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {soldItems.length > 0 && (
              <div className="mt-10">
                {renderSoldItems(soldItems)}
              </div>
            )}
          </>
        ) : (
          <main className="text-center py-10">
            <h2 className="text-xl font-semibold text-gray-300">No listed assets</h2>
          </main>
        )}
      </div>
    </div>
  );
}
