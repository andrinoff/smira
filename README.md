# Personal Website - Andrey Smirnov

![GitHub Repo stars](https://img.shields.io/github/stars/andrinoff/smira?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/andrinoff/smira?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/andrinoff/smira?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/andrinoff/smira?style=for-the-badge)

A sleek, modern, and fully responsive personal portfolio website built with Svelte and Tailwind CSS. Designed to showcase projects, skills, and provide a point of contact.

**[View Live Demo](https://smira.andrinoff.com/)**

---

![Project Screenshot](images/project-screenshot.png)

## ✨ Features

-   **Modern UI/UX:** Clean, dark-themed design with subtle animations and a professional look.
-   **Component-Based Architecture:** Built with Svelte, the codebase is modular, maintainable, and easy to scale.
-   **Responsive Design:** Looks great on all devices, from mobile phones to desktops, thanks to Tailwind CSS.
-   **Featured Projects Section:** A dedicated area to showcase your best work with images, descriptions, tech stacks, and links.
-   **Skills Showcase:** A section to highlight your technical skills and expertise.
-   **Functional Contact Form:** An integrated contact form that sends messages directly to your inbox via a serverless function.
-   **SEO Optimized:** Includes meta tags for title and description to improve search engine visibility.

## 🚀 Tech Stack

-   **Frontend:** [Svelte](https://svelte.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Backend (Contact Form):** [Vercel Serverless Functions](https://vercel.com/docs/functions)
-   **Deployment:** [Vercel](https://vercel.com/)
-   **Icons:** (If any, e.g., FontAwesome, Lucide)

## 📂 Project Structure

The project is organized into a clean, component-based structure for better maintainability and separation of concerns.

```
/
├── src/
│   ├── lib/
│   │   ├── components/       # Reusable Svelte components
│   │   │   ├── About.svelte
│   │   │   ├── Contact.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Projects.svelte
│   │   │   └── Skills.svelte
│   │   ├── arrays/             # Centralized data (projects, skills)
│   │   │   ├── techstack.js
│   │   │   └── projects.js
│   │   └── images/           # Static images like avatar
│   └── routes/
│   │   ├── +layout.svelte    # Layout (header + footer)
│       └── +page.svelte      # Main entry point, assembles the components
```

## 🛠️ Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://npmjs.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/andrinoff/smira.git
    cd smira
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173`. The app will automatically reload if you change any of the source files.

### Building for Production

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## 🌐 Deployment

This project is optimized for deployment on [Github Pages](https://github.com/). Simply push to master of the repository, and it will be deployed automatically on every push to the `master` branch.

The contact form relies on a Vercel Serverless Function located at `https://emails.andrinoff.com/api/smira`. You will need to set up your own serverless function to handle form submissions. Example [andrinoff/emails](https://github.com/andrinoff/emails)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

Drew Smirnoff - [@andrinoff](https://twitter.com/AndrinoffDev) - me@andrinoff.com

Project Link: [https://github.com/andrinoff/smira](https://github.com/andrinoff/smira)
