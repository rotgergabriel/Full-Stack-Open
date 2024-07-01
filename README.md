# Full Stack Open - Coursework Repository 📚💻

This repository contains the exercises for the **Full Stack Open 2024** course offered by the University of Helsinki. The course focuses on modern web development using JavaScript, covering technologies such as React, Redux, Node.js, MongoDB, GraphQL, and TypeScript.

## Repository Structure 🗂️

- **Fundamentals of Web Applications (Part 0)**
- **Introduction to React (Part 1)**
- **Communicating with the Server (Part 2)**
- **Programming a Server with NodeJS and Express (Part 3)**
- **Testing Express Servers, User Administration (Part 4)**
- **Testing React Applications (Part 5)**
- **Advanced State Management (Part 6)**
- **React Router, Custom Hooks, CSS and Webpack (Part 7)**
- **GraphQL (Part 8)**
- **TypeScript (Part 9)**
- **React Native (Part 10)**
- **CI/CD (Continuous Integration/Continuous Delivery) (Part 11)**
- **Containers (Part 12)**
- **Using Relational Databases (Part 13)**

Each folder in this repository corresponds to a module or exercise set from the course.

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

## Additional Resources 📖

- [Full Stack Open 2024](https://fullstackopen.com/)
- [University of Helsinki](https://www.helsinki.fi/en)

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 💻✨

![Coding](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif)

