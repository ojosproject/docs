---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    Our blog is located at `ojosproject.org/news/`. Updating the website for the
    blog is kind of complicated, so I'm going to outline it here.
last_update:
    author: Carlos Valdez
    date: February 22, 2024 1:19:32 AM PST
---
# Adding a news article

Our blog is located at `ojosproject.org/news/`. Updating the website for the
blog is kind of complicated, so I'm going to outline it here.

## Updating metadata

In `/src/data/metadata.json`, you need to add the article's metadata. Here's
the structure:

```json
{
    "ID": {
        "title": "...",
        "author": "...",
        "date": 0,
        "description": "...",
        "imageLocation": "...",
        "id": "ID"
    }
}
```

If `date` is kept as `0`, it indicates that the article is just a draft.

## Adding an `index.html` file

In `/public/`, there exists various folders based on the paths of on the
website. We need to include a `.html` file in a folder with the `id` value.

Here's a template:

```html
<!-- index.html -->
<!-- Ojos Project -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/static/images/favicon.ico" sizes="any">
    <link rel="icon" href="/static/images/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/static/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- ! Add the `description` value here. -->
    <meta
      name="description"
      content="DESCRIPTION"
    />
    <meta property="og:image"  content="https://ojos.calejvaldez.com/static/images/oembed.png">
    <meta name="twitter:image" content="https://ojos.calejvaldez.com/static/images/oembed.png">
    <!-- ! Add the `title` value here. -->
    <title>TITLE - Project News</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Adding to `vite.config.ts`

Finally, you need to add the path to `vite.config.ts`. Add a key to
`defineConfig.plugins.build.rollupOptions.input`, whatever you want to name it,
and add `resolve(__dirname, "public/news/ID/index.html")`

## Updating the content

In `/public/static/data/`, there exists Markdown files with the article's
actual content. This is where you write the actual article.
