let maze1 = [
  `####################`,
  `#.................!#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#.......#`,
  `#########`
];
let maze2 = [
  `#########################`,
  `#........................`,
  `#........................`,
  `#..#######################`,
  `#........................#`,
  `#........................`,
  `######################...`,
  `######################...`,
  `######################...`,
  `#........................`,
  `#........................`,
  `#..#######################`,
  `#........................#`,
  `#........................`,
  `#####################....`,
  `#####################....`,
  `#####################....`,
  `#!!......................`,
  `#!!......................`
];
let currentLevel = maze1;
let levels = [maze1, maze2];
let body = document.querySelector("body");
let divTable = document.getElementById("cover");
let tableEl = document.querySelector("table");
let scoreBoard = document.querySelector(".score");
// const video = document.querySelector("video");
let gamesSetup = {
  speed: 15,
  score: 0
};

let info = () => {
  let b1 = document.querySelector("#one");
  b1.textContent = "WASD to move & press me to play";
  b1.style.fontSize = "1.3rem";
};

let loadPage = () => {
  let getRideOfMenu = () => {
    scoreBoard.classList.remove("hide");
    // video.classList.add("hide");
    scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
    let b1 = document.querySelector("#one");
    let b2 = document.querySelector("#two");
    b1.style.display = "none";
    b2.style.display = "none";
    body.style.flexDirection = "row";
    body.style.justifyContent = "flex-start";
    body.style.alignItems = "flex-start";
  };
  getRideOfMenu();

  let lose = () => {
    scoreBoard.classList.add("hide");
    let scaryAudio = document.createElement("audio");
    scaryAudio.src = "/src/scream.mp3";
    scaryAudio.autoplay = true;
    let looseP = document.createElement("section");
    looseP.classList.add("lose-modal");
    let h1 = document.createElement("h1");
    h1.style.color = "white";
    let button = document.createElement("button");
    button.classList.add("restart-btn");
    clearTable(tableEl);
    mover.style.display = "none";
    h1.textContent = "GAME OVER";
    button.textContent = "Restart Game";
    button.setAttribute("onclick", "window.location.reload();");
    button.setAttribute("type", "button");
    body.appendChild(looseP);
    body.append(scaryAudio);
    setTimeout(() => {
      looseP.appendChild(h1);
      looseP.appendChild(button);
      // body.style.justifyContent = "space-between";
    }, 1000);
  };

  const clearTable = (tableEl) => {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    }
  };

  let rounded = document.querySelector(".rounded");

  const drawMaze = (maze) => {
    document.body.style.cursor = "none";
    clearTable(tableEl);

    for (let i = 0; i < currentLevel.length; i++) {
      let rowEl = document.createElement("tr");
      tableEl.appendChild(rowEl);

      for (let x = 0; x < currentLevel[i].length; x++) {
        let tdEl = document.createElement("td");
        rowEl.appendChild(tdEl);
        tdEl.innerHTML = maze[i].charAt(x);
        switch (maze[i].charAt(x)) {
          case "#":
            tdEl.setAttribute("class", "wall");
            break;
          case ".":
            tdEl.setAttribute("class", "freespace");
            break;
          case "_":
            tdEl.setAttribute("id", "start");
            break;
          case "!":
            tdEl.setAttribute("id", "win");
            break;
        }
      }
    }
  };
  drawMaze(currentLevel);
  rounded.classList.remove("hide");
  if (document.style) document.style.cursor = "none";
};

const moveCursor = (e) => {
  let rounded = document.querySelector(".rounded");
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  rounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
window.addEventListener("mousemove", moveCursor);
