const { Client } = require("@notionhq/client");

const saveBookmarkToNotion = async (bookmark) => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_TOKEN,
  });
  const payload = buildPayload(bookmark);
  try {
    const result = await notion.pages.create({
      parent: { database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID },
      properties: payload,
    });
    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export { saveBookmarkToNotion };
function buildPayload(bookmark) {
  return {
    Title: {
      title: [
        {
          text: {
            content: bookmark.title,
          },
        },
      ],
    },
    URL: {
      url: bookmark.url,
    },
    Tags: {
      multi_select: bookmark.tags.map((tag) => ({ name: tag })),
    },
    Notes: {
      rich_text: [
        {
          text: {
            content: bookmark.notes || "-",
          },
        },
      ],
    },
  };
}
