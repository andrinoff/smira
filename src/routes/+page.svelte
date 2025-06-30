<script>
    import Techstack from "$lib/components/techstack.svelte";
    import projects from "$lib/arrays/projects.js";
</script>

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
        <div class="container mx-auto px-6">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
                Andrey Smirnov
            </h1>
            <p class="mt-4 text-lg md:text-2xl text-indigo-300 font-light">
                Software Engineer
            </p>
            <p class="mt-6 max-w-2xl mx-auto text-gray-400">
                Currently employed at
                <a href="https://www.siderolabs.com/" class="link"
                    >Sidero Labs</a
                > <br />
                And working on <a href="www.talos.dev" class="link">Talos</a>
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
            {#each projects as project}
                <div
                    class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                >
                    <img
                        src={project.Image}
                        alt="{project.Name} Thumbnail"
                        class="w-full h-56 object-cover"
                    />
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">
                            {project.Name}
                        </h3>
                        <p class="text-gray-400 mb-4">
                            {project.Description}
                        </p>
                        <div class="flex gap-2 flex-wrap mb-4">
                            {#each project.Stack as stack}
                                <span
                                    class="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                                    >{stack}</span
                                >
                            {/each}
                        </div>
                        <a
                            href={project.Link}
                            class="text-indigo-400 hover:text-indigo-300 font-semibold"
                            >View Details &rarr;</a
                        >
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-20 md:py-32 bg-gray-900">
    <div class="container mx-auto px-6">
        <div class="flex flex-row justify-center gap-20">
            <Techstack></Techstack>
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
    .link {
        @apply underline-offset-2 underline;
    }

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
