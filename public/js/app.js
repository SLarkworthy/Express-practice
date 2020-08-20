console.log("Client side js file is loaded")



const weatherForm = document.querySelector('form');
const search = document.querySelector('input')

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value;
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else if (data.forecast) {
            console.log(data.forecast);
            console.log(data.location)
        }
    })
})
})