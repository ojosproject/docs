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
stuff like names and emails. However, we use this file for presented who
contributed to our project.

## The Protocol

The Members JSON Protocol is the method in which we will use the Members JSON
file.

### JSON Structure

The structure of the JSON is:

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
