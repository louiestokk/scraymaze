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
  `#_......#`,
  `#########`
];

let currentLevel = maze1;
let levels = [maze1];
let body = document.querySelector("body");
let divTable = document.getElementById("cover");
let tableEl = document.querySelector("table");
let scoreBoard = document.querySelector(".score");
const video = document.querySelector("video");
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
    video.classList.add("hide");
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

  let mover = document.createElement("div");
  const drawMaze = (maze) => {
    clearTable(tableEl);
    divTable.appendChild(mover);
    mover.style.left = "50px";
    mover.style.top = "340px";
    mover.setAttribute("id", "player");
    mover.textContent = "@";
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

  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "w":
        mover.style.top = parseInt(mover.style.top) - gamesSetup.speed + "px";
        gamesSetup.score++;
        scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
        break;
      case "a":
        mover.style.left = parseInt(mover.style.left) - gamesSetup.speed + "px";
        gamesSetup.score++;
        scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
        break;
      case "s":
        mover.style.top = parseInt(mover.style.top) + gamesSetup.speed + "px";
        gamesSetup.score++;
        scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
        break;
      case "d":
        mover.style.left = parseInt(mover.style.left) + gamesSetup.speed + "px";
        gamesSetup.score++;
        scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
        break;
    }

    let pos = mover.getBoundingClientRect();
    let win = document.querySelector("#win");
    let wins = win.getBoundingClientRect();
    let walls = document.querySelectorAll(".wall");

    for (let wall of walls) {
      let wowWalls = wall.getBoundingClientRect();
      if (
        pos.x < wowWalls.x + wowWalls.width &&
        pos.x + pos.width > wowWalls.x &&
        pos.y < wowWalls.y + wowWalls.height &&
        pos.y + pos.height > wowWalls.y
      ) {
        lose();
      } else if (
        pos.x < wins.x + wins.width &&
        pos.x + pos.width > wins.x &&
        pos.y < wins.y + wins.height &&
        pos.y + pos.height > wins.y
      ) {
        for (let i = 0; i < levels.length; i++) {
          currentLevel = levels[i];
          clearTable(tableEl);
          mover.style.left = "10px";
          mover.style.top = "50px";
          drawMaze(currentLevel);
        }
      }
      if (pos.x == 0) {
        lose();
      }
    }
  });
};
