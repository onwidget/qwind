import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import type { Post } from "~/types";
import md from "markdown-it";
import { fetchPosts, findPostBySlug } from "~/utils/posts";
import { Suggestions } from "~/components/widgets/Suggestions";
import { getRelatedPosts } from "~/utils/suggestions";

export const useGetPostBySlug = routeLoader$(async ({ params, status }): Promise<Post | number> => {
  const post = await findPostBySlug(params.slug);
  if (!post) return status(404);
  return post;
});

export const useRelatedPosts = routeLoader$(async (requestEvent) => {
  const currentPost = await requestEvent.resolveValue(useGetPostBySlug);
  // Handle the case where currentPost is a status code
  if (typeof currentPost === 'number') {
    return [];
  }
  const allPosts = await fetchPosts();
  return getRelatedPosts(allPosts, currentPost.slug);
});

export default component$(() => {
  const postSignal = useGetPostBySlug();
  const relatedPosts = useRelatedPosts().value;

  // Handle the case where post is a status code
  if (typeof postSignal.value === 'number') {
    return <div>Post not found</div>;
  }

  const post = postSignal.value;
  

  return (
    <section class="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header class={post.image ? "text-center" : ""}>
          <p class="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={String(post.publishDate.getTime())}>
              {post.publishDate.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </p>
          <h1 class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <img
              src={post.image}
              class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.excerpt}
              loading="eager"
              width={900}
              height={480}
            />
          ) : (
            <div class="mx-auto max-w-3xl px-4 sm:px-6">
              <div class="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <div
          class="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={md({
            html: true,
          }).render(post.content)}
        />
        <Suggestions links={relatedPosts} title="Also Read" />
      </article>
    </section>
  );
});

// ... rest of your code remains the same ...

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const posts = await fetchPosts();

  return {
    params: posts.map(({ slug }) => ({ slug })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(useGetPostBySlug) as Post;

  return {
    title: `${post.title} — Desilifter`,
    meta: [
      {
        name: "description",
        content: post.excerpt,
      },
    ],
  };
};