# notion-db-bookmark-extension

## Description

Browser extension/add-on to save the current tab in a notion database including title, url, notes and tags. It has been tested both in Chrome and in Firefox.

Used starter template [next-chrome](https://github.com/thomaswang/next-chrome) to setup the first boilerplate of the project.

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

## How it works

The url and title of the current tab is fetched on popup open. Then you can edit the title or add some notes, and also provide tags for the bookmark. As many tags as desired can be added just by writing the name of the tag in the input box and pressing Enter, or by selecting a existing tag (fetched from your current bookmarks db) from the automcomplete drop-down list.

Then just click on the "Save" button.

## Load extension/add-on

### Chrome

To load the extension, go to `chrome://extensions/`, activate "Developer mode", "Load unpacked" and select the content in the "extension" folder.

### Firefox

In Firefox you will need to use the V2 version of the manifest file since this is the only one supported by firefox at the moment. Rename the manifestV2.json into manifest.json and load the extension from here : `about:debugging#/runtime/this-firefox` click "load temporary complement" and select the file with the manifest.
