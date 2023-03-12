import fs from "fs";
import matter from "gray-matter";

import type { Post } from "~/types";

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

let _posts: Post[];

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
export const fetchPosts = async (): Promise<Post[]> => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count, page }: { count?: number; page?: number } = {}): Promise<Post[]> => {
  const _count = count || 4;
  const _page = page || 1;
  const posts = await fetchPosts();

  return posts ? posts.slice((_page - 1) * _count, (_page - 1) * _count + _count) : [];
};

/** */
export const findPostBySlug = async (slug: string): Promise<Post | null> => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(BLOG_DIR + `/${slug}.md`, "utf-8");
    const { data, content } = matter(readFile);

    const {
      publishDate: rawPublishDate = new Date(),
      updateDate: rawUpdateDate,
      title,
      excerpt,
      image,
      tags = [],
      category,
      author,
      draft = false,
      metadata = {},
    } = data;

    const publishDate = new Date(rawPublishDate);
    const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

    return {
      id: slug,
      slug: slug,

      publishDate: publishDate,
      updateDate: updateDate,

      title: title,
      excerpt: excerpt,
      image: image,

      category: category,
      tags: tags,
      author: author,

      draft: draft,

      metadata,

      content
    };
  } catch (e) {
    /* empty */
  }

  return null;
};

/** */
export const findPostsByIds = async (ids: string[]) => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchPosts();

  return ids.reduce(function (r: Post[], id: string) {
    posts.some(function (post: Post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
