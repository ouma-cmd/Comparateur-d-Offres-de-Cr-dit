import { simulateTable } from "../utils/calculations";
import "./Calcultabl.css"
export default function CaculTabl({ offer }) {
  return (
    <div className="info-details" id={"offer-table-" + offer.id.toString()}>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Monthly</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {simulateTable(offer.amount, offer.rate, offer.duration).map(
            (item) => (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{item.monthly.toFixed(2)} DH</td>
                <td>{item.total.toFixed(2)} DH</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
