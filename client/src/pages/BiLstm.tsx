import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import BiLSTMPage from "@/components/Prediction/BILSTM/BiLSTMPage";
import AppHeader from "@/components/Sidebar/app-header";
import { useCallback, useState, useEffect } from "react";
import { fetchStockData } from "@/lib/actions";

export const BiLSTM = () => {
  const [ticker, setTicker] = useState("GOOGL");
  const [inputTicker, setInputTicker] = useState("GOOGL");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (searchTicker: string) => {
    setLoading(true);
    try {
      const result = await fetchStockData(searchTicker);
      setData(result);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(ticker);
  }, [fetchData, ticker]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader
          ticker={ticker}
          setTicker={setTicker}
          setInputTicker={setInputTicker}
          inputTicker={inputTicker}
          fetchData={fetchData}
          isLoading={loading}
        />
        <div className="flex-1 overflow-y-auto pt-16">
          <BiLSTMPage data={data} loading={loading} ticker={ticker} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}