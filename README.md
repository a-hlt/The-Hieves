# The Hieves

The Hieves is a web-based project built using modern web technologies. This repository contains everything you need to set up and run the project locally.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (latest LTS version recommended)
- **npm** (comes bundled with Node.js)
- A valid **Mapbox API key**

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/a-hlt/The-Hieves.git
   cd The-Hieves
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Mapbox API key:

   ```env
   VITE_MAP_API_KEY=your-mapbox-api-key
   ```

4. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

   The project will be available at `http://localhost:5173` by default.

## Contributing

Feel free to fork this repository and submit pull requests. Any contributions are greatly appreciated!

## License

This project is licensed under the [MIT License](LICENSE).

---

### Notes

- Ensure your Mapbox API key has the necessary permissions for the features you intend to use.
- For any issues, please open an issue on the GitHub repository.
