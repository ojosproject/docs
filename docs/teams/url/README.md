---
displayed_sidebar: urlTeamSidebar
description: >
    The URL team at the Ojos Project is in charge of building the device. There are
    many definitions to the world "building", but eventually this team will be split
    into more. As of now, this is the team that is physically present on-campus at
    the University of California, Irvine.
last_update:
    author: Carlos Valdez
    date: February 28, 2024 1:49:26 PM PST
---

URL Team
========

The URL team at the Ojos Project is in charge of building the device. There are
many definitions to the world "building", but eventually this team will be split
into more. As of now, this is the team that is physically present on-campus at
the University of California, Irvine.

Responsibilities
----------------

The current responsibilities of the URL team include:

- Requirements gathering
- Interviewing individuals
- Documenting interviews and notes
- Reading over research presented by Research team
- Ensuring all of our information is in place
- Updating Professor Baldwin with everything regarding the project.

Tools
-----

:::info

Most, if not all, of the documentation for URL assumes you are running macOS or
a Debian-based Linux distribution. **Please use macOS, Linux, or WSL for work
related to the Ojos Project.** Thanks!

:::

We try to use similar tools to ensure consistency throughout the team. Some of
the tools we use are:

|Tool|Setup|Reason|
|---|---|---|
|macOS or Linux|N/A|Ensuring we can use the same bash scripts.|
|Windows Subsystem for Linux|[Installing the Windows Subsystem for Linux](/teams/url/installing-wsl/)|Ensuring Windows users can use the same bash scripts without fully transitioning to Linux.|
|GPG|[Decrypting the Interviews](/teams/url/decrypt-interviews/)|We use GPG to encrypt/decrypt interviews.|
|SSH|[SSH Setup](/teams/url/ssh-setup/)|We use SSH to communicate with GitLab.|

Custom bash commands
--------------------

These are commands created via the `.zshrc` file.

|Command|Substitute for|Usage|
|---|---|---|
|`cdrive`|`cd /mnt/c/Users/[username]`|For WSL users, will take you to your Windows home directory.|
|`check`|`ssh-add -l`|Checks to see if there are identities in the SSH agent.|
|`activate`|`eval $(ssh-agent -s) && ssh-add ~/.ssh/GitLab`|Activates the SSH agent and adds the `GitLab` identity.|
|`config`|`vim ~/.zshrc`|Uses `vim` to open the `.zshrc`.|
