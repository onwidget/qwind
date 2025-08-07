import type { Post } from "~/types";

/**
 * Get related posts for a given slug
 * @param allPosts - Array of all available posts
 * @param currentSlug - Slug of the current post to exclude
 * @param limit - Maximum number of suggestions to return (default: 3)
 */
export const getRelatedPosts = (
  allPosts: Post[], 
  currentSlug: string, 
  limit = 3
) => {
  // Filter out current post and any drafts
  const availablePosts = allPosts.filter(post => 
    !post.draft && 
    post.slug !== currentSlug
  );

  // Simple shuffle algorithm
  const shuffled = [...availablePosts].sort(() => 0.5 - Math.random());

  // Return limited results with just needed fields
  return shuffled.slice(0, limit).map(post => ({
    name: post.title,
    url: `/blog/${post.slug}/`,
    excerpt: post.excerpt,
    image: post.image,
    publishDate: post.publishDate
  }));
};

/**
 * Get latest posts (alternative suggestion method)
 * Useful if you want to show newest content instead of random
 */
export const getLatestPosts = (
  allPosts: Post[],
  currentSlug: string,
  limit = 3
) => {
  return allPosts
    .filter(post => !post.draft && post.slug !== currentSlug)
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
    .slice(0, limit)
    .map(post => ({
      name: post.title,
      url: `/blog/${post.slug}/`,
      excerpt: post.excerpt,
      image: post.image,
      publishDate: post.publishDate
    }));
};