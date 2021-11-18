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

function showStaticData() {
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

showStaticData();

function change_page() {
  let main_div = document.querySelector(".main_container");

  let page = 1;

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      page++;
      getData(page);
    }
  };

  getData(page);
}

change_page();

async function getData(page) {
  let my_data = [];
  console.log("getData", page);
  await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=L&client_id=WlWzYioYsw1MAtzuh30oNc7ROz--nua0jFHi0urNhvs`
  )
    .then((res) => res.json())
    .then((res) => (my_data = [...my_data, ...res.results]))
    .finally(() => {
      showData(my_data);
    });
}

let page = 1;

// getData(page);

async function showData(data) {
  console.log(data);

  let main_div = document.querySelector(".data_container");

  let dummy_div = document.createElement("div");

  dummy_div.setAttribute("class", "dummy_div");

  data?.map(
    ({ id, urls: { small }, alt_description, width, height, likes }) => {
      let sub_div = document.createElement("div");

      sub_div.setAttribute("class", "data_box");

      let img = document.createElement("img");

      let description = document.createElement("div");

      img.src = small;

      img.setAttribute("class", "data_image");

      description.innerHTML = alt_description;

      let num_box = document.createElement("div");
      num_box.setAttribute("class", "num_box");

      let download_img = document.createElement("img");
      download_img.src = "./images/up_arrow.png";
      let download_div = document.createElement("div");
      download_div.innerHTML = height;
      let download_box = document.createElement("div");

      download_box.setAttribute("class", "download_box");
      download_box.append(download_img, download_div);

      let comment_img = document.createElement("img");
      comment_img.src = "./images/comment.png";
      let comment_div = document.createElement("div");
      comment_div.innerHTML = likes;
      let comment_box = document.createElement("div");
      comment_box.append(comment_img, comment_div);
      comment_box.setAttribute("class", "comment_box");

      let view_img = document.createElement("img");
      view_img.src = "./images/view.png";
      let view_div = document.createElement("div");
      view_div.innerHTML = width;
      let view_box = document.createElement("div");
      view_box.append(view_img, view_div);
      view_box.setAttribute("class", "view_box");

      num_box.append(download_box, comment_box, view_box);

      sub_div.append(img, description, num_box);

      dummy_div.append(sub_div);

      main_div.append(dummy_div);
    }
  );
}

showData();
