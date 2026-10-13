import type { CollectionEntry } from 'astro:content';
import { formatDateDot } from './date';
import { urlize } from './slug';

export function postRow(post: CollectionEntry<'posts'>, format = formatDateDot) {
  return {
    href: `/posts/${post.id}/`,
    label: post.data.showDate !== false ? format(post.data.date) : undefined,
    title: post.data.title,
    categories: (post.data.categories ?? []).map(urlize).join(' '),
  };
}
