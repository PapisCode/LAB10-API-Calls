document.getElementById('fetchWithFetch').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typeicode.com/posts/1')
    .then(response => {
        if (!response.ok) throw new Error ('Network response was not ok');
        return response.json();
    })
    .then(data => {
        document.getElementById('displayData').innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `;
})
.catch(error => {
    document.getElementById('displayData').innerText = `Error: ${error.message}`;
    });
});

