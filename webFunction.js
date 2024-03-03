

function fillTextBox(data){
    var textArea = document.getElementById('textarea');
    if (textArea) {
        // Set the value of the text box to the provided data
        textArea.value = data;
    } else {
        console.error("Text box element not found!");
    }
};

function get(){
    fetch('users.json')
            .then(response => response.json())
            .then(noFormat => {
                var data = JSON.stringify(noFormat, null, 1);
                fillTextBox(data);
            })
            .catch(error => console.error('Error fetching data:', error));
};

function post(){
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    };

    // Send the form data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formData));

    formatted = JSON.stringify(formData, null, 1);
    fillTextBox(formatted);
}
/*
function post(){
*/

