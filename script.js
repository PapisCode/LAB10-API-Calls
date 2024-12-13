//Fetch Function
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

//XHR Function
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

//Post Form Function
document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;

    fetch('https://jsonplaceholder.typeicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body}),
    })
    .then(response => {
        if (!response.ok) throw new Error ('Failed to post data');
        return response.json();
    })
    .then(data => {
        alert('Post created with ID: ${data.id}');
    })
    .catch(error => {
        alert(`Error: ${error.message}`);
    });
});

//Put Function
document.getElementById('putForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('postId').value;
    const title = document.getElementById('updateTitle').value;
    const body = document.getElementById('updateBody').value;

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `https://jsonplaceholder.typeicode.com/posts/${id}`);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('displayData').innerHTML = `
            <h3>Updated: ${data.title}</h3>
            <p>${data.body}</p>
            `;
        } else {
            alert(`Error: ${xhr.statusText}`);
        }
    };
    xhr.onerror = () => {
        alert('Network error');
    };
    xhr.send(JSON.stringify({title, body}));
});