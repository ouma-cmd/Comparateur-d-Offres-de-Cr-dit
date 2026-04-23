export function simulateTable(amount, rate, duration) {
  let results = [];
  let capital = amount;

  for (let i = 1; i <= duration; i++) {
    capital = capital + (capital * rate) / 100;

    const monthly = capital / (duration * 12);

    results.push({
      year: i,
      total: capital,
      monthly: monthly,
    });
  }

  return results;
}
