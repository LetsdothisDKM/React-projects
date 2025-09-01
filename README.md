# webai-challenge

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


## Run project locally

- npm run dev
1. Run the above command in VSCode terminal.
2. This will open the Electron Slot Machine app.
3. There is a welcome page where you can either input your name and start plating the game or choose to view user stats.
4. There was a tradeoff while choosing the way to spin/scroll through the symbols. I chose to use "scrollToView" instead of the css animation for now(this is open for discussion). But, the current approach has a down side of spinning through the list of symbols based on the random number generated to focus and compute the reward and these random numbers can be adjacent sometimes which would result in a real quick spin to the user. The other approach was to use the css animation along with using "scrollToView" which results in top to bottom and bottom to top spin based on the number generated.
5. Please take a look into the results folder containing data files and screenshots for reference.

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn run dev
```

### Build

```bash
# For windows
$ yarn  build:win

# For macOS
$ yarn  build:mac

# For Linux
$ yarn build:linux
```
