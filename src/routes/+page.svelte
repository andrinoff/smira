<script>
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Resume from "$lib/components/Resume.svelte"; // Import the new component
    import Contact from "$lib/components/Contact.svelte";
</script>

<svelte:head>
    <title>Andrey Smirnov</title>
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
    <Hero />
</div>

<About />
<Projects />
<Skills />
<Resume />
<!-- Add the new component here -->
<Contact />

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
