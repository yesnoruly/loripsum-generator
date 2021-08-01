# Lorem ipsum generator 🐠

~~Lorem ipsum dolor sit amet, consecrated advising elite~~

![App preview](https://i.imgur.com/keKO8hw.gif)

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

> To prevent properties from appearing in the attribute of the final HTML element, use the dollar sign ($) in front of 
> the properties itself

### Title

Provides the title or name of the document/block/article

#### Styled Props

| Name       | Type   | Default   | Description                                               |
| ---------- | ------ | --------- | --------------------------------------------------------- |
| $color     | string | #000000   | Title text color                                          |
| $weight    | string | bold      | Title font weight                                         |
| $transform | string | uppercase | Specifies how to capitalize a title                       |
| $alignment | string | left      | Describes how title aligned with its parent block element |

### Button

![img](https://i.imgur.com/70exNUi.png)

Creates a clickable button that can be used in forms or anywhere else in a document that requires a button

#### Props

| Name | Type   | Default | Description             |
| ---- | ------ | ------- | ----------------------- |
| type | string | null    | Default button behavior |

#### Styled Props

| Name      | Type   | Default | Description                             |
| --------- | ------ | ------- | --------------------------------------- |
| $color    | string | #ffffff | Button text color                       |
| $bg       | string | #000000 | Background color of the button          |
| $bgHover  | string | #666666 | Background color of the button on hover |
| $bgActive | string | #999    | Background color of the button on click |

### InputTNumber

![img](https://i.imgur.com/0g8N5gl.png)

The element that is used to enter numbers, the input tag is nested within the label tag:

```html
<label>
  <input>
</label>
```

#### Props

| Name      | Type            | Default | Description                                                      |
| --------- | --------------- | ------- | ---------------------------------------------------------------- |
| labelText | string          | null    | Label text                                                       |
| value     | string          | null    | Default input value                                              |
| onChange  | function        | null    | When the value of input changes                                  |
| min       | number \ string | null    | Specifies the minimum value of input                             |
| max       | number \ string | null    | Specifies the maximum value of input                             |
| step      | number \ string | 1       | Specifies the interval between legal numbers in an input element |

#### Styled props

| Name   | Type   | Default | Description                |
| ------ | ------ | ------- | -------------------------- |
| $color | string | #000000 | Label and input text color |
| $size  | string | 20px    | Font size                  |

### CopyToClipboard

![img](https://i.imgur.com/cbioem9.png)

Element for copying text

#### Props

| Name | Type   | Default | Description       |
| ---- | ------ | ------- | ----------------- |
| data | string | null    | Data to be copied |

### Form

Form element that wraps form controls, accepts children

#### Styled Props

| Name      | Type    | Default | Description                                                      |
| --------- | ------- | ------- | ---------------------------------------------------------------- |
| $mtop     | string  | 0px     | Margin top                                                       |
| $grid     | boolean | false   | Turns on the grid property                                       |
| $autoFlow | string  | column  | Controls the operation of the automatic item placement algorithm |
| $jc       | string  | center  | Justify content                                                  |
| $ai       | string  | center  | Align items                                                      |
| $gap      | string  | 0px     | Indentation between elements                                     |

### Loader

![img](https://i.imgur.com/wxCcXU4.png)

An element that is used while waiting for a request to the server, etc.

#### Styled Props

| Name     | Type   | Default | Description              |
| -------- | ------ | ------- | ------------------------ |
| $width   | string | 3px     | Width                    |
| $color   | string | #666    | Spinner color            |
| $bgColor | string | #000    | Spinner background color |

### Output

![img](https://i.imgur.com/n7tKmFv.png)

Field for displaying any data, accepts children

#### Styled Props

| Name    | Type    | Default | Description                   |
| ------- | ------- | ------- | ----------------------------- |
| $mtop   | string  | 0px     | Margin top                    |
| $p      | string  | 0px     | Padding                       |
| $h      | string  | auto    | Height                        |
| $gap    | string  | 0px     | Padding between grid elements |
| $center | boolean | false   | Aligning text inside          |

### Paragraph

![img](https://i.imgur.com/Fq4pKR6.png)

Text element

#### Styled Props

| Name    | Type    | Default | Description   |
| ------- | ------- | ------- | ------------- |
| $color  | string  | #000    | Text color    |
| $size   | string  | 14px    | Text size     |
| $center | boolean | false   | Text aligning |

---

In this project I have used vitejs to build my application

---