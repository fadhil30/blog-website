import * as contentful from "contentful";

interface ContentfulImage {
  fields: { file: { url: string } };
}
export interface Post {
  fields: {
    authorImage: ContentfulImage;
    thumbnailImage: ContentfulImage;
    title: string;
    slug: string;
    date: string;
    author: string;
    description: string;
    categories: { fields: {
      slug: string; title: string 
} }[];
  };
}

interface Category {
  fields: {
    categoryImage: ContentfulImage;
    title: string;
    slug: string;
    description: string;
  };
}

interface SinglePost {
  items: [
    {
      fields: {
        title: string;
        slug: string;
        date: string;
        author: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content: any;
        description: string;
        featuredImage: ContentfulImage;
        authorImage: ContentfulImage;
      };
    },
  ];
}

const client = contentful.createClient({
  space: "xi790hf9mml3",
  environment: "master",
  accessToken: "B1clAu02__fWaYpVJ4_FNz1Pt-jk2oXCz3jbb0oo1YA",
});

export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllBlogPost({
  field_slug,
  field_categories,
}: {
  field_slug?: string;
  field_categories?: string;
}) {
  try {
    const data = (await client.getEntries({
      content_type: "blogPost",
      "fields.slug": field_slug,
      "fields.categories": field_categories,
    })) as unknown as { items: [] };
    return data.items.map((post: Post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }
      let authorImageUrl = post?.fields?.authorImage?.fields?.file.url;

      if (!authorImageUrl) {
        authorImageUrl =
          "//media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
      }
      return {
        title: post.fields.title,
        slug: post.fields.slug,
        date: post.fields.date,
        author: post.fields.author,
        authorImage: `https:${authorImageUrl}`,
        description: post.fields.description,
        thumbnailImage: `https:${thumbnailUrl}`,
        categories: post.fields.categories,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleBlogPost(slug: string) {
  try {
    const data = (await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    })) as unknown as SinglePost;

    let featuredImageUrl = data.items[0].fields.featuredImage?.fields?.file.url;

    if (!featuredImageUrl) {
      featuredImageUrl =
        "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
    }
    let authorImageUrl = data.items[0].fields.authorImage?.fields?.file.url;

    if (!authorImageUrl) {
      authorImageUrl =
        "//media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
    }

    return {
      title: data.items[0].fields.title,
      slug: data.items[0].fields.slug,
      date: data.items[0].fields.date,
      author: data.items[0].fields.author,
      content: data.items[0].fields.content,
      authorImage: `https:${authorImageUrl}`,
      featuredImage: `https:${featuredImageUrl}`,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getLatestPost() {
  try {
    const data = (await client.getEntries({
      content_type: "blogPost",
    })) as unknown as SinglePost;

    let featuredImageUrl = data.items[0].fields.featuredImage?.fields.file.url;

    if (!featuredImageUrl) {
      featuredImageUrl =
        "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
    }

    return {
      title: data.items[0].fields.title,
      slug: data.items[0].fields.slug,
      date: data.items[0].fields.date,
      author: data.items[0].fields.author,
      description: data.items[0].fields.description,
      featuredImage: `https:${featuredImageUrl}`,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function getTrendingPost(limit = Infinity) {
  try {
    const data = await client.getEntries({ content_type: "blogPost" });

    return data.items
      .map((post) => {
        return {
          title: post.fields.title,
          slug: post.fields.slug,
          date: post.fields.date,
          author: post.fields.author,
        };
      })
      .slice(0, limit);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getNewTechnologyPost() {
  try {
    const data = (await client.getEntries({
      content_type: "blogPost",
    })) as unknown as { items: [] };
    return data.items.map((post: Post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }
      let authorImageUrl = post?.fields?.authorImage?.fields?.file.url;

      if (!authorImageUrl) {
        authorImageUrl =
          "//media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        date: post.fields.date,
        author: post.fields.author,
        authorImage: `https:${authorImageUrl}`,
        thumbnailImage: `https:${thumbnailUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getCategories() {
  try {
    const data = (await client.getEntries({
      content_type: "categories",
    })) as unknown as { items: [] };

    return data.items.map((post: Category) => {
      let categoryUrl = post?.fields?.categoryImage?.fields?.file.url;

      if (!categoryUrl) {
        categoryUrl =
          "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        description: post.fields.description,
        categoryImage: `https:${categoryUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function searchPostByTitle(keyword: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.title[match]": keyword,
    });
    return res.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
