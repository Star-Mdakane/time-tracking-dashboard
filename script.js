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
    });
}

const appendItem = (item) => {
    const listItem = document.createElement("li");

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
    container.appendChild(listItem);

}

