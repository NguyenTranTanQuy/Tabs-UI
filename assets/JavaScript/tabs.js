const data = [
  {
    title: "React",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  },
  {
    title: "Angular",
    description:
      "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.",
  },
  {
    title: "Ember",
    description:
      "Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich UIs that work on any device.",
  },
  {
    title: "Vue.js",
    description:
      "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
  },
];

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const tabActive = $(".tab-item.active");
const line = $(".line");
const content = $(".content");

const run = () => {
  handleTab();
  getContent();
};

const handleTab = () => {
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      $(".tab-item.active").classList.remove("active");
      tab.classList.add("active");
      line.style.left = tab.offsetLeft + "px";
      line.style.width = tab.offsetWidth + "px";
      getContent(index);
    });
  });
};

const getContent = (id = 0) => {
  let html = `
  <h4 class="title">${data[id].title}</h4>
  <p class="description">
    ${data[id].description}
  </p>`;
  content.innerHTML = html;
};

run();
