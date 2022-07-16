// Create the application helper and add its render target to the page
const app = new PIXI.Application({ width: 640, height: 360, backgroundColor: 0xFFFFFF });
document.body.appendChild(app.view);

//const loader = PIXI.Loader.shared

const bomb = PIXI.Sprite.from("assets/bomb.png")
app.stage.addChild(bomb)


/* TODO:
- redraw lives text at 100px height (looks sharper)
- redraw skips (and skip slots) at 75px height (looks sharper)

- 

- after finishing development switch to pixi.min.js for faster load time
*/