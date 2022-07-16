// i hate semicolons
const app = new PIXI.Application({ width: 800, height: 400, backgroundColor: 0xFEFEFE })
document.body.appendChild(app.view)

const loading = PIXI.Sprite.from("assets/loading.png")
app.stage.addChild(loading)

const loader = new PIXI.Loader()

loader.add("bomb", "assets/bomb.png")

/* TODO:
- redraw lives text at 100px height (looks sharper)
- redraw skips (and skip slots) at 75px height (looks sharper)

- 

- after finishing development switch to pixi.min.js for faster load time
*/

// why did i think this was a good idea this is actually MORE work than just hosting a server locally
