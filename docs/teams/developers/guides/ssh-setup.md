---
displayed_sidebar: teamDevelopers
description: >
    This will help you get through the SSH setup.
last_update:
    author: Carlos Valdez
    date: February 22, 2024 2:42:55 PM PST
---

# SSH Setup

This will help you get through the SSH setup.

## Windows Pre-requisites

If you are on Windows, you need to install the Windows Subsystem for Linux.
Please go
[read and do that first](/teams/url/installing-wsl/).

## Using the script

I wrote a Bash script that will help automate the process. It is located in
[our GitLab scripts repo](https://gitlab.com/ojosproject/scripts). To get the
script, do the following:

```shell
git clone https://gitlab.com/ojosproject/scripts
cd scripts/ssh-setup/
```

To run it, do...

```shell
bash ssh-setup.sh
```

The file will do the following things:

1. Generate an SSH key for GitLab
2. Modify your `config` file in the `.ssh` folder to add `git@gitlab.com`
3. Print your public key, that you need to add to GitLab.

Once that's done, add your key to GitLab, ensure it's a key for
`Authentication`, and you're set!

## Using the SSH Agent

If you ran the
[`linux-setup.sh` file](https://gitlab.com/ojosproject/scripts/-/tree/main/linux-setup)
during your Linux setup, you have two useful commands.

```shell
# activates the SSH Agent
# adds GitLab identity
# NEEDS TO BE DONE EVERY TERMINAL SESSION
activate

# if you don't know if the SSH agent is active, run this command
check
```

If you want to learn how to do this manually, which I highly encourage,
[read the old documentation here](https://gitlab.com/ojosproject/docs/-/blob/e98bc507eae3acb89326d54010c4ad59fd81124a/teams/url/ssh-setup.md#using-the-ssh-agent).

## Concluding

Once you've created the key, added it to GitLab, and started the SSH agent, you
should be able to test it using this command:

```shell
ssh git@gitlab.com
```

... and get a response similar to:

```shell
Welcome to GitLab, @username!
Connection to gitlab.com closed.
```

Thank you for your patience. This will happen a lot.
