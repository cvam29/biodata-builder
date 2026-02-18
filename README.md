# Biodata Builder

A modern, easy-to-use web application for creating professional marriage biodata. Built with React, Vite, and Tailwind CSS.

## Features

- **Dynamic Form Builder**: Add, remove, and reorder fields for Personal, Family, and Contact details.
- **Real-time Preview**: See changes instantly as you type.
- **Split-Screen Layout**: Edit on the left, preview on the right.
- **Background Selection**: Choose from multiple background patterns (Plain, Texture, Floral, Modern).
- **PDF Export**: Generate high-quality, print-ready PDFs directly from the browser.
- **Responsive Design**: Works on desktop and mobile.
- **Privacy Focused**: All data is processed locally in your browser. No data is sent to any server.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cvam29/biodata-builder.git
   ```

2. Navigate to the project folder:

   ```bash
   cd biodata-builder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

## Deployment

This project is configured for automatic deployment to **GitHub Pages**.

1. **Push to GitHub**: Any push to the `main` branch will trigger the deployment workflow.
2. **Enable Pages**:
   - Go to your repository settings on GitHub.
   - Click on **Pages** in the sidebar.
   - Under "Build and deployment", select **GitHub Actions** as the source.
   - The workflow will automatically deploy your site on every push to `main`.

Your app will be live at `https://cvam29.github.io/biodata-builder/`.

## License

This project is open source and available under the [MIT License](LICENSE).
