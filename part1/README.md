## Vite + React Library Setup

### Installation

**Using npm 6.x (outdated, but still in use by some):**

1.  Create a new Vite project with React template:

```bash
npm create vite@latest folderName --template react
```

**Using npm 7+ (additional double hyphen is required):**

```bash
npm create vite@latest folderName -- --template react
```

2.  Navigate to the created directory:

```bash
cd folderName
```

3.  Install dependencies:

```bash
npm install
```

### Updating Dependencies (Global)

1.  Update all packages to their latest versions:

```bash
npm update
```

### Additional Options in Case of Global Update Errors

1.  Update `rimraf`:

```bash
npm update rimraf
```

2.  Update `glob`:

```bash
npm update glob
```

### Running the Application

1.  Start the development server:

```bash
npm run dev
```

## ESLint
### You can silence the warning caused by the ESLint tool - react/prop-types by adding the following line to the .eslintrc.cjs file:

```
module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
     'eslint:recommended',
     'plugin:react/recommended',
     'plugin:react/jsx-runtime',
     'plugin:react-hooks/recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
   settings: { react: { version: '18.2' } },
   plugins: ['react-refresh'],
   rules: {
     'react-refresh/only-export-components': [
       'warn',
       { allowConstantExport: true },
     ],

     'react/prop-types': 0
   },
}
```