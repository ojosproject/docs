---
description: >
    Let's learn how to use SSH with an OpenLab tutorial. The ICS OpenLab is a
    Linux server for ICS students that can be used for various purposes, such as
    schoolwork or hosting your ICS website.
last_update:
    date: April 22 2024
    author: Carlos Valdez
---
# ICS OpenLab Tutorial

SSH can be a bit intimidating at first, as all CLIs do. However, I'll try to
make this as easy as possible, and even show you how to connect to [ICS'
OpenLab](https://swiki.ics.uci.edu/doku.php/hardware:cluster:openlab)!

:::note

A few things about this document:

1. This assumes you are a student of the University of California, Irvine under
    the Donald Bren School of Information and Computer Sciences
2. This assumes you did not run the [SSH setup script](/url/developers/guides/ssh-setup/)
3. This assumes you don't know what SSH is
4. And of course, everybody's favorite requirement, that you're connected to the
    UCI VPN

:::

## What is..?

### OpenLab

OpenLab is a Linux server maintained by the School of ICS. Some ICS courses,
like CS 121/IN4MATX 141, endorse using OpenLab as it has a lot of the programs
we need to use pre-installed.

I think OpenLab is pretty cool to use.

### SSH

SSH stands for "secure shell protocol", which allows you to connect to other
computers/servers using two keys: a public key and a private key. A public key
can (and often, has to) be shared with other computers, and a private key should
never be shared.

## Prerequisites

### ICS Account

In order to use OpenLab, you must have an ICS account. Please [active your ICS
account here](https://ics.uci.edu/~lab/students/acct_activate.php).

### SSH Keys

To connect to OpenLab, you must generate an SSH key. An SSH key is a way to
authenticate yourself to the server. Think of it as a password.

## Setting up SSH

### The `.ssh` folder

Before we move forward, we should talk about the `.ssh` folder. On your
computer, you probably have a folder called `.ssh`. You can check by running
this command:

```shell
ls ~
```

If you see `.ssh`, great! If you don't, please run `mkdir -p ~/.ssh/`.

:::tip

Windows users:

These commands assume you are running macOS or Linux. However, you can use these
same commands in PowerShell. If some of these commands don't work, it's probably
because of the flags, such as `-p`.

:::

In the `.ssh` folder, you will find a few files. Here's a table explaining
the files you will have by the end of this tutorial:

On your personal computer:

| File name            | Purpose                                                                            |
| -------------------- | ---------------------------------------------------------------------------------- |
| `~/.ssh/config`      | Consider this file your SSH settings. You can modify it to make SSH easier to use. |
| `~/.ssh/ics`         | This will be your OpenLab private key. It should NEVER be shared.                  |
| `~/.ssh/ics.pub`     | This will be your OpenLab public key. It's fine to share this.                     |
| `~/.ssh/known_hosts` | This is a file that tells your computer which servers you've connected to.         |

On OpenLab:

| File Name                | Purpose                                                                     |
| ------------------------ | --------------------------------------------------------------------------- |
| `~/.ssh/authorized_keys` | The public keys that have permission to connect to OpenLab under your name. |

## Generating an SSH key

You can generate an SSH key using this command:

```shell
ssh-keygen -f ~/.ssh/ics -t ed25519 -C "OpenLab key"
```

It will ask for a password. This password is used to encrypt your SSH key. Give
it a password that you will remember. **Do not underestimate the importance of
encryption.**

The `ssh-keygen` command is used to generate your SSH key. There's a few
parameters I added to make your key more convenient.

| Parameter | Value          | Meaning                                                                                |
| --------- | -------------- | -------------------------------------------------------------------------------------- |
| `-f`      | `~/.ssh/ics`   | This specifies where you want your key to be saved.                                    |
| `-t`      | `ed25519`      | This specifies the **t**ype of SSH key. `ed25519` is considered to be strong and fast. |
| `-C`      | `"OpenLab key` | This adds a comment to your SSH key.                                                   |

## `ics` and `ics.pub`

All of your SSH-related stuff will be in a folder in the path `~/.ssh/`.

When you generate a new key, a few things will happen. It will generate two new
folders in the `.ssh` folder: `ics` and `ics.pub`. The `ics.pub` file is the
one you'll be interacting with the most. It contains your public key, and you
can share this with anyone. You will have to share this with OpenLab.

The `ics` file is meant to be private. **Do not share this with anyone!**

## Getting your public key

You are going to have to share your public key with OpenLab. To get your public
key, run this command:

```shell
cat ~/.ssh/ics.pub
```

Here's my output:

```shell
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKhUItkt4dkot3/1K1e9SAP+CrGJQ9ior+gAVublCk/x OpenLab key
```

You need to copy this output and place it in the OpenLab server.

:::danger

Remember! Be sure to run `cat ~/.ssh/ics.pub` and **NOT** `cat ~/.ssh/ics`, as
the latter is your **private key**.

:::

## First OpenLab Connection

When you first connect to OpenLab, you will need to get the `ics.pub` key you
got from [the step above](#getting-your-public-key) and go into the OpenLab
`.ssh` folder. You should create a new file called `authorized_keys` and place
your public key here.

`authorized_keys` tells OpenLab which keys should be allowed to connect to
OpenLab under your name. If you were to put my key in this file, I'd be able to
connect to OpenLab under your name. Make sure to use the right key!

Now, you can connect running this command:

```shell
ssh $YOUR_UCINETID@openlab.ics.uci.edu
```

It will ask you for your key's password that you set.

## Why does it ask us so much for my password?

I know. It's annoying. Thankfully, the SSH agent exists. When you use the SSH
agent, it remembers your password.

```shell
eval $(ssh-agent -s) # activates the SSH agent
ssh-add -l # prints your active SSH keys

ssh-add ~/.ssh/ics # adds your ics private key to the agent
```

It will prompt you for your password. Now, you won't have to add your password
until the next time you restart your computer!

## The `config` file

There's another file in `.ssh` called `config`. The config file allows you to
make changes to how you connect to SSH. Here's a quick `config` file you can
paste:

```plaintext
Host openlab.ics.uci.edu
    IdentityFile ~/.ssh/ics
    User [YOUR UCINETID]
```

Now, if you set the SSH agent correctly, and you pasted set up this `config`
file, you can connect to OpenLab by running:

```shell
ssh openlab.ics.uci.edu
```

## Acknowledgements

A huge thanks to Chase Carnaroli, whose
[OpenLab tutorial](https://gist.github.com/ChaseC99/9506cf219ca33c60693ea4c4396a4c19)
was what helped me learn how to connect to OpenLab.
