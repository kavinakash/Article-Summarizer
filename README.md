# Article Summarizer using Sumz GPT

![Demo](demo.gif)

This project is a web application built using Vite and React that utilizes the RapidAPI to summarize articles using the GPT model. The RapidAPI integrates with ScrapeNinja.net for web scraping and uses GPT for summarization, making it ideal for text mining purposes.

## Features

- Summarize articles into 300 words with the input as a URL.
- Utilizes the power of GPT for accurate and concise summarization.
- Optional translation feature for multilingual content.
- Responsive and user-friendly web interface.

## Demo

Check out the [live demo](https://main--extraordinary-dieffenbachia-ea4d5f.netlify.app/) hosted on Netlify.

## How to Use

1. clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Go to Rapid API website and find the Article summarize(https://rapidapi.com/restyler/api/article-extractor-and-summarizer)
4. Copy the API key and modify it in rapidApiKey variable under src>services>article.js
5. Run the application using `npm run dev` or `yarn dev`.
6. Enter the URL of the article you want to summarize and click "GO".
7. Optionally, clear the history using the "Clear History" button.

## API Implementation Details 
[blog post](https://pixeljets.com/blog/gpt-summary-is-broken/).

## Credits

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [RapidAPI](https://rapidapi.com/) - The world's largest API marketplace.


