Decrypting the Interviews
=========================

I hope you're comfortable with the terminal.

Installation
------------

If you're on Windows, please use Windows Powershell. If you're on macOS or
Linux, you can use whichever teminal you're most comfortable with, as long as
it's Bash-based.

For Linux and macOS users, you'll probably already have the `gpg` command ready
to go. For Windows users, you need to download gpg using:

```shell
winget install -e --id GnuPG.Gpg4win
```

Once gpg is installed, you can continue.

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
