let ip = "https://api.ipify.org/?format=json"

let  button = document.getElementById('button')

button.addEventListener('click', async function () {
        await fetch(ip)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let myIp = data.ip
                console.log(myIp)

                fetch(`http://ip-api.com/json/${myIp}?fields=1572889`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        for ( let key in data) {
                            let locationInfo = document.createElement('li')
                            document.getElementsByTagName("body")[0].appendChild(locationInfo)
                            locationInfo.innerHTML = `${key}: ${data[key]}`
                            console.log(data)
                        }

                    })
            });
    })

