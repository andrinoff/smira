<script>
    import { fly, fade } from "svelte/transition";
    import image from "$lib/images/avatar.jpg";
</script>

<section
    id="hero"
    class="relative overflow-hidden bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-900 py-20 text-center md:py-32"
>
    <div class="container mx-auto px-6">
        <div class="flex flex-col items-center">
            <div in:fade={{ delay: 200, duration: 600 }}>
                <img src={image} class="avatar" alt="avatar" />
            </div>

            <h1
                in:fly={{ y: 50, duration: 500, delay: 300 }}
                class="mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
            >
                Andrey Smirnov
            </h1>

            <p
                in:fly={{ y: 50, duration: 500, delay: 400 }}
                class="mt-4 text-lg font-light text-indigo-300 md:text-2xl"
            >
                Software Engineer
            </p>

            <p
                in:fly={{ y: 50, duration: 500, delay: 500 }}
                class="mt-6 max-w-2xl text-center text-gray-400"
            >
                Currently employed at
                <a href="https://www.siderolabs.com/" class="link"
                    >Sidero Labs</a
                >
                and working on
                <a href="https://www.talos.dev" class="link">Talos</a>
            </p>
        </div>

        <div
            in:fade={{ delay: 600, duration: 800 }}
            class="mt-10 flex flex-wrap justify-center gap-4"
        >
            <a
                href="#projects"
                class="transform rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-2xl"
            >
                View My Work
            </a>
            <a
                href="#contact"
                class="transform rounded-lg bg-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-600 hover:shadow-2xl"
            >
                Get In Touch
            </a>
        </div>
    </div>
</section>

<style>
    .avatar {
        width: 140px; /* Slightly larger for more impact */
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        /* A slightly more subtle border can look cleaner */
        border: 4px solid #2d3748; /* Corresponds to Tailwind's gray-800 */
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease-in-out;
    }

    .avatar:hover {
        transform: scale(1.05) rotate(2deg); /* A slightly more subtle rotation */
    }

    /* A more modern link style with a transition */
    .link {
        color: #a3bffa; /* A lighter indigo for better contrast */
        font-weight: 500;
        text-decoration: none;
        background-image: linear-gradient(to right, #818cf8, #818cf8);
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: 0% 2px; /* Start with no underline */
        transition:
            background-size 0.3s ease-in-out,
            color 0.2s ease;
    }

    .link:hover {
        color: #c7d2fe; /* Lighter on hover */
        background-size: 100% 2px; /* Animate the underline in */
    }
</style>
