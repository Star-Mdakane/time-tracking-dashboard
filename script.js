document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#container");



    fetch("./data.json")
        .then((response) => {
            if (!response.ok) throw new Error("could not fetch");
            return response.json();
        }).then((data) => {

            populateDom(data);
        })

    const populateDom = (data) => {
        data.forEach((jsonData) => {
            appendItem(jsonData);
        });

    }

    const appendItem = (jsonData) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
              <div class="img">
              </div>
              <div class="card-contents card">
                    <div class="top">
                        <h3 class="title">
                            ${jsonData.title}
                        </h3>
                        <div class="ellipsis-img">
                            <img src="./images/icon-ellipsis.svg" alt="ellipsis">
                        </div>
                    </div>
                    <div class="bottom">
                        <h1 class="currentTime" >
                           ${jsonData.timeframes.daily.current} hrs
                        </h1>
                        <p class="previousTime" >
                        Last ${jsonData.timeframes.daily.current} hrs
                        </p>
                    </div>
              </div>
        `
        addImage(listItem, jsonData);
        editTimeframes(listItem, jsonData);

    }

    function addImage(listItem, jsonData) {
        listItem.classList.add("item");
        container.appendChild(listItem);

        let img = listItem.querySelector(".img");
        let name = jsonData.title.split(" ").join("-").toLowerCase();

        let filePath = `url(./images/icon-${name}.svg)`
        img.style.backgroundImage = filePath;
    }

    function editTimeframes(listItem, jsonData) {
        // What kept me long I was trying to dynamically inject the value of the timeframe
        const currentTime = listItem.querySelector(".currentTime");
        const previousTime = listItem.querySelector(".previousTime");

        const dailyBtn = document.querySelector("#daily");
        dailyBtn.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const value = e.target.getAttribute("class");
                if (value === "daily") {
                    if (jsonData.timeframes.daily.current == 1) {
                        currentTime.textContent = `${jsonData.timeframes.daily.current} hr`
                    } else if (jsonData.timeframes.daily.previous == 1) {
                        previousTime.textContent = `Last - ${jsonData.timeframes.daily.previous} hr`

                    }
                    else {
                        currentTime.textContent = `${jsonData.timeframes.daily.current} hrs`
                        previousTime.textContent = `Last - ${jsonData.timeframes.daily.previous} hrs`

                    }
                }
            }

        })
        const weeklyBtn = document.querySelector("#weekly");
        weeklyBtn.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const value = e.target.getAttribute("class");
                if (value === "weekly") {
                    currentTime.textContent = `${jsonData.timeframes.weekly.current} hrs`
                    previousTime.textContent = `Last Week - ${jsonData.timeframes.weekly.previous} hrs`
                }
            }
        })
        const monthlyBtn = document.querySelector("#monthly");
        monthlyBtn.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const value = e.target.getAttribute("class");
                if (value === "monthly") {

                    currentTime.textContent = `${jsonData.timeframes.monthly.current} hrs`
                    previousTime.textContent = `Last Month - ${jsonData.timeframes.monthly.previous} hrs`
                }
            }
        })
    }

})
