let city=document.getElementById('city')
let country=document.getElementById('country')
let temperature=document.getElementById('temperature')
let user_input=document.getElementById('user_input')

let search=async()=>{
    let cityvalue=user_input.value
    if (user_input.value=="") {
        alert('Please enter the city name before search')
        
    } else {
        let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        let data=await response.json()
        city.textContent=data.name
        country.textContent=data.sys.country
        temperature.textContent=data.main.temp
    }
}