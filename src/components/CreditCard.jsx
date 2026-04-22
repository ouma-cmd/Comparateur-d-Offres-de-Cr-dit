import "./CreditCard.css";

function CreditCard({ offer }) {
  const setShowDetails = () => {
    const offerDetails = document.getElementById(offer.id.toString());
    if (!offerDetails) {
      console.error("offer not found");
      return;
    }
    offerDetails.classList.toggle("info-expanded");
  };
  return (
    <div className="card">
      {/* BADGE */}
      <div className="badge">
        {/* <span className={offer.recommended ? "recommended" : "standard offer"}>
          {offer.recommended ? "recommended" : "standard offer"}
        </span> */}
        {offer.recommended && (
          //   <span className="recommended">Recommended</span>
          <span className="recommended">Recommended</span>
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
        <div id={offer.id} className="info-details">
          <div>
            <p className="mensualité">mensualité</p>
            <p>{offer.mensualité}DH</p>
          </div>

          <div>
            <p className="Total_Cost ">Total Cost </p>
            <p>{offer.Total_Cost}</p>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <button className="btn" onClick={setShowDetails}>
        view details
      </button>
    </div>
  );
}

export default CreditCard;
