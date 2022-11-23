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
| `--template-icon-color`                 | text color       | currentColor                             |
| `--template-bg`                         | background color | $owl-ref-palette-white                   |
| `--template-border-color`               | border color     | $owl-ref-palette-gray-300                |
| `--template-invert-color`               | text color       | $owl-ref-palette-white                   |
| `--template-invert-icon-color`          | text color       | currentColor                             |
| `--template-invert-bg`                  | background color | $owl-ref-palette-gray-900                |
| `--template-invert-border-color`        | border color     | $owl-ref-palette-gray-600                |
| `--template-max-width`                  | length           | 1200px                                   |
| `--template-font-family-base`           | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-family-heading`        | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-lineheight-base`       | value            | $owl-ref-typeface-lineheight-base        |
| `--template-font-lineheight-heading`    | value            | $owl-ref-typeface-lineheight-heading     |
| `--template-font-letterspacing-heading` | length           | -0.025em                                 |
| `--template-spacer`                     | length           | 5vmin                                    |

## Template Options

| Feature    | Class Name              | Usage                                                                                                                                      |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Background | `.template--bg`         | Adding a full width and full height image or color to the background. This will put a background color behind text to maintain readability |
| Inset      | `.template--inset`      | Adds padding/margin around the template of the `--template-spacer` amount.                                                                 |
| Min Height | `.template--min-height` | Sets the min-height of the template to be the full height of the window.                                                                   |
| Invert     | `.template--invert`     | This is an alternate color option for the template. By default it swaps the `background-color` and `color` values                          |
