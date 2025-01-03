# Tweet Craft

Tweet Craft is an AI-powered application built with Next.js that generates tweets based on user descriptions. By using Gemini's API, the app enables users to easily craft tweets based on their input, making it perfect for those looking for quick and creative social media content.
Video Link : https://vimeo.com/1043260556?share=copy

## Features

- **AI Tweet Generation**: Users provide a description, and the app generates a tweet based on the input.
- **Gemini API Integration**: The app utilizes Gemini's API to process natural language descriptions and create tweets.
- **Material-UI Integration**: The app uses Material-UI components for a modern and responsive user interface.

## Installation

### Prerequisites

- Node.js (>= 18.0)
- npm or yarn (package manager)

### Steps to Get Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Jagroop2001/tweet-craft
    cd tweet-craft
    ```

2. Install the dependencies:

    ```bash
    npm install
    # OR
    yarn install
    ```

3. Set up your Gemini API key:
   - Create a `.env.local` file in the root of the project.
   - Add your Gemini API key to the file:

    ```bash
    GEMINI_AI_API_KEY="YOUR GEMINI API KEY"
    ```

4. Run the development server:

    ```bash
    npm run dev
    # OR
    yarn dev
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the app in your browser.
2. Enter a description of the tweet you want to generate.
3. The app will communicate with Gemini's API to generate a tweet based on your input.
4. You can then use or modify the generated tweet before posting it.

## Contributing

Contributions are welcome! If you have any ideas for features or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
