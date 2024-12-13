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

document.getElementById('fetchWithXHR').addEventListener('click', () => {
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typeicode.com/posts/2');
xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.getElementById('displayData').innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `;
    } else {
        document.getElementById('displayData').innerText = `Error: ${xhr.status} - ${xhr.statusText}`;
    }
};
xhr.error = () => {
    document.getElementById('displayData').innerText = 'Network error';
};
xhr.send();
});

