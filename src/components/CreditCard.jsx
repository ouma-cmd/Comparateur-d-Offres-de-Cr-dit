import "./CreditCard.css";

function CreditCard({ offer, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(offer)}>
      {/* BADGE */}
      <div className="badge">
        {/* <span className={offer.recommended ? "recommended" : "standard offer"}>
          {offer.recommended ? "recommended" : "standard offer"}
        </span> */}
        {offer.recommended ? (
        //   <span className="recommended">Recommended</span>
          <span className={offer.recommended ? "recommended" : "standard offer"}>Recommended</span>
        ) : (
          <span className="standard">Standard offer</span>
        )}
      </div>

      {/* LOGO */}
      <div className="logo">
        <img src={offer.logo} alt={offer.provider} />
      </div>

      {/* INFOS */}
      <div className="infos">
        <div>
          <p className="label">Amount</p>
          <p>{offer.amount} DH</p>
        </div>

        <div>
          <p className="label">Interest Rate</p>
          <p>{offer.rate}%</p>
        </div>

        <div>
          <p className="label">Duration</p>
          <p>{offer.duration} years</p>
        </div>
      </div>

      {/* BUTTON */}
      <button className="btn">view details</button>
    </div>
  );
}

export default CreditCard;
