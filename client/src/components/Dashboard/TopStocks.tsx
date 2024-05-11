import { useState } from "react";
import Marquee from "@/components/ui/marquee";
import { Card } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import { toast } from "sonner";
import topstocksdata  from "@/lib/toptickers";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const TopStocks = () => {
  const [addingTicker, setAddingTicker] = useState<string | null>(null);

  const addToWatchlist = async (ticker: string) => {
    const username = localStorage.getItem("predicthub_username");
    if (!username) {
      toast.error("Please login first");
      return;
    }

    setAddingTicker(ticker);
    try {
      const response = await fetch(
        `${BACKEND_URL}/watchlist/add/${username}/${ticker}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add to watchlist");
      }

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.warning(data.message);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to add to watchlist");
      console.error("Error adding to watchlist:", err);
    } finally {
      setAddingTicker(null);
    }
  };

  return (
    <div className="overflow-hidden w-full">
      <Marquee pauseOnHover className="[--duration:90s]">
        {topstocksdata.map((stock, index) => (
          <Card
            key={`${stock.symbol}-${index}`}
            aria-label={`Stock ${stock.symbol}`}
            className="inline-flex flex-col items-center justify-center w-72 h-28 p-4 mx-2 shrink-0 relative"
          >
            <div className="font-semibold text-sm">{stock.name}</div>
            <div className="text-xs mt-1 text-muted-foreground">
              {stock.symbol} | {stock.stock_exchange.acronym}
            </div>
            <div className="text-xs mt-1 text-gray-500">
              {stock.stock_exchange.country}
            </div>
            <button
              onClick={() => addToWatchlist(stock.symbol)}
              disabled={addingTicker === stock.symbol}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors"
              title="Add to watchlist"
            >
              <CirclePlus
                className={`w-5 h-5 ${addingTicker === stock.symbol ? "animate-pulse" : ""
                  }`}
              />
            </button>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};

export default TopStocks;
