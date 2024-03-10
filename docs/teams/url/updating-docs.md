---
displayed_sidebar: urlTeamSidebar
description: >
    This document will explain the process of how to add a new Markdown file to
    the documentation. Out are the days of just adding the document...
last_update:
    author: Carlos Valdez
    date: 1710096433155
---
# Updating the documentation

You're probably reading this on `docs.ojosproject.org`. Previously, we would
keep our documentation in a
[GitLab folder](https://gitlab.com/ojosproject/docs/-/tree/33878f675970afe8e6b7dd4f60e08fcd8564c4a9)
full of Markdown files, which worked just fine. I wanted to focus on just
writing quick Markdown files and publishing them, and this method worked just
fine. However, other open-source projects have very pretty documentation, and
we just had a GitLab folder. Nothing wrong with it, but I want to make it look
just as nice!

In comes [Docusaurus](https://docusaurus.io/), an open-source documentation
tool that focuses on making the documentation look pretty while I can focus on
just writing it up! That is... until *after* the setup.

This document will explain the process of how to add a new Markdown file to
the documentation. Out are the days of just adding the document...

## The front matter

:::tip

Helpful resources:

- [Docusaurus documentation](https://docusaurus.io/docs/markdown-features#front-matter).
- [YAML cheat sheet](https://quickref.me/yaml)

:::

On the top of every Markdown file will exist this text:

```yaml
---
displayed_sidebar: null
description: >
    null
last_update:
    author: null
    date: null
---
```

Here's a table detailing what each key means:

| Key                 | Type                                          | Description                                                                                                                                                             |
| ------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayed_sidebar` | `sidebar.ts` key                              | The sidebar that will be displayed on the left of the screen. The available values are in [`sidebars.ts`](https://gitlab.com/ojosproject/docs/-/blob/main/sidebars.ts). |
| `description`       | string                                        | The description that will be displayed on the website's [meta tags](https://www.w3schools.com/tags/tag_meta.asp).                                                       |
| `last_update`       | [sequence](https://quickref.me/yaml#sequence) | The [last updated](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#last_update) data.                                                            |
| `author`            | string                                        | Name of the person who wrote this document.                                                                                                                             |
| `date`              | number                                        | Unix timestamp in milliseconds. I usually get it from the [Unix Epoch Clock](https://www.epochconverter.com/clock).                                                     |

## Updating the sidebar

The sidebar (for now) doesn't automatically update and include the new Markdown
file. Please add the key to the `sidebars.ts` file. Please note the pattern!

## Conclusion

It's really simple. Just:

- Include the front matter
- Write your content
- Update `sidebars.ts` to include the location of your file
