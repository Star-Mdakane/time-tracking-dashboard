const buttonCon = document.querySelector("#buttons");
const container = document.querySelector("#container");


fetch("./data.json")
    .then((response) => {
        if (!response.ok) console.log('could not fetch');
        return response.json();
    }).then((data) => {

        populateDom(data);
    })

function getTimeframe(e) {
    const timeframe = e.target.value
    console.log(timeframe)
    return timeframe;
}

const populateDom = (data) => {
    data.forEach((item) => {
        appendItem(item);
        // const img = listItem.querySelector(".img");
        // let arr = item.title.toLowerCase().split(" ");
        // let str = arr.join("-");
        // img.style.backgroundImage = "./images/icon-${item.title.toLowerCase().${str}.svg}"


    });
}

const appendItem = (item) => {
    const listItem = document.createElement("li");
    let timeframe = "";

    timeframe = buttonCon.querySelectorAll("button").forEach((button) => {
        button = getTimeframe;
    })

    listItem.innerHTML = `
    <li class="item card">
          <div class="img">
          </div>
          <div class="card-contents card">
            <h3 class="title">
                ${item.title}
            </h3>
            <div class="ellipsis-img">
              <img src="./images/icon-ellipsis.svg" alt="ellipsis">
            </div>
            <h1 class="current">
            </h1>
            <p class="previous">
            </p>
          </div>
        </li> 
    `
    container.appendChild(listItem)
    // const current = listItem.querySelector(".current");
    // const previous = listItem.querySelector(".previous");

    // if (timeframe === "daily") {
    //     current.textContent = `${item.timeframes.timeframe.current}`;
    //     previous.textContent = `Last ${item.timeframes.timeframe.previous}`;
    // } else if (timeframe === "weekly") {
    //     current.textContent = `${item.timeframes.timeframe.current}`;
    //     previous.textContent = `Last Week ${item.timeframes.timeframe.previous}`;
    // } else if (timeframe === "monthly") {
    //     current.textContent = `${item.timeframes.timeframe.current}`;
    //     previous.textContent = `Last Month ${item.timeframes.timeframe.previous}`;
    // }

}

