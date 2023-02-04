  // window.addEventListener("keydown", (event) => {
  //   switch (event.key) {
  //     case "w":
  //       rounded.style.top =
  //         parseInt(rounded.style.top) - gamesSetup.speed + "px";
  //       gamesSetup.score++;
  //       scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
  //       break;
  //     case "a":
  //       rounded.style.left =
  //         parseInt(rounded.style.left) - gamesSetup.speed + "px";
  //       gamesSetup.score++;
  //       scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
  //       break;
  //     case "s":
  //       rounded.style.top =
  //         parseInt(rounded.style.top) + gamesSetup.speed + "px";
  //       gamesSetup.score++;
  //       scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
  //       break;
  //     case "d":
  //       rounded.style.left =
  //         parseInt(rounded.style.left) + gamesSetup.speed + "px";
  //       gamesSetup.score++;
  //       scoreBoard.innerHTML = `Score: ${Number(gamesSetup.score)}`;
  //       break;
  //   }

  //   let pos = rounded.getBoundingClientRect();
  //   let win = document.querySelector("#win");
  //   let wins = win.getBoundingClientRect();
  //   let walls = document.querySelectorAll(".wall");

  //   for (let wall of walls) {
  //     let wowWalls = wall.getBoundingClientRect();
  //     if (
  //       pos.x < wowWalls.x + wowWalls.width &&
  //       pos.x + pos.width > wowWalls.x &&
  //       pos.y < wowWalls.y + wowWalls.height &&
  //       pos.y + pos.height > wowWalls.y
  //     ) {
  //       lose();
  //     } else if (
  //       pos.x < wins.x + wins.width &&
  //       pos.x + pos.width > wins.x &&
  //       pos.y < wins.y + wins.height &&
  //       pos.y + pos.height > wins.y
  //     ) {
  //       for (let i = 0; i < levels.length; i++) {
  //         currentLevel = levels[i];
  //         clearTable(tableEl);
  //         rounded.style.left = "10px";
  //         rounded.style.top = "50px";
  //         drawMaze(currentLevel);
  //       }
  //     }
  //     if (pos.x == 0) {
  //       lose();
  //     }
  //   }
  // });