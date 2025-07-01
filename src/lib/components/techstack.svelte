<script>
    // Import the list of technologies from an external file.
    import TechstackItems from "$lib/arrays/techstack.js";

    // Duplicate the items to create a seamless, infinite scrolling effect.
    // The animation will scroll through the first set, and by the time it ends,
    // the second set is in place, creating a perfect loop.
    const scrollingItems = [...TechstackItems, ...TechstackItems];
</script>

<div class="tech-stack-container">
    <!-- This title can be customized or removed as needed -->
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        My Tech Stack
    </h2>
    <div class="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>

    <!--
        The scroller container has a mask to fade the items at the edges.
        On hover, the animation on the child .scroller-content is paused via CSS.
    -->
    <div class="scroller-container">
        <div
            class="scroller-content"
            style="--item-count: {TechstackItems.length}"
        >
            {#each scrollingItems as item}
                <div class="tech-item" title={item.name}>
                    <img
                        src="https://cdn.simpleicons.org/{item.image}/white"
                        alt="{item.name} icon"
                        class="tech-icon"
                    />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .tech-stack-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
    }

    .scroller-container {
        width: 100%;
        max-width: 90vw; /* Limit the width on larger screens */
        overflow: hidden;
        position: relative;
        /* Add padding to create a buffer for items to scale into without being clipped. */
        padding: 1rem 1.5rem;
        /* Mask to fade out the edges for a cleaner look */
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
        mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
        );
    }

    .scroller-content {
        display: flex;
        flex-wrap: nowrap;
        gap: 2rem; /* Space between items */
        /* Apply the scrolling animation */
        animation: scroll linear infinite;
        animation-duration: calc(
            var(--item-count) * 2.5s
        ); /* Dynamic duration */
    }

    /* Pause the animation when the user hovers over the container */
    .scroller-container:hover .scroller-content {
        animation-play-state: paused;
    }

    .tech-item {
        flex-shrink: 0; /* Prevent items from shrinking */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        width: 120px;
        background-color: #161b22;
        border: 1px solid #30363d;
        border-radius: 16px;
        transition: transform 0.3s ease; /* Smooth transition for scaling */
        cursor: pointer;
    }

    /* Increase the size of the item on hover */
    .tech-item:hover {
        transform: scale(1.2);
    }

    .tech-icon {
        width: 60px;
        height: 60px;
        opacity: 0.9;
        pointer-events: none; /* Prevent icon from capturing hover events */
    }

    /* Define the keyframes for the horizontal scroll animation */
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            /* Move the content to the left by the width of the first half of the items.
                Each item is 120px wide + 2rem (32px) gap = 152px total width.
            */
            transform: translateX(calc(-152px * var(--item-count)));
        }
    }

    @media (max-width: 768px) {
        .tech-item {
            height: 100px;
            width: 100px;
        }
        .tech-icon {
            width: 50px;
            height: 50px;
        }
        @keyframes scroll {
            to {
                /* 100px width + 32px gap */
                transform: translateX(calc(-132px * var(--item-count)));
            }
        }
    }
</style>
