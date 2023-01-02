import fs from "fs";
import matter from "gray-matter";

const BLOG_DIR = "src/content/blog";

const load = () => {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(".md", "");
        return await findPostBySlug(slug);
      })
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );

  return posts;
};

let _posts;

// Ensure only the minimal needed data is exposed
// fields.forEach((field) => {
//   if (field === 'slug') {
//     items[field] = realSlug
//   }
//   if (field === 'content') {
//     items[field] = content
//   }

//   if (typeof data[field] !== 'undefined') {
//     items[field] = data[field]
//   }
// })

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count, page } = {}) => {
  const _count = count || 4;
  const _page = page || 1;
  const posts = await fetchPosts();

  return posts
    ? posts.slice((_page - 1) * _count, (_page - 1) * _count + _count)
    : [];
};

/** */
export const findPostBySlug = async (slug) => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(BLOG_DIR + `/${slug}.md`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {
    /* empty */
  }

  return null;
};

/** */
export const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r, id) {
    posts.some(function (post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
