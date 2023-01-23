# Scrowl Template Styling

Workspace for mocking up template stylesheets

- [Course Example here](src/index.html)
- [Styled List and Definition List Example](src/tmpl-styled-list.html)
- [Section Variable Example](src/section-options.html)
- [AODA Course Example here](src/aoda.html)

## Setup

There isn't any build processes necessary to view this project, just open up the `.html` files and everything that is needed is compiled.

## Development

To develop locally, a local sass compiler is necessary to build the scss changes.

## Available Theme Variables

| Variable                                | Type             | Default Value                            |
| --------------------------------------- | ---------------- | ---------------------------------------- |
| `--template-light-color`                | text color       | $owl-ref-palette-gray-800                |
| `--template-light-icon-color`           | text color       | currentColor                             |
| `--template-light-bg`                   | background color | $owl-ref-palette-white                   |
| `--template-light-accent-color`         | color            | $owl-ref-palette-primary-500             |
| `--template-light-border-color`         | border color     | $owl-ref-palette-gray-300                |
| `--template-alt-color`                  | text color       | $owl-ref-palette-gray-800                |
| `--template-alt-icon-color`             | text color       | currentColor                             |
| `--template-alt-bg`                     | background color | $owl-ref-palette-white                   |
| `--template-alt-accent-color`           | color            | $owl-ref-palette-primary-500             |
| `--template-alt-border-color`           | border color     | $owl-ref-palette-gray-300                |
| `--template-dark-color`                 | text color       | $owl-ref-palette-white                   |
| `--template-dark-icon-color`            | text color       | currentColor                             |
| `--template-dark-bg`                    | background color | $owl-ref-palette-gray-900                |
| `--template-dark-accent-color`          | color            | $owl-ref-palette-cyan-500                |
| `--template-dark-border-color`          | border color     | $owl-ref-palette-gray-600                |
| `--template-max-width`                  | length           | 1200px                                   |
| `--template-font-family-base`           | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-family-heading`        | font family      | $owl-ref-typeface-font-family-sans-serif |
| `--template-font-lineheight-base`       | value            | $owl-ref-typeface-lineheight-base        |
| `--template-font-lineheight-heading`    | value            | $owl-ref-typeface-lineheight-heading     |
| `--template-font-letterspacing-heading` | length           | -0.025em                                 |
| `--template-spacer`                     | length           | clamp(1rem, 5vw, 5rem)                   |
| `--template-spacer-sm`                  | length           | clamp(1rem, 2.5vw, 5rem)                 |
| `--template-icon-size`                  | font size        | clamp(5em, 24vmin, 15em)                 |
| `--template-icon-size-sm`               | font size        | clamp(2em, 14vmin, 10em)                 |

## Section Options

| Feature          | Class Name             | Usage                                                                                                                                                                        |
| ---------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background       | `.section--bg`         | Adding a full width and full height image or color to the background. This will put a background color behind text to maintain readability                                   |
| Background Fixed | `.section--bg-fixed`   | When `template__background` is visible it sets it's background-attachment to fixed. This can also be done by adding `.template__background--fixed` directly on that element. |
| Inset            | `.section--inset`      | Adds padding/margin around the section of the `--template-spacer` amount.                                                                                                    |
| Min Height       | `.section--min-height` | Sets the min-height of the section to be the full height of the window.                                                                                                      |
| Theme            | `.section--[variant]`  | Sets the color theme of the template. `.section--light` by default without a class needed. `.section--alt` and `.section--dark` are options                                  |

Testing these variations can be [Viewed here](src/section-options.html)
