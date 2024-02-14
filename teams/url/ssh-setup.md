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

Thank you for your patience. This will happen a lot.
