# Lorem ipsum generator 🐠

~~Lorem ipsum dolor sit amet, consecrated advising elite~~ <br /> <br />
<img src="https://i.imgur.com/keKO8hw.gif" title="App preview" /> <br />
[See demo](https://google.com)

## Technologies ⚙️

- ReactJS
- SCSS
- Styled components
- [Effector ☄️](https://effector.dev)

## Quick start 🏎️

**Install the dependencies:**

```shell
npm install
```

**Run the app**

```shell
npm run dev
```

**You can view the app by visiting `http://localhost:3000/`.**

---

**Builds the app for production to the dist folder.**

```shell
npm run build
```

**Serves the production build from the dist folder.**

```shell
npm run serve
```

## Components guide 🔩

In this project I am using Styled Components to style my components

- ***To prevent properties from appearing in the attribute of the final html element, use the dollar sign ($) in front
  of the properties itself*** <br />

### Button

![Imgur](https://i.imgur.com/70exNUi.png) <br />

Creates a clickable button that can be used in forms or anywhere else in a document that requires a button

#### Props

| Name  | Type    | Default  |               Description              |
|  ---  | ---     |   ---    |                   ---                  |
| type  | string  | null     | Specifies the default button behavior  |

#### Styled Props

|  Name   |  Type   |   Default   |               Description               |
|   ---   |   ---   |     ---     |                   ---                   |
| $color  | string  |   #ffffff   | Specifies the color of the button text  |
| $bg  | string  |   #000000   | Specifies the background color of the button  |
| $bgHover  | string  |   #666666   | Specifies the background color of the button on hover  |
| $bgActive  | string  |   #999   | Specifies the background color of the button on click  |
