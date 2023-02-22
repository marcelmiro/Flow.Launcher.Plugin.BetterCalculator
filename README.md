# Flow Launcher Better Calculator plugin

A better calculator plugin for [Flow Launcher](https://www.flowlauncher.com/) using [Node.js](https://nodejs.org/) runtime. It features numeric locale formatting to increase readability of calculator's results.

## How to install

To install this plugin, download the latest release zip file and extract the contents into a folder inside Flow Launcher's plugin directory. This can be done by searching `Flow Launcher UserData Folder` in the launcher and pressing enter. The plugins are found in the `Plugins` folder.

An example of the plugin path would look like this:

```
C:\Users\Marcel\AppData\Roaming\FlowLauncher\Plugins\Flow.Launcher.Plugin.BetterCalculator
```

Enabling Better Calculator in Flow Launcher's settings may be required to start using this plugin. Disabling the default Calculator plugin is recommended too.

## Development

To use this plugin during development, you need to create a symlink between this directory and Flow Launcher's plugin directory. This can be done by searching `Flow Launcher UserData Folder` in the launcher and pressing enter. The plugins are found in the `Plugins` folder.

You can create a symlink by opening CMD in Windows and typing:

```CMD
mklink /J [flow-launcher-plugin-folder]/[folder-name] [project-root]
```

An example would look like this:

```CMD
mklink /J C:\Users\Marcel\AppData\Roaming\FlowLauncher\Plugins\BetterCalculator C:\Users\Marcel\code\Flow.Launcher.Plugin.BetterCalculator
```

After this is set up. You can run:

```CMD
npm install
npm run dev
```
