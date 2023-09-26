# My Angular Input Components

This repository contains two custom Angular input components: `app-input-text` and `app-input-password`, each with its set of input properties.

## `app-input-text` Component

### Input Properties

- `@Input() placeholder!: string;`: Specifies the placeholder text to display in the input field. It should be a string.

- `@Input() size: string = '';`: Sets the size of the input field. You can pass one of the following values: 'small', 'medium', or 'large'.

- `@Input() width: string = '';`: Defines the width of the input field. You can use any valid CSS unit such as `%`, `em`, `rem`, or `vm`.

## `app-input-password` Component

### Input Properties

- `@Input() placeholder!: string;`: Specifies the placeholder text to display in the password input field. It should be a string.

- `@Input() size: string = '';`: Sets the size of the password input field. You can pass one of the following values: 'small', 'medium', or 'large'.

## Usage

To use these components in your Angular application, simply include them in your templates and bind their input properties as needed.

Example usage of `app-input-text` and `app-input-password`:

```html
<app-input-text
  [placeholder]="'Enter your name'"
  [size]="'medium'"
  [width]="'50%'"
></app-input-text>

```html
<app-input-password
  [placeholder]="'Enter your password'"
  [size]="'large'"
></app-input-password>

