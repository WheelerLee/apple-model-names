#  Apple Model Names

A tiny helper library to convert Apple hardware strings ("iPhone6,2") into human-readable model names ("iPhone 5s").

Supports the following device hardware strings:

- 📱: iPhone, iPad (all types), iPod touch
- 💻: MacBook, MacBook Pro, MacBook Air
- 🖥: Mac mini, Mac Pro, iMac
- 📺 Apple TV, ⌚ Apple Watch

## Usage

First, install the library:

```
npm install --save apple-model-names
```

Then, import and use:

```
import getModelName from 'apple-model-names';

getModelName('iPhone6,2'); // 'iPhone 5s'
getModelName('iPhone6,2', { split: true }); // ['iPhone', '5s']

// Examples with no matching result
getModelName('iPhone99,9'); // 'iPhone (Other)'
getModelName('iCrazy1,1'); // '(Other)'
```

## Options

An options hash can be passed in as a second parameter to customize the return data. Here are the available options:

Option |  Default Value | Description
------ |  ------------- | -----------
`split` | `false` | Return an array with the device and model split up (i.e. `['iPhone', '5s']`). This is useful when needing more fine-grained control, such as styling each piece of text differently in your UI.
`noMatchString` | `'(Other)'` | String to use when a match against the code or device name isn't found.

## Translation Sources

The translations are human-curated from various Apple support links and wiki pages. Here are the resources we use:

- [https://www.theiphonewiki.com/wiki/Models]() (iPhone, iPad, iPod, Apple Watch, Apple TV)
- [https://support.apple.com/en-us/HT201608]() (MacBook)
- [https://support.apple.com/en-us/HT201862]() (MacBook Air)
- [https://support.apple.com/en-us/HT201300]() (MacBook Pro)
- [https://en.wikipedia.org/wiki/Mac_Mini]() (Mac mini)
- [https://support.apple.com/en-us/HT202888]() (Mac Pro)
- [https://support.apple.com/en-us/HT201634]() (iMac)

## Missing a new model? Found a bug?

We welcome contributions! Feel free to [open an issue](https://github.com/twitter-fabric/apple-model-names/issues/new) (or a PR!) if you notice any missing models (new releases, etc.), or spot a bug. Thanks!

## License

Copyright 2016 Twitter, Inc.

Licensed under the MIT License: https://opensource.org/licenses/MIT
