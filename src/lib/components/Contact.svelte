<script>
    let name = "";
    let email = "";
    let content = "";
    let isSubmitting = false;
    let formMessage = "";
    let messageIsError = false;

    async function handleSubmit() {
        isSubmitting = true;
        formMessage = "";
        messageIsError = false;

        try {
            const endpoint = "https://emails.andrinoff.com/api/smira";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, content }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong.");
            }

            formMessage =
                result.message || "Your message has been sent successfully!";
            messageIsError = false;
            name = "";
            email = "";
            content = "";
        } catch (error) {
            formMessage = error.message;
            messageIsError = true;
            console.error("Error submitting form:", error);
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="contact" class="py-20 md:py-32 bg-gray-900">
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
            <form class="text-left" on:submit|preventDefault={handleSubmit}>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        bind:value={name}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        bind:value={email}
                        required
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    rows="6"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
                    bind:value={content}
                    required
                ></textarea>
                <div class="text-center">
                    <button
                        type="submit"
                        class="bg-indigo-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
                {#if formMessage}
                    <p
                        class="mt-4 text-center {messageIsError
                            ? 'text-red-400'
                            : 'text-green-400'}"
                    >
                        {formMessage}
                    </p>
                {/if}
            </form>
        </div>
    </div>
</section>
