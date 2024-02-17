# SSH Setup

This will help you get through the SSH setup.

## Windows Pre-requisites

If you are on Windows, you need to install the Windows Subsystem for Linux.
Please go
[read and do that first](https://gitlab.com/ojosproject/docs/-/blob/main/teams/url/installing-wsl.md).

## Using the script

I wrote a Bash script that will help automate the process. It is located in
[our GitLab scripts repo](https://gitlab.com/ojosproject/scripts). To get the
script, do the following:

```shell
git clone https://gitlab.com/ojosproject/scripts
cd scripts
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

You're probably going to need to use the SSH agent. To do this, run these
commands in Linux (or WSL):

```shell
# starts the SSH agent
eval $(ssh-agent -s)

# adding the key to the agent, has to be done every reboot
ssh-add ~/.ssh/GitLab
```

It will then prompt you for the passphrase you added to your SSH key.

**IMPORTANT: You will need to do this every time you log out of your computer.**

If you want to check if your SSH key is still in the SSH agent, you can run:

```shell
ssh-add -l
```

This will provide a list of available keys (identities). If it says the agent
could not be connected, run the `eval` command. If it says the agent has no
identities, run the `ssh-add <path>` command from above.

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
