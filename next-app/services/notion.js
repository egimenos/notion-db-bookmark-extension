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

const isAlreadySaved = async (url) => {
  if (!url) return false;
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_TOKEN,
  });

  try {
    const pages = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: "URL",
        rich_text: {
          equals: url,
        },
      },
    });
    return pages.results.length > 0 ? true : false;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchTagList = async () => {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_TOKEN,
  });

  try {
    const pages = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    });

    const tags = pages.results
      .map((result) => result.properties.Tags.multi_select)
      .flat()
      .map((tag) => tag.name);

    return [...new Set(tags)];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

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

export { saveBookmarkToNotion, fetchTagList, isAlreadySaved };
