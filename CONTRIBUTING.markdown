Contributing
============

Thank you for your interest in contributing documentation for HandBrake.

*Everyone should first [read the existing docs](https://handbrake.fr/docs/) before submitting changes*.

If you're a non-technical person, feel free to suggest changes via the [HandBrake Community Forums](https://handbrake.fr/forum/) (registration is free) or [open an issue on GitHub](https://github.com/HandBrake/HandBrake-docs/issues) (also free). To report minor issues (typos, etc.) or to ask questions, say hi on the [HandBrake IRC channel](https://handbrake.fr/community.php).

You may work directly on the source documents by [creating a GitHub account](https://github.com/join) and forking [HandBrake/HandBrake-docs](https://github.com/HandBrake/HandBrake-docs/). See *Working with the source files* for more information.


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

Similarly, the HandBrake Documentation is the product of volunteer work and provided to the general public essentially for free, under the [Creative Commons Attribution-ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/).

Basically, nobody working on HandBrake or HandBrake Docs owes you anything. So please be kind, considerate, and constructive in your contributions and criticisms of what is being freely provided to you.


## Writing style and presentation

TODO: Style notes here.


## Document format

*We're aware of disagreements regarding Markdown implementation differences, attempts at standardization, and even file name extensions. We ask that you respect the non-political nature of this project by discussing these topics elsewhere, and politely suggest that time is better spent writing quality documentation.*

The documentation's source files are written in [Markdown](https://en.wikipedia.org/wiki/Markdown) and use the `.markdown` file extension.

Metadata such as title, author, and license information is included at the top of each Markdown document in the form of [YAML](https://en.wikipedia.org/wiki/YAML) headers, allowing each document to be self-describing.

For publishing, the Markdown text is converted to [HTML](https://en.wikipedia.org/wiki/HTML) using [Discount](http://www.pell.portland.or.us/~orc/Code/discount/) and wrapped in an HTML template for presentation.

[UTF-8](https://en.wikipedia.org/wiki/UTF-8) (without BOM) and [Unix (LF) newlines](https://en.wikipedia.org/wiki/Newline) everywhere.

More technical details are available under *Working with the source files*.

### Document example

Here is an example excerpt from `source/en/latest/introduction/quick-start.markdown`:

```
---
Type:            article
Title:           Quick start
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Text_Encoding:   utf-8
Authors:         Bradley Sepos <bradley@bradleysepos.com>
Copyright:       2016 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Quick start
===========

HandBrake takes videos you already have and makes new ones that work on your mobile phone, tablet, TV media player, game console, computer, or web browser—nearly anything that supports modern video formats.

This quick start guide assumes you have already downloaded and installed HandBrake. If you do not already have HandBrake, please see [Downloading and installing HandBrake](../get-handbrake/download-and-install.html).

Let's get started.

...
```

The document begins with a YAML section encapsulated by two sets of three dashes (`---`). This allows us to describe the document in a standard manner that both humans and computers can read. The YAML section is typically followed by a blank line for legibility.

The rest of the document is Markdown. Anything you see in the published documentation is written here in this format.

### Markdown formatting

Markdown is a [markup language](https://en.wikipedia.org/wiki/Markup_language) that allows plain text to be "marked up" with special identifiers to enhance formatting and meaning. Markdown directly translates into [HTML](https://en.wikipedia.org/wiki/HTML), while being easier to read and write than HTML.

In the example, the underlined "Quick start" text is a heading, and there is a link at the end of the second sentence. We could have added stars around certain words to indicate emphasis, for instance \*italics\* (*italics*) or \*\*bold\*\* (**bold**).

If you are unfamiliar with Markdown and would like to know more, GitHub has a guide called [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) that may be helpful.

### Markdown extensions

The build system extends Markdown in some notable ways.

Images with a title are treated as implicit figures. The title becomes the caption for the figure and the image is linked to itself, allowing for better presentation.

```
![Alternate text](path/to/image.png)

![Alternate text](path/to/image.png "Title/caption")
```

The above example renders to:

```
<p><img src="path/to/image.png" alt="Alternate text" /></p>

<figure><a href="path/to/image.png"><img src="path/to/image.png" alt="Alternate text" /></a><figcaption>Title/caption</figcaption></figure>
```

Special HTML comments may be used to differentiate instructions for Linux, Mac, and Windows, allowing for better presentation. Wrap the appropriate sections in special HTML comments as follows:

```
General instructions here.

<!-- .system-lin -->

Special instructions for Linux here.

<!-- /.system-lin -->

<!-- .system-mac -->

Special instructions for Mac here.

<!-- /.system-mac -->

<!-- .system-win -->

Special instructions for Linux here.

<!-- /.system-win -->

More general instructions here.
```

Try to group relevant pieces of information together to form a cohesive whole. It is usually unnecessary for an entire article to be separated into system-specific instructions. Likewise, it is usually unnecessary to have more than a few system-specific sections. That said, there is no per-article limit to the number of system-specific sections.


## Working with the source files

### Requirements

To work directly with the source files, the following is a basic list of requirements:

- OS X, Linux, or compatible†
- Bash shell

The following components are suggested, but not required:

- [GNU Parallel](https://www.gnu.org/software/parallel/)

† Windows users may freely edit the source files, but the build system requires a *nix-compatible environment. One option is to build using Linux in a virtual machine.

### Getting the source

If you're new to using Git or GitHub, check out [GitHub Guides](https://guides.github.com/) to get started. You will need to [create a GitHub account](https://github.com/join) and fork [HandBrake/HandBrake-docs](https://github.com/HandBrake/HandBrake-docs/).

Every copy of the source files includes additional third-party tools needed build the HTML documentation from the Markdown source. Make sure to clone your fork to your computer using `git clone --recursive` to get all the tools.

### Building

Copy the example configuration file `config-example.yaml` to `config.yaml`.

Run `build-tools` from the main directory to build all associated third-party tools.

Once the tools are built, run `build-docs` from the main directory to build the HTML documentation in the `docs` directory. You may now view and interact with the documentation by opening `docs/index.html` in your web browser.

Security restrictions in modern web browsers may prevent web fonts from displaying properly when viewing local files. One workaround is to serve the files instead of opening them directly. From the main directory, run `python -m http.server 8000 || python -m SimpleHTTPServer 8000` and then open `http://localhost:8000/docs/` in your web browser (requires Python).

### Editing

Before editing the documentation, first create and switch to an appropriately named local branch to track your changes (e.g. `git checkout master; git checkout --branch branch-name`). This allows you to make as many changes as you like without affecting the `master` branch, and helps identify groups of changes when submitting pull requests later on.

To make a change, edit the appropriate file(s) in the `source` directory. Run `build-docs` again from the main directory to rebuild the HTML documentation in `docs` including your changes.

### Submitting your changes

When you've finished editing the documentation, commit your changes and push your local branch to your fork on GitHub. You may then open a pull request using the GitHub website. For more on this workflow, read [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/).

While it is our goal to allow everyone to contribute, contributions not meeting the project's standards may be rejected. If this happens to you, don't fret. We usually provide reasons for rejection to give you the opportunity to correct anything out of place. Make sure to review the guidelines herein, and consider asking first before attempting to make sweeping changes.


## Publishing

[HandBrake Documentation](https://handbrake.fr/docs/) on the official website is automatically updated after a short delay.

*Please wait at least 24 hours for changes to appear before reporting problems.*


## More information

[HandBrake Website](https://handbrake.fr)  
[HandBrake Community Forums](https://handbrake.fr/forum/)  
[HandBrake on GitHub](https://github.com/HandBrake)
