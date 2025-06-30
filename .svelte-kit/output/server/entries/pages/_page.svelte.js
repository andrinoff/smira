import { e as current_component, f as ensure_array_like, h as stringify, c as pop, p as push, i as head } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const TechstackItems = [
  { image: "go", name: "Go" },
  { image: "cplusplus", name: "C++" },
  { image: "python", name: "Python" },
  { image: "docker", name: "Docker" },
  { image: "kubernetes", name: "Kubernetes" },
  { image: "git", name: "Git" },
  { image: "c", name: "C" },
  { image: "php", name: "PHP" }
];
function Techstack($$payload, $$props) {
  push();
  const NUM_COLUMNS = 4;
  let columns = [];
  for (let i = 0; i < NUM_COLUMNS; i++) {
    const shuffled = [...TechstackItems].sort(() => 0.5 - Math.random());
    columns.push([...shuffled, ...shuffled, ...shuffled]);
  }
  let animationFrameIds = [];
  onDestroy(() => {
    animationFrameIds.forEach((id) => cancelAnimationFrame(id));
  });
  const each_array = ensure_array_like(columns);
  $$payload.out += `<div class="tech-stack-container svelte-1ll9n94"><h1 class="section-title svelte-1ll9n94">My Tech Stack</h1> <div class="scroller-waterfall-container svelte-1ll9n94"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let columnItems = each_array[i];
    const each_array_1 = ensure_array_like(columnItems);
    $$payload.out += `<div class="scroller-column svelte-1ll9n94"><div class="scroller-content svelte-1ll9n94"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let item = each_array_1[$$index];
      $$payload.out += `<div class="tech-item svelte-1ll9n94"${attr("title", item.name)}><img${attr("src", `https://cdn.simpleicons.org/${stringify(item.image)}/white`)}${attr("alt", `${stringify(item.name)} icon`)} class="tech-icon svelte-1ll9n94"/></div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
let projects = [
  {
    Image: "https://www.aptly.info/img/1.png",
    Name: "Aptly",
    Description: "Swiss army knife for Debian repository management",
    Link: "https://www.aptly.info/",
    Stack: ["Go", "Shell", "Python"]
  }
];
function _page($$payload) {
  const each_array = ensure_array_like(projects);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Andrey Smirnov - Developer Portfolio</title>`;
    $$payload2.out += `<meta name="description" content="The personal portfolio for Andrey Smirnov, a full-stack developer and creative technologist."/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>`;
  });
  $$payload.out += `<div class="hero-bg svelte-1yqxh5p"><section id="hero" class="pt-32 pb-20 md:pt-48 md:pb-32 text-center"><div class="container mx-auto px-6"><h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">Andrey Smirnov</h1> <p class="mt-4 text-lg md:text-2xl text-indigo-300 font-light">Software Engineer</p> <p class="mt-6 max-w-2xl mx-auto text-gray-400">Currently employed at <a href="https://www.siderolabs.com/" class="link svelte-1yqxh5p">Sidero Labs</a> <br/> And working on <a href="www.talos.dev" class="link svelte-1yqxh5p">Talos</a></p> <div class="mt-10 flex justify-center gap-4 flex-wrap"><a href="#projects" class="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">View My Work</a> <a href="#contact" class="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">Get In Touch</a></div></div></section></div> <section id="about" class="py-20 md:py-32 bg-gray-900"><div class="container mx-auto px-6"><div class="max-w-4xl mx-auto text-center"><h2 class="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2> <div class="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div> <p class="text-lg text-gray-400 leading-relaxed">Hello! I'm Andrey, a developer based in Tbilisi, Georgia. I
                enjoy hiking, photography, and teaching.</p></div></div></section> <section id="projects" class="py-20 md:py-32 bg-gray-800/50 flex flex-row justify-center"><div class="container mx-auto px-6"><h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-6">Featured Projects</h2> <div class="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.Stack);
    $$payload.out += `<div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"><img${attr("src", project.Image)}${attr("alt", `${stringify(project.Name)} Thumbnail`)} class="w-full h-56 object-cover"/> <div class="p-6"><h3 class="text-xl font-bold text-white mb-2">${escape_html(project.Name)}</h3> <p class="text-gray-400 mb-4">${escape_html(project.Description)}</p> <div class="flex gap-2 flex-wrap mb-4"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let stack = each_array_1[$$index];
      $$payload.out += `<span class="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">${escape_html(stack)}</span>`;
    }
    $$payload.out += `<!--]--></div> <a${attr("href", project.Link)} class="text-indigo-400 hover:text-indigo-300 font-semibold">View Details →</a></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section id="skills" class="py-20 md:py-32 bg-gray-900"><div class="container mx-auto px-6"><div class="flex flex-row justify-center gap-20">`;
  Techstack($$payload);
  $$payload.out += `<!----></div></div></section> <section id="contact" class="py-20 md:py-32 bg-gray-800/50"><div class="container mx-auto px-6"><div class="max-w-3xl mx-auto text-center"><h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2> <div class="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div> <p class="text-lg text-gray-400 leading-relaxed mb-12">Have a project in mind or just want to say hello? My inbox is
                always open.</p> <form class="text-left"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"><input type="text" placeholder="Your Name" class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/> <input type="email" placeholder="Your Email" class="bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/></div> <textarea placeholder="Your Message" rows="6" class="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"></textarea> <div class="text-center"><button type="submit" class="bg-indigo-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">Send Message</button></div></form></div></div></section>`;
}
export {
  _page as default
};
