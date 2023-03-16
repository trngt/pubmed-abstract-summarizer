# PubMed Abstract Summarizer

A web application that summarizes PubMed abstracts using OpenAI's ChatGPT.

This project is the result of a collaborative effort between a user and an AI assistant. Together, they built a web application that generates summaries of PubMed abstracts using OpenAI's ChatGPT.

## Overview

This application was developed with the help of OpenAI's ChatGPT, a powerful AI language model that provided guidance and assistance throughout the development process. The application utilizes the OpenAI API to generate summaries of PubMed abstracts, and a simple proxy server is used to bypass the CORS policy when making requests to the PubMed website.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Proxy Server Setup](#proxy-server-setup)
3. [OpenAI API Setup](#openai-api-setup)
4. [Troubleshooting and Debugging](#troubleshooting-and-debugging)
5. [Deployment](#deployment)
6. [The Process] (#process)

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

## The Process

1. **Designing the application:** The user asked for help in building an application that summarizes PubMed abstracts. The AI assistant suggested a plan involving a React-based frontend, a proxy server, and the use of OpenAI's ChatGPT API.

2. **Implementing the application step-by-step:** The AI assistant provided detailed instructions for each step of the process, from setting up the frontend to integrating the ChatGPT API. However, due to the assistant's response limitations, some responses were truncated, and the user had to ask for clarifications and additional information to complete each step.

3. **Addressing issues and errors:** As the user worked through the implementation, they encountered various errors and issues. The user shared these error messages and issues with the AI assistant, who then helped debug and resolve the problems.

4. **Adjusting the implementation:** The AI assistant offered alternative solutions whenever the user encountered challenges, such as suggesting a different proxy server port when the default port was unavailable.

5. **Securing API keys:** The user learned about securing API keys by creating a `.env` file and using environment variables. This ensured that sensitive information was not exposed in the source code.

6. **Deployment considerations:** The user asked about deploying the application and whether the proxy server was still necessary. The AI assistant explained that the proxy server was needed to avoid CORS policy issues and recommended a deployment strategy.

7. **Creating documentation:** The AI assistant generated a technical README in Markdown format, which the user could copy and paste into their project repository. Additionally, the AI assistant provided a suggested repository name and description.

This project showcases the power of collaboration between humans and AI, demonstrating how AI can assist in creating, debugging, and documenting software applications.
