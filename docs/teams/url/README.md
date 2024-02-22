---
displayed_sidebar: urlTeamSidebar
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

> Note:
>
> Most, if not all, of the documentation in the URL folder assumes you are
> running macOS or a Debian-based Linux distro. **Please use macOS, Linux, or
> WSL for work related to the Ojos Project.** Thanks!

We try to use similar tools to ensure consistency throughout the team. Some of
the tools we use are:

|Tool|Setup|Reason|
|---|---|---|
|macOS or Linux|N/A|Ensuring we can use the same bash scripts.|
|Windows Subsystem for Linux|[Installing the Windows Subsystem for Linux](https://gitlab.com/ojosproject/docs/-/blob/main/teams/url/installing-wsl.md)|Ensuring Windows users can use the same bash scripts without fully transitioning to Linux.|
|GPG|[Decrypting the Interviews](https://gitlab.com/ojosproject/docs/-/blob/main/teams/url/decrypt-interviews.md)|We use GPG to encrypt/decrypt interviews.|
|SSH|[SSH Setup](https://gitlab.com/ojosproject/docs/-/blob/main/teams/url/ssh-setup.md)|We use SSH to communicate with GitLab.|

Custom bash commands
--------------------

These are commands created via the `.zshrc` file.

|Command|Substitute for|Usage|
|---|---|---|
|`cdrive`|`cd /mnt/c/Users/[username]`|For WSL users, will take you to your home directory.|
|`check`|`ssh-add -l`|Checks to see if there are identities in the SSH agent.|
|`activate`|`eval $(ssh-agent -s) && ssh-add ~/.ssh/GitLab`|Activates the SSH agent and adds the `GitLab` identity.|
|`config`|`vim ~/.zshrc`|Uses `vim` to open the `.zshrc`.|
