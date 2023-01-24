# Scrowl Template Styling

Workspace for mocking up template stylesheets

- [Course Example here](src/index.html)
- [Styled List and Definition List Example](src/tmpl-styled-list.html)
- [Section Variable Example](src/section-options.html)
- [AODA Course Example here](src/aoda.html)
- [Color Theming Example here](src/theming.html)

## Setup

There isn't any build processes necessary to view this project, just open up the `.html` files and everything that is needed is compiled.

## Development

To develop locally, a local sass compiler is necessary to build the scss changes.

## Available Theme Variables

| Variable                             | Type          | Default Value                            |
| ------------------------------------ | ------------- | ---------------------------------------- |
| `--theme-max-width`                  | length        | 1200px                                   |
| `--theme-max-width-sm`               | length        | 90ch                                     |
| `--theme-font-family-base`           | font family   | $owl-ref-typeface-font-family-sans-serif |
| `--theme-font-family-heading`        | font family   | $owl-ref-typeface-font-family-sans-serif |
| `--theme-font-lineheight-base`       | value         | $owl-ref-typeface-lineheight-base        |
| `--theme-font-lineheight-heading`    | value         | $owl-ref-typeface-lineheight-sm          |
| `--theme-font-letterspacing-heading` | length        | -0.025em                                 |
| `--theme-spacer`                     | length        | clamp(1rem, 5vw, 5rem)                   |
| `--theme-spacer-sm`                  | length        | clamp(1rem, 2.5vw, 5rem)                 |
| `--theme-icon-size`                  | font size     | clamp(5em, 24vmin, 15em)                 |
| `--theme-icon-size-sm`               | font size     | clamp(2em, 14vmin, 10em)                 |
| `--theme-border-radius`              | border-radius | 0.25em                                   |
| `--theme-border-radius-sm`           | border-radius | 3px                                      |
| `--theme-border-radius-lg`           | border-radius | 1em                                      |
| `--theme-border-radius-pill`         | border-radius | 50em                                     |
| `--theme-img-border-radius`          | border-radius | 1em                                      |

| Variable                       | Type                   | Default Value                       |
| ------------------------------ | ---------------------- | ----------------------------------- |
| `--theme-btn-letterspacing`    | length                 | 0.0125em                            |
| `--theme-btn-font-weight`      | font-weight            | 600                                 |
| `--theme-btn-padding`          | padding                | 0.375em 1.125em                     |
| `--theme-btn-padding-sm`       | padding                | 0.25em 0.75em                       |
| `--theme-btn-padding-lg`       | padding                | 0.33em 1em                          |
| `--theme-btn-border-radius`    | border-radius          | #{$owl-ref-style-btn-border-radius} |
| `--theme-btn-border-radius-sm` | border-radius          | #{$owl-ref-style-btn-border-radius} |
| `--theme-btn-border-radius-lg` | border-radius          | #{$owl-ref-style-btn-border-radius} |
| `--theme-btn-outline`          | outline size and color | 0.125em var(--theme-light-bg)       |

| Variable                        | Type             | Default Value                      |
| ------------------------------- | ---------------- | ---------------------------------- |
| `--theme-accent-color`          | text color       | var(--theme-light-accent-color)    |
| `--theme-border-color`          | background color | var(--theme-light-border-color)    |
| `--theme-highlight-color`       | text color       | var(--theme-light-highlight-color) |
| `--theme-highlight-bg`          | background color | var(--theme-light-highlight-bg)    |
| `--theme-light-color`           | text color       | $owl-ref-palette-gray-800          |
| `--theme-light-icon-color`      | text color       | currentColor                       |
| `--theme-light-bg`              | background color | $owl-ref-palette-white             |
| `--theme-light-accent-color`    | color            | $owl-ref-palette-primary-500       |
| `--theme-light-border-color`    | border color     | $owl-ref-palette-gray-300          |
| `--theme-light-highlight-color` | text color       | var(--theme-light-color)           |
| `--theme-light-highlight-bg`    | background color | $owl-ref-palette-primary-200       |
| `--theme-alt-color`             | text color       | $owl-ref-palette-gray-800          |
| `--theme-alt-icon-color`        | text color       | currentColor                       |
| `--theme-alt-bg`                | background color | $owl-ref-palette-white             |
| `--theme-alt-accent-color`      | color            | $owl-ref-palette-primary-500       |
| `--theme-alt-border-color`      | border color     | $owl-ref-palette-gray-300          |
| `--theme-alt-highlight-color`   | text color       | var(--theme-alt-color)             |
| `--theme-alt-highlight-bg`      | background color | $owl-ref-palette-gray-900          |
| `--theme-dark-color`            | text color       | $owl-ref-palette-white             |
| `--theme-dark-icon-color`       | text color       | currentColor                       |
| `--theme-dark-bg`               | background color | $owl-ref-palette-gray-900          |
| `--theme-dark-accent-color`     | color            | $owl-ref-palette-cyan-500          |
| `--theme-dark-border-color`     | border color     | $owl-ref-palette-gray-600          |
| `--theme-dark-highlight-color`  | text color       | var(--theme-dark-color)            |
| `--theme-dark-highlight-bg`     | background color | $owl-ref-palette-cyan-700          |

## Section Options

| Feature          | Class Name             | Usage                                                                                                                                                                        |
| ---------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background       | `.section--bg`         | Adding a full width and full height image or color to the background. This will put a background color behind text to maintain readability                                   |
| Background Fixed | `.section--bg-fixed`   | When `template__background` is visible it sets it's background-attachment to fixed. This can also be done by adding `.template__background--fixed` directly on that element. |
| Inset            | `.section--inset`      | Adds padding/margin around the section of the `--theme-spacer` amount.                                                                                                       |
| Min Height       | `.section--min-height` | Sets the min-height of the section to be the full height of the window.                                                                                                      |
| Theme            | `.section--[variant]`  | Sets the color theme of the template. `.section--light` by default without a class needed. `.section--alt` and `.section--dark` are options                                  |

Testing these variations can be [Viewed here](src/section-options.html)
