# Lorem ipsum generator 🐠

~~Lorem ipsum dolor sit amet, consecrated advising elite~~

![App preview](https://i.imgur.com/keKO8hw.gif)

[See demo](https://loripsum-generator.vercel.app)

## Technologies ⚙️

- ReactJS
- SCSS
- Styled components
- [Effector ☄️](https://effector.dev)

## Quick start 🏎️

#### `npm install`:

**Install the dependencies**

#### `npm run dev`:

**Run the app, you can view the app by visiting `http://localhost:3000/`**

---

#### `npm run build`:

**Builds the app for production to the dist folder**

#### `npm run serve`:

**Serves the production build from the dist folder.**

#### `npm run eslint`:

**Run ESLint**

#### `npm run lint:fix`:

**Run ESLint with fix**

## Components guide 🔩

In this project I am using Styled Components to style my components

> To prevent properties from appearing in the attribute of the final HTML element, use the dollar sign ($) in front of
> the properties itself

### [Title](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Title.jsx)

Provides the title or name of the document/block/article

#### Styled Props

| Name       | Type   | Default   | Description                                               |
| ---------- | ------ | --------- | --------------------------------------------------------- |
| $color     | string | #000000   | Title text color                                          |
| $weight    | string | bold      | Title font weight                                         |
| $transform | string | uppercase | Specifies how to capitalize a title                       |
| $alignment | string | left      | Describes how title aligned with its parent block element |

### [Button](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Button.jsx)

![img](https://i.imgur.com/70exNUi.png)

Creates a clickable button that can be used in forms or anywhere else in a document that requires a button

#### Props

| Name | Type   | Default | Description             |
| ---- | ------ | ------- | ----------------------- |
| type | string | null    | Default button behavior |

#### Styled Props

| Name              | Type   | Default | Description                             |
| ----------------- | ------ | ------- | --------------------------------------- |
| $color            | string | #ffffff | Button text color                       |
| $background       | string | #000000 | Background color of the button          |
| $backgroundHover  | string | #666666 | Background color of the button on hover |
| $backgroundActive | string | #999999 | Background color of the button on click |

### [InputTNumber](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/InputTNumber.jsx)

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

### [CopyToClipboard](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/CopyToClipboard.jsx)

![img](https://i.imgur.com/cbioem9.png)

Element for copying text

#### Props

| Name | Type   | Default | Description       |
| ---- | ------ | ------- | ----------------- |
| data | string | null    | Data to be copied |

### [Form](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Form.jsx)

Form element that wraps form controls, accepts children

#### Styled Props

| Name            | Type    | Default | Description                                                      |
| --------------- | ------- | ------- | ---------------------------------------------------------------- |
| $marginTop      | string  | 0px     | Margin top                                                       |
| $grid           | boolean | false   | Turns on the grid property                                       |
| $autoFlow       | string  | column  | Controls the operation of the automatic item placement algorithm |
| $justifyContent | string  | center  | Justify content                                                  |
| $alignItems     | string  | center  | Align items                                                      |
| $gap            | string  | 0px     | Indentation between elements                                     |

### [Loader](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Loader.jsx)

![img](https://i.imgur.com/wxCcXU4.png)

An element that is used while waiting for a request to the server, etc.

#### Styled Props

| Name        | Type   | Default | Description              |
| ----------- | ------ | ------- | ------------------------ |
| $width      | string | 3px     | Width                    |
| $color      | string | #666    | Spinner color            |
| $background | string | #000    | Spinner background color |

### [Output](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Output.jsx)

![img](https://i.imgur.com/n7tKmFv.png)

Field for displaying any data, accepts children

#### Styled Props

| Name       | Type    | Default | Description                   |
| ---------- | ------- | ------- | ----------------------------- |
| $marginTop | string  | 0px     | Margin top                    |
| $padding   | string  | 0px     | Padding                       |
| $height    | string  | auto    | Height                        |
| $gap       | string  | 0px     | Padding between grid elements |
| $center    | boolean | false   | Aligning text inside          |

### [Paragraph](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/src/Components/Paragraph.jsx)

![img](https://i.imgur.com/Fq4pKR6.png)

Text element

#### Styled Props

| Name    | Type    | Default | Description   |
| ------- | ------- | ------- | ------------- |
| $color  | string  | #000    | Text color    |
| $size   | string  | 14px    | Text size     |
| $center | boolean | false   | Text aligning |

## Hook guide

### use-clipboard

```javascript
import useClipboard from "/hooks/react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard("Text to copy");

  return (
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```

With the successDuration option:

```javascript
import useClipboard from "/hooks/react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard("Text to copy", {
    // `isCopied` will go back to `false` after 1000ms
    successDuration: 1000,
  });

  return (
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```

## [Vite](https://vitejs.dev/)

In this project I have used [Vite](https://vitejs.dev/) to build my application

## [ESLint](https://github.com/Karvacky-Roma/loripsum-generator/blob/master/.eslintrc.json)

Assignment rules used in the project

🔧: Fixable with [`npm run eslint:fix`](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems)

| 🔧                  | Rule                                                                                                                              | Description                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <center>🔧</center> | [import/order](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md)                                 | Checks Import Sorting                                                                           |
|                     | [import/prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md) | When there is only a single export from a module, prefer using default export over named export |
|                     | [no-alert](https://eslint.org/docs/rules/no-alert)                                                                                | Disallow the use of alert, confirm, and prompt                                                  |
|                     | [no-console](https://eslint.org/docs/rules/no-console)                                                                            | Disallow the use of console                                                                     |
|                     | [no-debugger](https://eslint.org/docs/rules/no-debugger)                                                                          | Disallow the use of debugger                                                                    |
|                     | [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)                                                              | Disallow nested ternary expressions                                                             |
| <center>🔧</center> | [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)                                                        | Enforce consistent spacing inside braces                                                        |
|                     | [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)                         | Prevent Prevent missing props validation in a React component definition                        |
| <center>🔧</center> | [linebreak-style](https://eslint.org/docs/rules/linebreak-style)                                                                  | Enforce consistent linebreak style                                                              |

## Deploy

The application is deployed on the hosting [Vercel](https://vercel.com)
