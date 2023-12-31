import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOG_FOLDER = path.join(process.cwd(), 'blog');

export async function getPostList(): Promise<Post[]> {
  const fileNameList = fs.readdirSync(BLOG_FOLDER);

  const postList: Post[] = [];
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // console.log(fileName, '\n', fileContent);
    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: '<!-- truncate-->',
    });
    postList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      thumbnailUrl: data.image,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: new Date().getTime().toString(),
      description: excerpt as string,
      mdContent: content,
      // htmlContent: data.htmlContent,
    });
  }
  return postList;
}
