# AutoTyper
*A jQuery simulated typing plugin*

## Demo
benmansley.github.io/AutoTyper/demo

## Installation
AutoTyper is a JavaScript only plugin, so download autotyper.min.js and you're all set to use it in your project.

## Usage
To run the AutoTyper, use $.autoType() on the element you will be typing in. The plugin uses $.text(), so it won't work on form inputs.
The function takes 3 parameters, outlined below.

| Parameter  | Type    | Description |
| ---------- | ------- | ----------- |
| inputText  | string  | The text that will be outputted by the AutoTyper |
| speed      | number  | The speed of the typing, in ms/ character |
| skipSpaces | boolean | If set to true, the AutoTyper will type spaces immediately, with no tick of the timer |

## Known Issues
The plugin can not currently run more than once simultaneously on the same page.

## Feedback and New Features
We're always taking feedback on anything that should be included, let us know here or tweet @KolyaNet. 
