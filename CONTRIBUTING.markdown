Contributing
============

Thank you for your interest in contributing.

*Everyone should first [read the existing docs](https://handbrake.fr/docs/) before submitting changes*.

If you're a non-technical person, feel free to submit changes via the [HandBrake forum](https://handbrake.fr/forum/) (registration is free) or for minor issues, e.g. typos, say hi on the [HandBrake IRC channel](https://handbrake.fr/community.php).

You may work directly on the source documents by [creating a GitHub account](https://github.com/join) and forking [HandBrake/handbrake-docs](https://github.com/HandBrake/handbrake-docs/). Create a new local branch for each group of changes and submit a pull request when you're done. For more on this workflow, read [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/).


## Conduct

### Respect the project's goals

The documentation project's main goals are, in order of importance:

1. Provide a guide to common HandBrake workflows for normal humans
2. Describe in detail the features and controls that make up these workflows
3. Define multimedia terms in common language to further clarify points number 1 & 2

In short, *workflows* in *common language* for *normal humans*.

Work not meeting this general standard is unhelpful and potentially confusing, and as such will be rejected.

### Respect others

Don't be a jerk.

Most of our [forum rules](https://forum.handbrake.fr/app.php/rules) apply. Please do not attempt to document topics of dubious legality, such as illegally obtaining content (piracy or working with pirated material) or illegally circumventing copy protections. Harassment and abusive speech will not be tolerated.

### Have reasonable expectations

HandBrake is [open-source software](https://en.wikipedia.org/wiki/Open-source_software), created and maintained by a small group of people in their spare time. It is provided to the general public essentially for free, under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License) Version 2.

Similarly, HandBrake's documentation is the product of volunteer work and provided to the general public essentially for free, under the [GNU Free Documentation License](https://en.wikipedia.org/wiki/GNU_Free_Documentation_License).

Basically, nobody working on HandBrake or HandBrake Docs owes you anything. So please be kind, considerate, and constructive in your contributions and criticisms of what is being freely provided to you.


## Writing style and presentation

TODO: Style notes here.


## Document format

*We're aware of the many disagreements regarding Markdown implementations, standardization, and even file name extensions. We ask that you respect the non-political nature of this project and politely suggest that time is better spent writing quality documentation.*

The documentation's source files are written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and use the `.markdown` file extension. For publishing, the Markdown text is converted to [HTML](https://en.wikipedia.org/wiki/HTML) using [Discount](http://www.pell.portland.or.us/~orc/Code/discount/).

Additionally, source files contain metadata information in the form of [YAML](https://en.wikipedia.org/wiki/YAML) headers. This allows each document to be self-describing.

More technical details are available under *Working with the source files*.

Here is an example excerpt from `source/quick-start.markdown`:

```
---
Title:           Quick start
Authors:         HandBrake Team
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: master@HEAD
License:         Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
License_URL:     https://handbrake.fr/docs/license/
---

Quick start
===========

HandBrake takes videos you already have and makes new ones that work on your phone, tablet, TV media player, game console, computer, web browser—nearly anything that supports modern video formats.

This quick start guide assumes you have already downloaded and installed HandBrake. If you do not already have HandBrake, please see [Downloading and installing HandBrake](download-and-install.html).

Let's get started.

...
```

The document begins with a YAML section encapsulated by two sets of three dashes (`---`). This allows us to describe the document in a standard manner that computers can read. The YAML section is typically followed by a blank line for legibility.

The rest of the document is Markdown. Anything you see in the published documentation is written here in this format.

Markdown is a [markup language](https://en.wikipedia.org/wiki/Markup_language) that allows plain text to be "marked up" with special identifiers to enhance formatting and meaning. Markdown directly translates into [HTML](https://en.wikipedia.org/wiki/HTML), while being easier to read and write than HTML.

In the example, the underlined "Quick start" text is a heading, and there is a link at the end of the second sentence. We could have added stars around certain words to indicate emphasis, for instance \*italics\* (*italics*) or \*\*bold\*\* (**bold**).

If you are unfamiliar with Markdown and would like to know more, GitHub has a guide called [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) that may be helpful.

TODO: Notes on preferred Markdown style, features to avoid (ideally just disable them).
TODO: Notes on formatting multi-platform (Linux/OS X/Windows) sections?


## Working with the source files

If you're new to using Git or GitHub, check out [guides.github.com](https://guides.github.com/).

Every copy of the source files includes the tools needed to convert them into a collection of HTML documents:

- Discount converts Markdown to HTML that you can view in your web browser
- TODO: describe YAML tool if not processed by build script
- TODO: describe build script, faux headers and footers to generate full local HTML?

If you haven't already, [create a GitHub account](https://github.com/join) and fork [HandBrake/handbrake-docs](https://github.com/HandBrake/handbrake-docs/). Then clone your repository to your computer using `git clone --recursive` to make sure you get all the tools.

Discount must be built from its source code before it can be used to convert our Markdown to HTML. Run the command `build-tools` from the `tools` directory to build it. TODO: update if other tools are required.

Once the tools are built, run the `build-docs` command from the main directory to copy all Markdown documents in the `source` directory to the `docs` directory and create HTML versions. Open `docs/index.html` in your web browser to view.

Every time you make a change, you can preview it by running the `build-docs` command and opening the desired document in your web browser.


## Pull requests

TODO: Clearly list expectations for pull requests, very basic GitHub notes here.
TODO: Notes on rejection.


## Publishing

[HandBrake Documentation](https://handbrake.fr/docs/) on the official website is automatically updated after a short delay.

*Please wait at least 24 hours for changes to appear before reporting problems.*


## More information

TODO: Links to the HandBrake website, forum, more ways to contribute, etc.
