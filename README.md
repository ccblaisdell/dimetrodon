# Dimetrodon
A 36 key split keyboard with stagger and splay, built with Ergogen.

## Images
| Top | Bottom |
| --- | --- |
| ![top](https://ccblaisdell.github.io/dimetrodon/left-top.png) | ![bottom](https://ccblaisdell.github.io/dimetrodon/left-bottom.png) |

## Development

- Clone the git repository.
- Install NodeJS.
- Run `npm install`.
- Run `make build`.

## Case

### Development

When exporting the PCB STEP file from Kicad, be sure to choose the "Board center origin"
choice for the Coordinates option. This will undo the [100, -100] movement we define
in ergogen to make the file easier to work with in Kicad and center the model in 3d space.

## Acknowledgements

- Ergogen
- Rae-dux
- Totem
- FlatFootFox
- linalinn/kicad-render
- Scottokeebs
