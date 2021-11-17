const data = [
  {
    url: "./images/1.jpg",
    title: "Storytime",
    text: "Featured . 107,268 Posts",
  },
  {
    url: "./images/2.jpg",
    title: "Metal",
    text: "5,434 Posts",
  },
  {
    url: "./images/3.jpg",
    title: "Football",
    text: "13,027 Posts",
  },
  {
    url: "./images/4.jpg",
    title: "Secret Santa",
    text: "50,306 Posts",
  },
  {
    url: "./images/5.png",
    title: "Steve Irwin",
    text: "496 Posts",
  },
  {
    url: "./images/6.jpg",
    title: "Inspiring",
    text: "84,759 Posts",
  },
  {
    url: "./images/7.jpg",
    title: "Family",
    text: "7,543 Posts",
  },
  {
    url: "./images/8.png",
    title: "Cat",
    text: "260,934 Posts",
  },
  {
    url: "./images/9.jpg",
    title: "Food",
    text: "75,514 Posts",
  },
  {
    url: "./images/10.png",
    title: "Cute",
    text: "285,744 Posts",
  },
];

function showData() {
  let main_div = document.querySelector(".explore_data");

  main_div.innerHTML = null;

  data.forEach(({ url, title, text }) => {
    let box_div = document.createElement("div");
    box_div.setAttribute("class", "box_div");
    let title_div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("class", "explore_image");
    let text_div = document.createElement("div");

    img.src = url;

    title_div.innerHTML = title;

    text_div.innerHTML = text;

    box_div.append(img, title_div, text_div);

    main_div.append(box_div);
  });
}

showData();

let my

async function getData(page) {
  await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=L&client_id=key`
  )
    .then((res) => res.json())
    .then((res) => console.log(res.results));
}

getData(1);
