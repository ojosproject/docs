---
displayed_sidebar: urlTeamSidebar
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

## The `displayed_sidebar` key

On the top of every Markdown file will exist this text:

```markdown
---
displayed_sidebar: ...
---
```

This indicates the sidebar that will be displayed on the left of the screen. The
available values are in
[`sidebars.ts`](https://gitlab.com/ojosproject/docs/-/blob/main/sidebars.ts).

## Updating the sidebar

The sidebar (for now) doesn't automatically update and include the new Markdown
file. Please add the key to the `sidebars.ts` file. Please note the pattern!

## Conclusion

It's really simple. Just:

- Include the `displayed_sidebar` key
- Write your content
- Update `sidebars.ts` to include the location of your file
