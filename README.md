# PubMed Abstract Summarizer

A web application that summarizes PubMed abstracts using OpenAI's ChatGPT.

## Overview

This application was developed with the help of OpenAI's ChatGPT, a powerful AI language model that provided guidance and assistance throughout the development process. The application utilizes the OpenAI API to generate summaries of PubMed abstracts, and a simple proxy server is used to bypass the CORS policy when making requests to the PubMed website.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Proxy Server Setup](#proxy-server-setup)
3. [OpenAI API Setup](#openai-api-setup)
4. [Troubleshooting and Debugging](#troubleshooting-and-debugging)
5. [Deployment](#deployment)

## Project Setup

To set up the project, follow these steps:

1. Clone the repository.
2. Install the required dependencies: `npm install`.
3. Start the development server: `npm start`.

## Proxy Server Setup

To bypass the CORS policy when making requests to the PubMed website, a proxy server is required. To set up the proxy server:

1. Install the required dependencies: `npm install express cors`.
2. Create a proxy server using Express and CORS middleware.
3. Set up a route to handle requests to the PubMed website.
4. Run the proxy server.

## OpenAI API Setup

To set up the OpenAI API, follow these steps:

1. Sign up for an API key from OpenAI.
2. Install the required dependencies: `npm install openai`.
3. Configure the API by adding your API key to a `.env` file.
4. Create a function to interact with the OpenAI API, handling chat completions.
5. Use the API to generate summaries of PubMed abstracts.

## Troubleshooting and Debugging

During the development process, we encountered several issues and found solutions to resolve them. Here are some common issues you might face:

1. Import/export errors: Ensure that you're using the correct import and export syntax, and verify that the named exports are properly defined.
2. Module not found errors: Ensure that the required dependencies are installed and imported correctly.
3. CORS policy errors: Verify that the proxy server is properly configured and running.
4. Network errors: Check if the specified ports for the application and proxy server are available. If not, change the ports accordingly.

## Deployment

When deploying the application, you will still need the proxy server to handle requests to the PubMed website. To deploy the application, follow these steps:

1. Build the React application for production: `npm run build`.
2. Choose a hosting service or platform for the React application and follow their deployment instructions.
3. Deploy the proxy server on a server or platform that supports Node.js applications.
4. Update the React application's API endpoints to point to the deployed proxy server.
