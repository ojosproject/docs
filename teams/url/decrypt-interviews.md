Decrypting the Interviews
=========================

I hope you're comfortable with the terminal.

Installation
------------

> Note on the Windows installation:
>
> I am no longer recommending the Windows install of the `GnuPG.Gpg4win` package.
I feel it is a better idea the entire URL team uses a Unix-like system to ensure
we can all use the same Unix-like commands. Having to support Windows, a
non-Unix-like environment, will make it so that we have to provide instructions
for two different environments.
>
> If you are using Windows, please read
[these instructions for installing the Windows Subsystem for Linux](https://gitlab.com/ojosproject/docs/-/blob/main/teams/url/installing-wsl.md). If you do not want to
install the WSL,
[here are the old instructions for installing the `GnuPG.Gpg4win` package](https://gitlab.com/ojosproject/docs/-/blob/b694c2afb5287b93f2dc6f0d29ca2cc7d0642b40/teams/url/decrypt-interviews.md).
>
> If you want to remove the `GnuPG.Gpg4win` package, please run:
>
> ```shell
> winget uninstall -e --id GnuPG.Gpg4win
> ```

If you are on macOS, you'll have to install `gpg` using Homebrew using this
command:

```shell
brew install gpg
```

If you are on Linux, the `gpg` command should automatically be available.

Decryption
----------

Once you have gpg installed, use the terminal to get to the folder the videos
are downloaded in. There's two useful comments that will help: `ls` and `cd`.

`ls` - list the content in your current folder

`cd <location>` - move to a new location

So...

```shell
ls
cd path/to/downloads/folder
```

Once you're there, you need to use this command:

```shell
gpg X.mp4.gpg
```

Note that X is just the number of the interview. You will be prompted to enter
a passphrase. Once it's decrypted, you can watch the video.
