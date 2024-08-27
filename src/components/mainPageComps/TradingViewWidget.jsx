import React from 'react';

const TradingViewWidget = ({ symbol }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "250",
      height: "200",
      locale: "en",
      dateRange: "1M",
      colorTheme: "light",
      trendLineColor: "rgba(230, 145, 56, 1)",
      underLineColor: "rgba(246, 178, 107, 1)",
      underLineBottomColor: "rgba(249, 203, 156, 0)",
      isTransparent: true,
      autosize: false,
      largeChartUrl: "",
      noTimeScale: false,
    });

    document.getElementById(`tradingview_${symbol}`).appendChild(script);
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" id={`tradingview_${symbol}`}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
