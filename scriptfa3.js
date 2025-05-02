function generateTable() {
  const start = parseInt(document.getElementById('startVal').value);
  const end = parseInt(document.getElementById('endVal').value);

  // Validate input
  if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  let output = "<table>";

  for (let i = 1; i <= start; i++) {
    output += "<tr>";
    for (let j = 1; j <= end; j++) {
      output += `<td>${i * j}</td>`;
    }
    output += "</tr>";
  }

  output += "</table>";

  document.getElementById('tableContainer').innerHTML = output;
}