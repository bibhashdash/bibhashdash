export interface BlogData {
  id: number,
  title: string,
  body: string,
  photoUrl: string,
  tags: Array<string>,
}

export const blogData: Array<BlogData> = [];