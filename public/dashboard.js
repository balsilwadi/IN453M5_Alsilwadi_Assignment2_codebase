document.getElementById('rowCountIn453A').addEventListener('click', () => fetchAndDisplay('/rowCountIn453A'));
document.getElementById('rowCountIn453C').addEventListener('click', () => fetchAndDisplay('/rowCountIn453C'));
document.getElementById('namesIn453B').addEventListener('click', () => fetchAndDisplay('/namesIn453B'));

function fetchAndDisplay(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));
}
