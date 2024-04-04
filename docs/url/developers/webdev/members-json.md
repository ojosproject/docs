---
displayed_sidebar: groupUrlTeamDevelopers
unlisted: true
description: >
    This walks Developers over the Members JSON Protocol.
last_update:
    author: Carlos Valdez
    date: April 3 2024
---
# Members JSON Protocol

## Background

The purpose of the Docs website is to document the project and its APIs. Part of
that documentation process is documenting the members of the Ojos Project.

The Members JSON file includes information about the members. It's just casual
stuff like names and emails. However, we use this file to showcase who
contributed to our project.

## The Protocol

The Members JSON Protocol is the method in which we will use the Members JSON
file. The file includes information to help promote members and get information
we may need for the Ojos Project.

### JSON Structure

The structure of the Members JSON file is:

```json
[
    {
        "name": "",
        "email": "",
        "roles": [],
        "institution": "",
        "website": {"label": "", "value": ""},
        "joined": "",
        "avatar": "",
        "contributions": [],
        "active": false
    }
]
```

All of the Member objects will be inside of an array.

Here's a table of keys and their meaning:

|key|meaning|
|---|---|
|`name`|Member name|
|`email`|Their institution email|
|`roles`|Their role(s) in the Ojos Project|
|`institution`|Their associated institution|
|`website.label`|The label, usually `Personal Website`, `Email`, etc.|
|`website.value`|The link to direct people to. `mailto:` for `Email`.|
|`joined`|Their join month/year|
|`avatar`|Their Gravatar link, with [default image `mp`](https://docs.gravatar.com/general/images/#default-image). Use [SHA256 Online Tool](https://emn178.github.io/online-tools/sha256.html)|
|`contributions`|An array of strings indicating their various contributions|
|`active`|A boolean indicating if they're still participating or not|

:::tip

You can
[view the public JSON file on GitLab](https://gitlab.com/ojosproject/docs/-/blob/main/static/data/url/members.json).

:::

### Using the file

As of April 3, 2024, this file is used in two places:

1. [Main website](https://ojosproject.org#team)
2. [Members of the Ojos Project website](https://docs.ojosproject.org/url/members/)

The (literal) keys to sorting individuals are `active` and `contributions`.
Everything else in the Members JSON file is just for information.

#### Example: Main website

On the main website, it adds members if the `active` key is `true` and if the
`contributions` array is not empty. This indicates a Recognized Member.

It gets the Members JSON file by making a `GET` request to
`https://docs.ojosproject.org/data/url/members.json`.

#### Example: Docs website

On the Docs website, if adds members to the Current Members table if their
`active` key is `true`. It adds members to the Former members table if their
`active` is `false` and the `contributions` array is not empty.

Getting the data on the Docs website is different. Instead of doing a `GET`
request, you can just import it. It is imported in `/src/components/members.tsx`
and used to create `CurrentMembers` and `FormerMembers` tables that is then
imported in `/docs/url/members.mdx`.

If you want to import the Members JSON file in the Docs website, you can just
add something like
`import membersJSON from "@site/static/data/url/members.json"` in a JSX file.
