# Credit via Git

:::info

This is a proposal. Carlos is trying to get input from the Research Team before
he starts working on this.

:::

Something Carlos really values is data integrity. So, as a fun little thing, I
want to implement a system where we can give git credit for individuals who
participate in the Ojos Project.

## What is git credit?

When you go to any git repository, you can run this command:

```shell
git log | grep "Author: " | sort -u
```

... and it will provide you with all the individuals who have participated in
that git repository.

For example, running that command the
[`ojosproject.org` repository](https://gitlab.com/ojosproject/website) brings
up:

```plaintext
Author: Ayush Jain <ayushj4@uci.edu>
Author: Carlos Valdez <cvaldezh@uci.edu>
```

... because Ayush and Carlos are the only individuals who contributed code to
the website. These changes would also be reflected on our git repos in GitHub
and GitLab, such as
[this commit from GitHub](https://github.com/ojosproject/ojos.calejvaldez.com/commit/a909a91aa9b2440b8509748476bd2419fb77be47).
(Notice how it says it is Ayush's work!)

## The Process

I am planning to develop a workflow where the Research team can get git credit
too through the Discord bot. This is how the process would look:

<!-- ? This is a sequence diagram using Docusaurus' Mermaid integration. -->
<!-- ? Learn more here: -->
<!-- ? https://docusaurus.io/docs/markdown-features/diagrams -->
<!-- ? https://mermaid.js.org/syntax/sequenceDiagram.html -->

```mermaid
sequenceDiagram
    actor Team Member
    participant Discord Bot
    participant Carlos' Hard Drive
    participant git repo

    Note over Discord Bot: Start here! 🏁

    Discord Bot -->> Team Member: Assigns a research paper
    Team Member -->> Discord Bot: Provides notes
    Discord Bot -->> Carlos' Hard Drive: Sends your notes
    Carlos' Hard Drive -->> git repo: Your changes, with credit
```

### Commands

:::info

These are just notes for Carlos as he is working on the Discord bot. This is
absolutely not the final product and will likely change.

:::

|Command|Who can use|Description|
|---|---|---|
|`/assign <member> <paper id>`|Carlos|Assigns `<member>` a research paper.|
|`/claim <paper id>`|Research Team|Team members can also claim research papers for themselves.|
|`/add <paper id>`|Research Team|Opens a [long text box](https://discord.com/developers/docs/interactions/message-components#text-inputs) for you to add your notes. Make sure to use [Markdown](https://quickref.me/markdown)!|
|`/commit <paper id>`|Research Team|This means your notes are finalized and ready to be published.|
|`/list`|Ojos Project Team|Lists all papers, their status, and who is assigned to them.|


### Techy Stuff

Adding your changes to the git repository will require a command similar to:

```shell
git add teams/research/work/paper-id.md
git commit -m "docs(research/paper-id): added paper-id notes" --author "FirstName LastName <email@example.com>"
```

:::warning

Sometimes, Carlos will have to add some changes, such as validating Markdown or
spell checks. In that case, Carlos will be added as a co-author.

The git commit message should instead look something similar to:

```plaintext
docs(research/paper-id): added paper-id notes


Co-authored-by: Carlos Valdez <cvaldezh@uci.edu>
```

:::

### Are there any privacy concerns?

Your name and email would basically become public, in this format:

```plaintext
Author: FirstName LastName <email@example.com>
```

Though, remember that this information is already available on our website, or
other places of the Ojos Project, so I wouldn't be too concerned. Again, this is
credit so that people who are interested in your work can contact you.
