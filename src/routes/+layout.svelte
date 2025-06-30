<!-- src/routes/+layout.svelte -->
<script>
    import "../app.css"; // Make sure to import your global styles
    let isMobileMenuOpen = false;

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function closeMobileMenu() {
        isMobileMenuOpen = false;
    }
</script>

<div class="bg-gray-900 text-gray-300 font-sans">
    <!-- Header -->
    <header
        class="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50"
    >
        <div
            class="container mx-auto px-6 py-4 flex justify-between items-center"
        >
            <a href="/" class="text-2xl font-bold text-white">Andrey Smirnov</a>
            <nav class="hidden md:flex space-x-8">
                <a
                    href="#about"
                    class="hover:text-indigo-400 transition-colors duration-300"
                    >About</a
                >
                <a
                    href="#projects"
                    class="hover:text-indigo-400 transition-colors duration-300"
                    >Projects</a
                >
                <a
                    href="#skills"
                    class="hover:text-indigo-400 transition-colors duration-300"
                    >Skills</a
                >
                <a
                    href="#contact"
                    class="hover:text-indigo-400 transition-colors duration-300"
                    >Contact</a
                >
            </nav>
            <button
                on:click={toggleMobileMenu}
                class="md:hidden text-white z-50"
            >
                {#if isMobileMenuOpen}
                    <!-- Close Icon -->
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path></svg
                    >
                {:else}
                    <!-- Menu Icon -->
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path></svg
                    >
                {/if}
            </button>
        </div>

        <!-- Mobile Menu -->
        {#if isMobileMenuOpen}
            <div class="fixed inset-0 bg-gray-900/95 pt-20 md:hidden">
                <nav class="flex flex-col items-center space-y-8">
                    <a
                        href="#about"
                        on:click={closeMobileMenu}
                        class="text-2xl hover:text-indigo-400 transition-colors duration-300"
                        >About</a
                    >
                    <a
                        href="#projects"
                        on:click={closeMobileMenu}
                        class="text-2xl hover:text-indigo-400 transition-colors duration-300"
                        >Projects</a
                    >
                    <a
                        href="#skills"
                        on:click={closeMobileMenu}
                        class="text-2xl hover:text-indigo-400 transition-colors duration-300"
                        >Skills</a
                    >
                    <a
                        href="#contact"
                        on:click={closeMobileMenu}
                        class="text-2xl hover:text-indigo-400 transition-colors duration-300"
                        >Contact</a
                    >
                </nav>
            </div>
        {/if}
    </header>

    <main>
        <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800">
        <div class="container mx-auto px-6 py-8 text-center text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} Andrey Smirnov. All rights reserved.
            </p>
            <p class="mt-2">
                Built by <a
                    class="underline underline-offset-2"
                    href="https://andrinoff.com">andrinoff</a
                >
            </p>
        </div>
    </footer>
</div>

<style>
    :global(body) {
        font-family: "Inter", sans-serif;
    }
    :global(html) {
        scroll-behavior: smooth;
    }
</style>
