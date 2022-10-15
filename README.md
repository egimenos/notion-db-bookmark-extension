# notion-db-bookmark-extension

## Description

Chrome extension to add bookmarks to a notion db

Based on starter template [next-chrome](https://github.com/thomaswang/next-chrome)

## Create Notion DB and get API credentials

To use the extension as it is, you need to create a database, create a Notion integration and grant the database access to the integration.
Specific instructions here: <https://developers.notion.com/docs/getting-started>

The fields and types of the database are as follow

| field name   | type         |
| ------------ | ------------ |
| Title        | Title        |
| Tags         | MultiSelect  |
| URL          | URL          |
| Notes        | Text         |
| Created time | Created time |

Add a `.env.local` file and put your notion API credentials:

```sh
NOTION_DATABASE_ID="..."
NOTION_API_TOKEN="..."
```

## Develop and create build

```sh
cd next-app

yarn # run once

yarn build # on macOS
yarn build:linux # on Linux
```

To update the build on changes during development, run:

```sh
yarn watch # on macOS
yarn watch_linux # on Linux
```

To load the extension, go to `chrome://extensions/`, activate "Developer mode", "Load unpacked" and select the content in the "extension" folder.
