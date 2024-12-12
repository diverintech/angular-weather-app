# Weather App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8, with the option to disable standalone components applied using the following command: `ng new --no-standalone`.

The objective of this project is to create an app that consumes the API provided by [OpenWeatherMap](https://openweathermap.org/).

To run the project, you will need to create an account on OpenWeatherMap and generate an API key. Note that it can take up to a day for the key to become active.

## Steps to Obtain an API Key:

1. Go to [OpenWeatherMap Sign-Up Page](https://home.openweathermap.org/users/sign_up).
2. Create an account by filling in the required details.
3. Once your account is verified, log in and go to the **API keys** section under your account settings.
4. Generate a new API key and use it in your project.

## Configuration for API Key

After obtaining the API key, you need to create two configuration files in the `src/environments` folder.

### `environment.prod.ts`

```typescript
import { IEnvironment } from "./ienvironment";

export const environment: IEnvironment = {
  production: true,
  weatherApiKey: "YOUR_PRIVATE_KEY",
};
```

### `environment.ts`

```typescript
import { IEnvironment } from "./ienvironment";

export const environment: IEnvironment = {
  production: false,
  weatherApiKey: "YOUR_PRIVATE_KEY",
};
```

## Packages:

`npm install @fortawesome/fontawesome-svg-core`

`npm install @fortawesome/free-solid-svg-icons`

`npm install @fortawesome/angular-fontawesome@0.14.x`

## Installation and Development Server

1. Clone this repository:
   git clone <repository-url>
2. Navigate to the project directory:
   cd <project-folder>
3. Install the dependencies:
   npm install
4. Start the development server:
   npm start

Navigate to `http://localhost:4200/` in your browser to see the application. The application will automatically reload if you change any of the source files.

> **Note:** Ensure you have an updated version of Node.js installed on your machine. You can verify your Node.js version with:
> node -v
