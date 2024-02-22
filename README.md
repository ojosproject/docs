# Ojos Project Docs

Welcome to the Ojos Project documentation! This is a collection of Markdown
files organized to help you get a better understanding of us as a team and our
work.

The Ojos Project currently has two teams:

- [Research Team](https://docs.ojosproject.org/docs/teams/research/)
- [URL Team](https://docs.ojosproject.org/docs/teams/url/)

## Contributing

The `docs.ojosproject.org` website is generated with
[Docusaurus](https://docusaurus.io/), an open-source documentation tool. It
uses all of the Markdown files in the `docs` folder and presents it in a
template used by hundreds of projects.

### Developer Guide

To run the website on your local machine, run these commands:

```shell
# install dependencies
npm i

# start the program
npm run start
```

If you make a change and don't immediately see it, it might be because the cache
is being used. To clear the cache, run:

```shell
npm run clear
```

Please refer to the [Docusaurus documentation](https://docusaurus.io/docs)

### `npm run copy` script

If you took a look at the `package.json` file, you might have noticed a `copy`
script. The purpose of that script is to copy this document and move it into the
`docs` folder to ensure the repository's `README.md` file and the
`docs/intro.md` are synced.

It just does this:

```shell
# adds the `display_sidebar` value
echo \"---\ndisplayed_sidebar: teamSidebar\n---\n\" > docs/intro.md

# copies the content of this document
cat README.md >> docs/intro.md
```

### Git Rules

If you are a member of the Ojos Project, you can add your changes to the `dev`
branch.

If you are an open-source contributor, you can create a fork of these documents
and open a
[Merge request](https://docs.gitlab.com/ee/user/project/merge_requests/).

There is also an "Edit this page" button at the end of these documents in
[docs.ojosproject.org](https://docs.ojosproject.org/) that will take you to the
file in the GitLab repository.

## Need help?

If anything in these documents do not make sense, please contact Carlos Valdez
any way you know how, or via email at
[cvaldezh@uci.edu](mailto:cvaldezh@uci.edu). You can also
[open an issue on GitLab](https://gitlab.com/ojosproject/docs/-/issues). Thanks!
