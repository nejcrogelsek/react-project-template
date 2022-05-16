# React Project Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**First steps:**
1. Clone project by running:
`git clone https://github.com/nejcrogelsek/react-project-template.git`
2. Delete .git file inside cloned project.
3. Run: `yarn run start:clean`
4. Run: `yarn run husky:postinstall` to install husky git hook (automatically formats the code when pushing code to github)

## Available Scripts

In the project directory, you can run:

### `yarn start:clean`

Remove `node_modules` & `yarn.lock` & `yarn-error.log` files.
Then it runs: `yarn` to install all packages & finally `yarn start` to run the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn generate:icons`

This command generates new icons. Before running this command make sure you have:
1. .svg files inside src/assets/icons
2. Run: `yarn generate:icons`
3. Format file `src/components/shared/Icon/Icon.generated.tsx` to get rid of eslint/prettier errors.

### `yarn generate:page PageName`

Generates new page with specified name.

### `yarn generate:component ComponentName`

Generates new component with specified name.

### Check for updates

- `yarn update:check` - Check for any packages updates.
- `yarn update:single packageName` - Updates one package.
- `yarn update` - Updates all packages.

### Prettier

- `yarn code:check` - Check for any prettier errors.
- `yarn code:format` - Format code.
- `yarn code:format:specific-file` - Format specific file.

### eslint

- `yarn lint` - Check for any eslint errors.
- `yarn lint:fix` - Fix some of the errors.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
