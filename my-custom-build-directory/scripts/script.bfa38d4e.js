const id = "post-4.md";
						const collection = "blog";
						const slug = "post-4";
						const body = "\n日本語 This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.\n";
						const data = {layout:"..\u002F..\u002Flayouts\u002FMarkdownPostLayout.astro",title:"My Fourth Blog Post",author:"Astro Learner",description:"This post will show up on its own!",image:{url:"https:\u002F\u002Fdocs.astro.build\u002Fdefault-og-image.png",alt:"The word “astro” against an illustration of planets and stars."},pubDate:new Date(1659916800000),tags:["astro","successes"]};
						const _internal = {
							filePath: "/Users/yamazaki/Documents/sandbox/tutorial-astro/src/content/blog/post-4.md",
							rawData: "\nlayout: ../../layouts/MarkdownPostLayout.astro\ntitle: My Fourth Blog Post\nauthor: Astro Learner\ndescription: \"This post will show up on its own!\"\nimage:\n  url: \"https://docs.astro.build/default-og-image.png\"\n  alt: \"The word “astro” against an illustration of planets and stars.\"\npubDate: 2022-08-08\ntags: [\"astro\", \"successes\"]",
						};

export { _internal, body, collection, data, id, slug };
