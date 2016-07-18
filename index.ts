export * from './lib/v2/parent.ts'
export * from './lib/v2/posts.ts'
import wpApiPosts from './lib/v2/posts.ts'
import {Type} from 'angular2/src/facade/lang';

export const WP_API_PROVIDERS: Type[] = [
    wpApiPosts
]