import CreditCard from "./components/CreditCard";
import offers from "./data/data";
import Header from "./components/Header";

function App() {

  const bestRate = Math.min(...offers.map(o => o.rate));

  return (
    <div>

      <Header />

      <div className="container" style={{ display: "flex", gap: "20px" }}>
        {offers.map((offer) => (
          <CreditCard
            key={offer.id}
            offer={offer}
            isBest={offer.rate === bestRate}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
