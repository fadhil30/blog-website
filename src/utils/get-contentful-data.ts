import * as contentful from "contentful";

const client = contentful.createClient({
  space: "xi790hf9mml3",
  environment: "master", // defaults to 'master' if not set
  accessToken: "B1clAu02__fWaYpVJ4_FNz1Pt-jk2oXCz3jbb0oo1YA",
});

export async function getAllEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllBlogPost() {
  try {
    const data = await client.getEntries({ content_type: "blogPost" });

    return data.items.map((post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }
      let authorImageUrl = post?.fields?.authorImage?.fields?.file.url;
      console.log(authorImageUrl);

      if (!authorImageUrl) {
        authorImageUrl =
          "https://media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        date: post.fields.date,
        author: post.fields.author,
        authorImage: `https:${authorImageUrl}`,
        description: post.fields.description,
        thumbnailImage: `https:${thumbnailUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleBlogPost(slug: string) {
  try {
    const data = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });

    let featuredImageUrl = data.items[0].fields.featuredImage?.fields?.file.url;

    if (!featuredImageUrl) {
      featuredImageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
    }
    let authorImageUrl = data.items[0].fields.authorImage?.fields?.file.url;
    console.log(authorImageUrl);

    if (!authorImageUrl) {
      authorImageUrl =
        "https://media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
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
    const data = await client.getEntries({
      content_type: "blogPost",
    });

    let featuredImageUrl = data.items[0].fields.featuredImage?.fields.file.url;

    if (!featuredImageUrl) {
      featuredImageUrl =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
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
  // Tambahkan parameter limit dengan default ke Infinity
  try {
    const data = await client.getEntries({ content_type: "blogPost" });

    // Mengambil dan memetakan data postingan
    return data.items
      .map((post) => {
        return {
          title: post.fields.title,
          slug: post.fields.slug,
          date: post.fields.date,
          author: post.fields.author,
        };
      })
      .slice(0, limit); // Memotong array sesuai dengan limit
  } catch (error) {
    console.error(error);
    return []; // Mengembalikan array kosong jika terjadi kesalahan
  }
}

export async function getNewTechnologyPost() {
  try {
    const data = await client.getEntries({ content_type: "blogPost" });

    return data.items.map((post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }
      let authorImageUrl = post?.fields?.authorImage?.fields?.file.url;
      console.log(authorImageUrl);

      if (!authorImageUrl) {
        authorImageUrl =
          "https://media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=";
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
    const data = await client.getEntries({ content_type: "categories" });

    return data.items.map((post) => {
      let categorylUrl = post?.fields?.categorylImage?.fields?.file.url;

      if (!categorylUrl) {
        categorylUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhge7wZOe_kpjSlMJmtAvSIvgGqfqD3Pmeg&s";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        description: post.fields.description,
        categorylImage: `https:${categorylUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function searchPost() {}

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

export async function searchByCategories(keyword: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.category[match]": keyword,
    });
    return res.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
