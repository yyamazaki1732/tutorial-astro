import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderSlot, f as renderHead, s as spreadAttributes, g as createVNode, F as Fragment, h as defineStyleVars, i as createCollectionToGlobResultMap, j as createGetCollection } from './script.9274df64.js';
/* empty css                 *//* empty css                 *//* empty css                 *//* empty css                 *//* empty css                 */
const $$Astro$j = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$3;
  const isProduction = process.env.NODE_ENV === "production" ? true : false;
  return renderTemplate`${isProduction == true ? renderTemplate`<meta http-equiv="refresh" content="0; url=/test/en/">` : renderTemplate`<meta http-equiv="refresh" content="0; url=/en/">`}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/index.astro");

const $$file$b = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/index.astro";
const $$url$b = "/test";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hamburger">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
</div>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/Hamburger.astro");

const $$Astro$h = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<div class="nav-links">
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>
</div>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/Navigation.astro");

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header>
    <nav>
        ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
        ${renderComponent($$result, "Navigation", $$Navigation, {})}
    </nav>
</header>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/Header.astro");

const $$Astro$f = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  const platform = "github";
  const username = "withastro";
  return renderTemplate`${maybeRenderHead($$result)}<footer>
  <p>
    Learn more about my projects on <a${addAttribute(`http://www${platform}.com/${username}`, "href")}>${platform}</a>
  </p>
  ${renderSlot($$result, $$slots["default"])}
</footer>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/Footer.astro");

const languages = {
  en: "English",
  ja: "日本語",
  fr: "Français"
};
const defaultLang = "en";
const ui = {
  en: {
    "lang.top": "en",
    "title.top": "Home Page",
    "heading.top": "My awesome blog subtitle",
    "common.top": "common area"
  },
  ja: {
    "lang.top": "ja",
    "title.top": "ホームページ",
    "heading.top": "私のブログ"
  },
  fr: {
    "lang.top": "fr",
    "title.top": "hōmupēji",
    "heading.top": "Mon blog génial sous-titre"
  }
};

const $$Astro$e = createAstro();
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  return renderTemplate`${maybeRenderHead($$result)}<div class="languagePiker">
  <h2 class="lang-title">languagePiker</h2>
  <ul class="lang-list">
    ${Object.entries(languages).map(([lang, label]) => renderTemplate`<li>
          <a${addAttribute(`/${lang}/`, "href")}>${label}</a>
        </li>`)}
  </ul>
</div>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/LanguagePicker.astro");

function getLangFromUrl(url) {
  const segments = url.pathname.split("/");
  const lang = segments.find((seg) => seg in ui);
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const $$Astro$d = createAstro();
const $$Baselayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Baselayout;
  const { pageTitle } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const langtype = ["en", "ja", "fr", "x-default"];
  return renderTemplate`<html${addAttribute(lang, "lang")}>
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    ${langtype.map((value) => {
    renderTemplate`<link rel="alternate"${addAttribute(value, "hreflang")}${addAttribute(`https://tutorial-of-astro.netlify.app/${lang}/`, "href")}>`;
  })}
  ${renderHead($$result)}</head><img src="/img/pattern.png" alt="">
  <title>${pageTitle}</title>

  
    ${renderComponent($$result, "Header", $$Header, {})}
    <main>
      <h1>${pageTitle}</h1>
      ${renderSlot($$result, $$slots["default"])}
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {}, { "default": ($$result2) => renderTemplate`
      ${renderComponent($$result2, "LanguagePicker", $$LanguagePicker, {})}
    ` })}
    
  

</html>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/layouts/Baselayout.astro");

const $$Astro$c = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>Written by ${frontmatter.author}</p>
  ${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/layouts/MarkdownPostLayout.astro");

const images$3 = {
					
				};

				function updateImageReferences$3(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$3[imagePath].src, ...images$3[imagePath].attributes})
					);
				}

				const html$3 = updateImageReferences$3("<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter$3 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"yusuke yamazaki","image":{"url":"https://docs.astro.build/assets/full-logo-light.png","alt":"The full Astro logo."},"tags":["astro","blogging","learning in public"]};
				const file$3 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/posts/post-1.md";
				const url$3 = "/test/posts/post-1";
				function rawContent$3() {
					return "\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}
				async function Content$3() {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;
					const contentFragment = createVNode(Fragment, { 'set:html': html$3 });
					return createVNode($$MarkdownPostLayout, {
									file: file$3,
									url: url$3,
									content,
									frontmatter: content,
									headings: getHeadings$3(),
									rawContent: rawContent$3,
									compiledContent: compiledContent$3,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$3[Symbol.for('astro.needsHeadRendering')] = false;

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  images: images$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const images$2 = {
					
				};

				function updateImageReferences$2(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$2[imagePath].src, ...images$2[imagePath].attributes})
					);
				}

				const html$2 = updateImageReferences$2("<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>");

				const frontmatter$2 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Thumbnail of Astro arcs,"},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file$2 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/posts/post-2.md";
				const url$2 = "/test/posts/post-2";
				function rawContent$2() {
					return "After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}
				async function Content$2() {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;
					const contentFragment = createVNode(Fragment, { 'set:html': html$2 });
					return createVNode($$MarkdownPostLayout, {
									file: file$2,
									url: url$2,
									content,
									frontmatter: content,
									headings: getHeadings$2(),
									rawContent: rawContent$2,
									compiledContent: compiledContent$2,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$2[Symbol.for('astro.needsHeadRendering')] = false;

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  images: images$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const images$1 = {
					
				};

				function updateImageReferences$1(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images$1[imagePath].src, ...images$1[imagePath].attributes})
					);
				}

				const html$1 = updateImageReferences$1("<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>");

				const frontmatter$1 = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"Thumbnail of Astro rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file$1 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/posts/post-3.md";
				const url$1 = "/test/posts/post-3";
				function rawContent$1() {
					return "It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}
				async function Content$1() {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;
					const contentFragment = createVNode(Fragment, { 'set:html': html$1 });
					return createVNode($$MarkdownPostLayout, {
									file: file$1,
									url: url$1,
									content,
									frontmatter: content,
									headings: getHeadings$1(),
									rawContent: rawContent$1,
									compiledContent: compiledContent$1,
									'server:root': true,
									children: contentFragment
								});
				}
				Content$1[Symbol.for('astro.needsHeadRendering')] = false;

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  images: images$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word “astro” against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/posts/post-4.md";
				const url = "/test/posts/post-4";
				function rawContent() {
					return "This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/components/BlogPost.astro");

const $$Astro$a = createAstro();
const Astro = $$Astro$a;
async function getStaticPaths$1() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => Promise.resolve().then(() => _page1),"../posts/post-2.md": () => Promise.resolve().then(() => _page2),"../posts/post-3.md": () => Promise.resolve().then(() => _page3),"../posts/post-4.md": () => Promise.resolve().then(() => _page4)}), () => "../posts/*.md");
  return [
    { params: { tag: "astro" }, props: { posts: allPosts } },
    { params: { tag: "successes" }, props: { posts: allPosts } },
    { params: { tag: "community" }, props: { posts: allPosts } },
    { params: { tag: "blogging" }, props: { posts: allPosts } },
    { params: { tag: "setbacks" }, props: { posts: allPosts } },
    { params: { tag: "learning in public" }, props: { posts: allPosts } }
  ];
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const filteredPosts = posts.filter(
    (post) => post.frontmatter.tags.includes(tag)
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>Posts tagged with ${tag}</p>
  <ul>
    ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}
  </ul>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/tags/[tag].astro");

const $$file$a = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/tags/[tag].astro";
const $$url$a = "/test/tags/[tag]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file$a,
  getStaticPaths: getStaticPaths$1,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": t("title.top") }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="settings-language">language : ${t("lang.top")}</div>
  <h2 class="heading">${t("heading.top")}</h2>
  <h3>${t("common.top")}</h3>
  <img${addAttribute(`${"/test/".slice(0, -1)}/img/favicon.svg`, "src")}>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/index.astro");

const $$file$9 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/index.astro";
const $$url$9 = "/test/en";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$About$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$About$2;
  const pageTitle = "About Me";
  const identity = {
    firstname: "Yusuke",
    country: "Japan",
    occupation: "Design Engineer",
    hobbies: ["manga", "anime", "youtube"]
  };
  const skills = ["HTML", "CSS", "Javascript", "SASS"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = 700;
  const fontSize = "24px";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, fontSize }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle, "class": "astro-EMK76MUO" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>${pageTitle}</h1>
  <h2 class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>英語　... and my new Astro site!</h2>

  <p class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p>

  <p class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p>

  <p class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>here are a few facts about me:</p>
  <ul class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>
    <li class="astro-EMK76MUO">My name is ${identity.firstname}</li>
    <li class="astro-EMK76MUO">I live in ${identity.country} and I work as a ${identity.occupation}.</li>
    ${identity.hobbies.length >= 2 && renderTemplate`<li class="astro-EMK76MUO">
          Two of my hobbies are : ${identity.hobbies[0]} and${" "}
          ${identity.hobbies[1]}
        </li>`}
  </ul>
  <p class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>My skills are:</p>
  <ul class="astro-EMK76MUO"${addAttribute($$definedVars, "style")}>
    ${skills.map((skill) => renderTemplate`<li class="skill astro-EMK76MUO">${skill}</li>`)}
  </ul>

  ${renderTemplate`<p class="astro-EMK76MUO">I am happy to be learning Astro.</p>`}${finished }${renderTemplate`<p class="astro-EMK76MUO">My goal is to finish this in 3 days.</p>` }` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/about.astro");

const $$file$8 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/about.astro";
const $$url$8 = "/test/en/about";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$2,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$Blog$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Blog$2;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/post-1.md": () => import('./script.7150081e.js'),"../../content/blog/post-2.md": () => import('./script.b592fb4e.js'),"../../content/blog/post-3.md": () => import('./script.d1012c89.js'),"../../content/blog/post-4.md": () => import('./script.2dc45c7b.js')}), () => "../../content/blog/*.md");
  const pageTitle = "Blog Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>英語　This is where I will post about my journey learning Astro.</p>
  <ul>
    ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}
  </ul>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/blog.astro");

const $$file$7 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/en/blog.astro";
const $$url$7 = "/test/en/blog";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog$2,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": t("title.top") }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="settings-language">language : ${t("lang.top")}</div>
  <h2 class="heading">${t("heading.top")}</h2>
  <h3>${t("common.top")}</h3>
  <img${addAttribute(`${"/test/".slice(0, -1)}/img/favicon.svg`, "src")}>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/index.astro");

const $$file$6 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/index.astro";
const $$url$6 = "/test/fr";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About$1;
  const pageTitle = "About Me";
  const identity = {
    firstname: "Yusuke",
    country: "Japan",
    occupation: "Design Engineer",
    hobbies: ["manga", "anime", "youtube"]
  };
  const skills = ["HTML", "CSS", "Javascript", "SASS"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = 700;
  const fontSize = "24px";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, fontSize }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle, "class": "astro-5GYV2KGQ" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>${pageTitle}</h1>
  <h2 class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>フランス　... and my new Astro site!</h2>

  <p class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p>

  <p class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p>

  <p class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>here are a few facts about me:</p>
  <ul class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>
    <li class="astro-5GYV2KGQ">My name is ${identity.firstname}</li>
    <li class="astro-5GYV2KGQ">I live in ${identity.country} and I work as a ${identity.occupation}.</li>
    ${identity.hobbies.length >= 2 && renderTemplate`<li class="astro-5GYV2KGQ">
          Two of my hobbies are : ${identity.hobbies[0]} and${" "}
          ${identity.hobbies[1]}
        </li>`}
  </ul>
  <p class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>My skills are:</p>
  <ul class="astro-5GYV2KGQ"${addAttribute($$definedVars, "style")}>
    ${skills.map((skill) => renderTemplate`<li class="skill astro-5GYV2KGQ">${skill}</li>`)}
  </ul>

  ${renderTemplate`<p class="astro-5GYV2KGQ">I am happy to be learning Astro.</p>`}${finished }${renderTemplate`<p class="astro-5GYV2KGQ">My goal is to finish this in 3 days.</p>` }` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/about.astro");

const $$file$5 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/about.astro";
const $$url$5 = "/test/fr/about";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$1,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Blog$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Blog$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/post-1.md": () => import('./script.7150081e.js'),"../../content/blog/post-2.md": () => import('./script.b592fb4e.js'),"../../content/blog/post-3.md": () => import('./script.d1012c89.js'),"../../content/blog/post-4.md": () => import('./script.2dc45c7b.js')}), () => "../../content/blog/*.md");
  const pageTitle = "Blog Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>フランス　This is where I will post about my journey learning Astro.</p>
  <ul>
    ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}
  </ul>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/blog.astro");

const $$file$4 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/fr/blog.astro";
const $$url$4 = "/test/fr/blog";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog$1,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": t("title.top") }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="settings-language">language : ${t("lang.top")}</div>
  <h2 class="heading">${t("heading.top")}</h2>
  <h3>${t("common.top")}</h3>
  <img${addAttribute(`${"/test/".slice(0, -1)}/img/favicon.svg`, "src")}>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/index.astro");

const $$file$3 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/index.astro";
const $$url$3 = "/test/ja";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstname: "Yusuke",
    country: "Japan",
    occupation: "Design Engineer",
    hobbies: ["manga", "anime", "youtube"]
  };
  const skills = ["HTML", "CSS", "Javascript", "SASS"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = 700;
  const fontSize = "24px";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, fontSize }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle, "class": "astro-F6TP6JMQ" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>${pageTitle}</h1>
  <h2 class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>日本語 ... and my new Astro site!</h2>

  <p class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p>

  <p class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p>

  <p class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>here are a few facts about me:</p>
  <ul class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>
    <li class="astro-F6TP6JMQ">My name is ${identity.firstname}</li>
    <li class="astro-F6TP6JMQ">I live in ${identity.country} and I work as a ${identity.occupation}.</li>
    ${identity.hobbies.length >= 2 && renderTemplate`<li class="astro-F6TP6JMQ">
          Two of my hobbies are : ${identity.hobbies[0]} and${" "}
          ${identity.hobbies[1]}
        </li>`}
  </ul>
  <p class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>My skills are:</p>
  <ul class="astro-F6TP6JMQ"${addAttribute($$definedVars, "style")}>
    ${skills.map((skill) => renderTemplate`<li class="skill astro-F6TP6JMQ">${skill}</li>`)}
  </ul>

  ${renderTemplate`<p class="astro-F6TP6JMQ">I am happy to be learning Astro.</p>`}${finished }${renderTemplate`<p class="astro-F6TP6JMQ">My goal is to finish this in 3 days.</p>` }` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/about.astro");

const $$file$2 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/about.astro";
const $$url$2 = "/test/ja/about";

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/post-1.md": () => import('./script.7150081e.js'),"../../content/blog/post-2.md": () => import('./script.b592fb4e.js'),"../../content/blog/post-3.md": () => import('./script.d1012c89.js'),"../../content/blog/post-4.md": () => import('./script.2dc45c7b.js')}), () => "../../content/blog/*.md");
  const pageTitle = "Blog Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Baselayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<p>日本語　This is where I will post about my journey learning Astro.</p>
  <ul>
    ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}
  </ul>
` })}`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/blog.astro");

const $$file$1 = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/ja/blog.astro";
const $$url$1 = "/test/ja/blog";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./script.0d8b6192.js'),"/src/content/blog/post-2.md": () => import('./script.7320ee49.js'),"/src/content/blog/post-3.md": () => import('./script.9f28468f.js'),"/src/content/blog/post-4.md": () => import('./script.bfa38d4e.js')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./script.d59f272d.js'),"/src/content/blog/post-2.md": () => import('./script.460256e6.js'),"/src/content/blog/post-3.md": () => import('./script.e29bd9cb.js'),"/src/content/blog/post-4.md": () => import('./script.3f4335d0.js')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const $$Astro = createAstro();
async function getStaticPaths() {
  const pages = await getCollection("blog");
  const paths = pages.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return { params: { lang, slug: slug.join("/") || void 0 }, props: page };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.params;
  const page = Astro2.props;
  await page.render();
  return renderTemplate`<!-- <h1>{page.data.title}</h1>
<p>by {page.data.author} • {formattedDate}</p> --><!-- <Content /> -->`;
}, "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/[lang]/blog/[...slug].astro");

const $$file = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/pages/[lang]/blog/[...slug].astro";
const $$url = "/test/[lang]/blog/[...slug]";

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, _page13 as m, _page14 as n, _page15 as o };
