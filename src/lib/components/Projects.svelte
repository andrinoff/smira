<script>
    import projects from "$lib/arrays/projects.js";
</script>

<section
    id="projects"
    class="py-20 md:py-32 bg-gray-900 flex flex-row justify-center"
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
                                >
                                    {stack}
                                </span>
                            {/each}
                        </div>
                        <a
                            href={project.Link}
                            class="text-indigo-400 hover:text-indigo-300 font-semibold"
                        >
                            View Details &rarr;
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
