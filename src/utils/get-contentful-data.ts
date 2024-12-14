export async function getAllPost() {
  try {
    const res = await fetch(
      "https://cdn.contentful.com/spaces/xi790hf9mml3/environments/master/entries?access_token=B1clAu02__fWaYpVJ4_FNz1Pt-jk2oXCz3jbb0oo1YA&content_type=blogPost",
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLatestPost() {
  try {
    const allPosts = await getAllPost();
    if (allPosts && allPosts.items && allPosts.items.length > 0) {
      const latestPost = allPosts.items[allPosts.items.length - 1];
      return latestPost;
    } else {
      console.warn("No posts found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching single post:", error);
    return null;
  }
}
