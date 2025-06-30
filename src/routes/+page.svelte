<!-- src/routes/+page.svelte -->
<svelte:head>
    <title>Andrey Smirnov - Developer Portfolio</title>
    <meta
        name="description"
        content="The personal portfolio for Andrey Smirnov, a full-stack developer and creative technologist."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="hero-bg">
    <!-- Hero Section -->
    <section id="hero" class="pt-32 pb-20 md:pt-48 md:pb-32 text-center">
        §
        <div class="container mx-auto px-6">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
                Andrey Smirnov
            </h1>
            <p class="mt-4 text-lg md:text-2xl text-indigo-300 font-light">
                Software Engineer
            </p>
            <p class="mt-6 max-w-2xl mx-auto text-gray-400">
                Currently employed at
                <a href="https://www.siderolabs.com/">Sidero Labs</a> <br />
                And working on <a href="www.talos.dev">Talos</a>
            </p>
            <div class="mt-10 flex justify-center gap-4 flex-wrap">
                <a
                    href="#projects"
                    class="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                    >View My Work</a
                >
                <a
                    href="#contact"
                    class="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                    >Get In Touch</a
                >
            </div>
        </div>
    </section>
</div>

<!-- About Section -->
<section id="about" class="py-20 md:py-32 bg-gray-900">
    <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                About Me
            </h2>
            <div class="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
            <p class="text-lg text-gray-400 leading-relaxed">
                Hello! I'm Andrey, a developer based in Tbilisi, Georgia. I
                enjoy hiking, photography, and teaching.
            </p>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section
    id="projects"
    class="py-20 md:py-32 bg-gray-800/50 flex flex-row justify-center"
>
    <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Featured Projects
        </h2>
        <div class="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project Card 1 -->
            <div
                class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
                <img
                    src="https://www.aptly.info/img/1.png"
                    alt="Project One Thumbnail"
                    class="w-full h-56 object-cover"
                />
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white mb-2">Aptly</h3>
                    <p class="text-gray-400 mb-4">
                        Debian repository management tool.
                    </p>
                    <div class="flex gap-2 flex-wrap mb-4">
                        <span
                            class="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                            >Go</span
                        >
                        <span
                            class="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                            >Python</span
                        >
                        <span
                            class="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                            >Shell</span
                        >
                    </div>
                    <a
                        href="https://github.com/aptly-dev/aptly"
                        class="text-indigo-400 hover:text-indigo-300 font-semibold"
                        >View Details &rarr;</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-20 md:py-32 bg-gray-900">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            My Tech Stack
        </h2>
        <div class="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
        <div
            class="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center"
        >
            <!-- Skill Item -->
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path
                        d="M12 2L1 9l11 7 11-7L12 2zm0 18.5L1 13.5v2l11 7 11-7v-2L12 20.5z"
                    /></svg
                >
                <span class="font-semibold">JavaScript (ES6+)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path
                        d="M22.2 12c0-5.5-4.5-10-10-10S2.2 6.5 2.2 12s4.5 10 10 10 10-4.5 10-10zm-10 8.2c-4.5 0-8.2-3.7-8.2-8.2S7.7 3.8 12.2 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2zM11 10.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.4 0c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.4 0c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1z"
                    /></svg
                >
                <span class="font-semibold">Svelte / SvelteKit</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path
                        d="M12 15.5c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
                    /><path
                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                    /><path
                        d="M12 12.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"
                    /></svg
                >
                <span class="font-semibold">React / Next.js</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path d="M7 2v20h10V2H7zm8 18H9V4h6v16z" /></svg
                >
                <span class="font-semibold">Node.js / Express</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path
                        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 16H9v-6h2v6zm2 0h-2v-6h2v6zm4 0h-2v-6h2v6z"
                    /></svg
                >
                <span class="font-semibold">SQL & NoSQL DBs</span>
            </div>
            <div class="flex flex-col items-center gap-2">
                <svg
                    class="w-16 h-16 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    ><path d="M20 18H4V6h16v12zM6 8v8h12V8H6z" /></svg
                >
                <span class="font-semibold">Docker & CI/CD</span>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 md:py-32 bg-gray-800/50">
    <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                Get In Touch
            </h2>
            <div class="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
            <p class="text-lg text-gray-400 leading-relaxed mb-12">
                Have a project in mind or just want to say hello? My inbox is
                always open.
            </p>
            <form class="text-left">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    rows="6"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
                ></textarea>
                <div class="text-center">
                    <button
                        type="submit"
                        class="bg-indigo-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<style>
    .hero-bg {
        background-color: #1a1a1a;
        background-image: radial-gradient(
                circle at 15% 50%,
                rgba(120, 113, 224, 0.1),
                transparent 30%
            ),
            radial-gradient(
                circle at 85% 30%,
                rgba(60, 150, 200, 0.1),
                transparent 30%
            );
    }
</style>
