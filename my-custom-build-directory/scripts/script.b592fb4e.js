import { g as createVNode, s as spreadAttributes, F as Fragment } from './script.9274df64.js';
import { $ as $$MarkdownPostLayout } from './script.753db51f.js';
import 'html-escaper';
/* empty css                 *//* empty css                 *//* empty css                 *//* empty css                 *//* empty css                 */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>日本語 After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Thumbnail of Astro arcs,"},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/content/blog/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\n日本語 After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\n";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
