const year = document.querySelector('#year');

fetchTemperature();

year.addEventListener('change', fetchTemperature);

async function fetchTemperature() {
  const parent = document.querySelector('#parent');

  const res = await fetch(`/api/temperature/${year.value}`);
  const data = await res.json();
  
  console.log(data);

  parent.innerHTML = `
    <table>
      <tr>
        <th>Country</th>
        <th>Year</th>
        <th>Temperature</th>
      </tr>
      ${data.map(item => `
        <tr>
          <td>${item.country}</td>
          <td>${item.year}</td>
          <td>${item.averageTemperature}°C</td>
        </tr>
      `).join('')}
    </table>
  `;
};