---
displayed_sidebar: urlTeamSidebar
---
# Raspberry Pi Notes

This document will go over some important factors of the Raspberry Pi that may
be useful to us.

## `raspi-config` CLI

`raspi-config` is used to help change the configurations on a Raspberry Pi.
Learn more about it on the
[Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/computers/configuration.html#raspi-config-cli).

## Adding the awesome Window Manager

:::info

It is not 100% confirmed that we will use the awesomw window manager for this
project. This is just an option for now.

:::

To change the Window manager automatically as you log in, you can run this
command:

```shell
echo awesome >> /home/"$USERNAME"/.xinitrc
```

## Raspberry Pi neofetch output

![Raspberry Pi neofetch output](@site/static/img/raspberry-neofetch.png)

- [LXDE](https://www.lxde.org/)
