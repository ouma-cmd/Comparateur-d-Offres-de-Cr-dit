import CreditCard from "./components/CreditCard";
import offers from "./data/data";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        {offers.map((offer) => (
          <CreditCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
}

export default App;
