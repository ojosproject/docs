---
displayed_sidebar: groupUrlTeamDevelopers
description: >
    The Developers team of the Ojos Project is in charge of building the
    software infrastructure of the device and the organization as a whole.
last_update:
    author: Carlos Valdez
    date: March 21, 2024
---

# Developers Team

The Developers team of the Ojos Project is in charge of building the software
infrastructure of the device and the organization as a whole.

## Responsibilities

The responsibilities of the Developers team include:

- Updating the main website
- Ensuring the Docs website is functional
- Developing scripts and other Linux software for the device

## Tools

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
|Windows Subsystem for Linux|[Installing the Windows Subsystem for Linux](/url/developers/guides/installing-wsl/)|Ensuring Windows users can use the same bash scripts without fully transitioning to Linux.|
|GPG|[Decrypting the Interviews](/url/developers/guides/decrypt-interviews/)|We use GPG to encrypt/decrypt interviews.|
|SSH|[SSH Setup](/url/developers/guides/ssh-setup/)|We use SSH to communicate with GitLab.|

## Custom bash commands

These are commands created via the `.zshrc` file.

| Command    | Substitute for                                  | Usage                                                        |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `cdrive`   | `cd /mnt/c/Users/[username]`                    | For WSL users, will take you to your Windows home directory. |
| `check`    | `ssh-add -l`                                    | Checks to see if there are identities in the SSH agent.      |
| `activate` | `eval $(ssh-agent -s) && ssh-add ~/.ssh/GitLab` | Activates the SSH agent and adds the `GitLab` identity.      |
| `config`   | `vim ~/.zshrc`                                  | Uses `vim` to open the `.zshrc`.                             |
