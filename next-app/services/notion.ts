const { Client } = require("@notionhq/client");

const saveBookmarkToNotion = async (bookmark) => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_TOKEN,
  });

  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      },
      properties: {
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
          multi_select: bookmark.tags,
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
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { saveBookmarkToNotion };
