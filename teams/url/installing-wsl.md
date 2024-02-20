# Installing the Windows Subsystem for Linux

The Ojos Project will primarily be working with Unix-like operating systems.
That is, Linux or macOS. We build scripts and other software that will primarily
be compatible with these two systems.

This is mostly because the Raspberry Pi OS is Linux-based, but it's also because
[I really don't like Windows](https://www.youtube.com/watch?v=moYwK0YMFjQ).

If you're working on the Ojos Project and
prefer to use Windows, though, you can still help!

## Enabling the Feature

If you get an error saying that the `wsl` command is not available, please try:

```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

Please refer to the
[WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-1---enable-the-windows-subsystem-for-linux).

## Install Process

First, we need to install the
[Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/about).
Per Microsoft's about page, the WSL is...

> Windows Subsystem for Linux (WSL) is a feature of Windows that allows you to run a Linux environment on your Windows machine, without the need for a separate virtual machine or dual booting. WSL is designed to provide a seamless and productive experience for developers who want to use both Windows and Linux at the same time.

The important part for us is being able to use Bash commands on the terminal.
Anyways, enough of that. Let's actually install this thing.

Please use **Powershell**.

```shell
wsl --install -d Debian
```

That simple command will go through the install process for WSL, specifically
for the [Debian](https://debian.org/) version. It doesn't matter which one you
choose as long as it is Debian-based. I chose Debian because it is considered
to be the most stable Linux operating system.

Please reboot your system!

## After the Reboot

After the reboot, you will be prompted to choose a username and password. This
can be the same as your Windows credentials, it really doesn't matter.

Congrats, we now have Linux on Windows! ✨

Please do the following to continue the setup:

```shell
# installing git
sudo apt update
sudo apt upgrade
sudo apt install git

# make a new folder for Git repos
mkdir Git
cd Git

# clone the repo, cd into it
git clone https://gitlab.com/ojosproject/scripts.git
cd scripts

# run the setup script
bash linux-setup/linux-setup.sh
```
