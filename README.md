# Scrowl Template Styling

Workspace for mocking up template stylesheets

[View here](src/index.html)

## Setup

There isn't any build processes necessary to view this project, just open up the `.html` files and everything that is needed is compiled.

## Development

To develop locally, a sass compiler is necessary to build the stylesheet.

## Available Theme Variables

| Variable                                | Type             | Default Value                            |
| --------------------------------------- | ---------------- | ---------------------------------------- |
| `--template-color`                      | text color       | $owl-ref-palette-gray-800                |
| `--template-bg`                         | background color | $owl-ref-palette-white                   |
| `--template-border-color`               | border color     | $owl-ref-palette-gray-300                |
| `--template-max-width`                  | length           | 1200px                                   |
| `--template-font-family-base`           | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-family-heading`        | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-letterspacing-heading` | length           | -0.025em                                 |
| `--template-spacer`                     | length           | 5vmin                                    |

## Template Options

| Class Name              | Usage                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `.template--background` | Adding a full width and full height image or color to the background. This will put a background behind text to maintain readability |
| `.template--inset`      | Adds padding around the template of the `--template-spacer` amount.                                                                  |
| `.template--min-height` | Sets the min-height of the template to be the full height of the window.                                                             |
| `.template--`           |                                                                                                                                      |
