export type PostType = {
  id: string;
  title: string;
  published_at: string;
  slug: string;
  description: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
};
