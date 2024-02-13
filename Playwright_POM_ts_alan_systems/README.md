
# Automated UI testing using 🎭 Playwright with TypeScript  - Recruitment tasks

## Table fo contents
- [Contents of tasks](#contents-of-tasks)
- [Environment preparation](#environment-preparation)
  - [1. Install Node.js](#1-install-nodejs)
  - [2. Clone the repository with tests](#2-clone-the-repository-with-tests)
  - [3. Setup environment and install Playwright](#3-setup-environment-and-install-playwright)
  - [4. Update](#4-update)
- [Run the tests](#run-the-tests)
- [Resources](#resources)
- [Information](#information)

## Contents of tasks
1. Write an automated test that will check all top bar menu options. Start from home page: 
<br> https://alan-systems.com/en/business/
<br> On each page check if the top bar menu (all options are visible) and footage (basic contact data) are displayed correctly.

2. Write an automated test that will validate required fields in job offer contact form. Start from home page: https://alan-systems.com  navigate to your job offer and validate if all fields are required.

## Environment preparation
### 1. Install Node.js
You can check if you have `Node.js` installed by typing `node --version` in your terminal or command line.
If you want to install `Node.js` follow the instructions for your operating system.

**Using a package manager (recommended):**<br><br>
**For macOS:**<br>
You can use Homebrew to install Node.js. Open Terminal and run:
```bash
brew install node
```

**For Linux (Debian/Ubuntu):**<br>
You can install Node.js using apt. Open Terminal and run:
```bash
sudo apt update
sudo apt install nodejs npm
```

**For Windows:**<br>
Download the Windows Installer from the official Node.js website and follow the installation instructions.

**Using Node Version Manager (NVM):**<br>
You can also use NVM to manage Node.js versions. Follow the instructions on the NVM GitHub page to install NVM, and then use it to install Node.js.

### 2. Clone the repository with tests
To download the repository use the command:
```bash
git clone git@github.com:Pjotair/interview_tasks.git
```
Next go to the directory with POM:
```bash
cd Playwright_POM_ts_alan_systems
```

### 3. Setup environment and install Playwright
Once Node.js is installed, you can install Playwright using npm, which comes bundled with Node.js. On Terminal or Command Prompt and run the following command:
```bash
npm install
```
This will install Playwright and its dependencies in your project directory.

**Verify Installation**<br>
To verify that Playwright is installed correctly, run the following command in your terminal:
```bash
npx playwright --version
```
You should see the version number of Playwright printed to the console, confirming that it's installed successfully.

### 4. Update
Sometimes you may need to update your browser or Playwright.
- `chromium` browser update
  ```bash
  npx playwright install
  ```
- update or install all browsers: `chromium`, `webkit`, `firefox`
  ```bash
  npx playwright install
  ```
- update of Playwright (latest version):
  ```bash
  npm install -D @playwright/test@latest
  ```

## Run the tests
To run the tests make sure you are in the directory with POM, then use the command (you can add `--headed` at the end for visible mode): 
```bash
npx playwright test tests/test-business-page.spec.ts 
```
By default, the tests run in parallel, using the maximum number of available workers needed. You can change the parallel mode by changing the value for the `fullyParallel:` key from `true` to `false` in the `playwright.config.ts` file.

## Resources
 - [Playwright documentation](https://playwright.dev/)
 - [Node.js](https://nodejs.org/en)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Homebrew](https://brew.sh/)


## Information
The last launch in which all tests were passed occurred `Feb 12, 2024`.
```
System: macOS Sonoma Version 14.2.1 (23C71) with Chip Intel Core i7
Browser: Google Chrome Version 121.0.6167.160 (Official Build) (x86_64)
Playwright: Version 1.41.2
npm: Version 10.2.3
Node.js: Version 20.10.0
```
