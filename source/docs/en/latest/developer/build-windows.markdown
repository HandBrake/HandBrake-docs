---
Type:            article
Title:           Building HandBrake for Windows
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: Latest
Language:        English
Language_Code:   en
Authors:         [ Bradley Sepos <bradley@bradleysepos.com> (BradleyS), Scott (s55) ]
Copyright:       2026 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Building HandBrake for Windows
==============================

Building HandBrake for Windows requires two steps:

1. Cross-compiling the LibHB core library (`hb.dll`) and HandBrake [CLI](abbr:Command Line Interface) on Linux using a [MinGW-w64](https://mingw-w64.org/) toolchain
2. Building the HandBrake [GUI](abbr:Graphical User Interface) on Windows using [Microsoft Visual Studio Community](https://visualstudio.microsoft.com/vs/community/)

LibHB can also be downloaded from [HandBrake development snapshot builds](https://github.com/HandBrake/handbrake-snapshots/) if you only want to build the HandBrake GUI on Windows. If you want to run the latest unreleased HandBrake code without building anything yourself, you can download a development snapshot of HandBrake from there, with everything including the GUI, and skip the rest of this guide.

## Cross-compiling LibHB and HandBrake CLI on Linux

These instructions are for recent [Ubuntu Linux](https://ubuntu.com/) [LTS](abbr:Long-Term Support) releases. Recent releases from other Linux distros may work as well, but are not officially supported by the HandBrake project. Physical machines, virtual machines, containerized machines, and [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) are all valid options for running Ubuntu Linux.

### Installing dependencies

Begin by installing all dependencies specified in the guide [Installing dependencies on Ubuntu](install-dependencies-ubuntu.markdown).

### Cross-compiling for Windows ARM machines

*This section is for running HandBrake on ARM-based Windows machines only (not x64). You can find the type of machine you have by opening Windows Settings and navigating to System > About.*

After installing the Ubuntu dependencies, continue on Ubuntu as follows.

To build with Dolby Vision support, install the additional Rust dependencies for Windows ARM.

    rustup target add aarch64-pc-windows-gnullvm

Download and extract the prebuilt LLVM MinGW-w64 toolchain, available from [HandBrake toolchains releases](https://github.com/HandBrake/HandBrake-toolchains/releases) and [LLVM MinGW project releases](https://github.com/mstorsjo/llvm-mingw/releases).

    PREV_DIR="${PWD}"
    mkdir -p "${HOME}/toolchains"
    cd "${HOME}/toolchains"
    curl -LO "https://github.com/HandBrake/HandBrake-toolchains/releases/download/1.0/llvm-mingw-20260324-ucrt-ubuntu-22.04-$(uname -m).tar.xz"
    tar -xf "llvm-mingw-20260324-ucrt-ubuntu-22.04-$(uname -m).tar.xz"
    export PATH="${HOME}/toolchains/llvm-mingw-20260324-ucrt-ubuntu-22.04-$(uname -m)/bin:${PATH}"
    cd "${PREV_DIR}"

    # command to make persistent across sessions (optional)
    # replace "${HOME}/.bashrc" with the path to your shell startup script if different
    # echo "export PATH=\"${HOME}/toolchains/llvm-mingw-20260324-ucrt-ubuntu-22.04-$(uname -m)/bin:\${PATH}\"" >> "${HOME}/.bashrc"

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Build LibHB and the HandBrake CLI using the cross-compilation toolchain.

    ./configure --cross=aarch64-w64-mingw32 --launch-jobs=$(nproc) --launch

### Cross-compiling for Windows x64 machines

*This section is for running HandBrake on x64-based Windows machines only (not ARM). You can find the type of machine you have by opening Windows Settings and navigating to System > About.*

After installing the Ubuntu dependencies, continue on Ubuntu as follows.

To build with Dolby Vision support, install the additional Rust dependencies for Windows x64.

    rustup target add x86_64-pc-windows-gnu

Clone the HandBrake repository.

    git clone https://github.com/HandBrake/HandBrake.git && cd HandBrake

Install the additional dependencies required to build the GCC MinGW-w64 toolchain.

    sudo apt-get install bison bzip2 curl flex g++ gcc gzip m4 make pax

Build the GCC MinGW-w64 toolchain using the `mingw-w64-build` script included with HandBrake and available from [mingw-w64-build](https://github.com/bradleysepos/mingw-w64-build).

    scripts/mingw-w64-build x86_64

The process will take a few minutes and then provide you with a command to run to update your environment's `PATH` variable. Do this now to ensure that HandBrake's build system can find the toolchain.

Build LibHB and the HandBrake CLI using the cross-compilation toolchain.

    ./configure --cross=x86_64-w64-mingw32 --launch-jobs=$(nproc) --launch

### Locating the build product

When cross-compiling completes successfully, two important artifacts are produced:

- `HandBrakeCLI.exe` in the `build` directory, which is the HandBrake command line interface. If you do not intend to build and use the graphical interface, this program is all you need. Copy it to your Windows installation, and run it via the Windows Command Prompt or Windows Powershell in the Windows Terminal app.
- `hb.dll` in the `build/libhb` directory, which is the LibHB core library used by the HandBrake GUI for Windows. You will need to copy this file to the output folder on your Windows machine after you have built the graphical interface in the next section.

### Troubleshooting

If building HandBrake fails, continue building as much as possible, then build serially (only one job at a time) and investigate any errors printed at the end.

    make --directory=build --jobs=$(nproc) --keep-going || make --directory=build --jobs=1

Build failures are often due to missing dependencies. Ensure you have followed all of the above instructions for installing dependencies.

To start over, simply remove the `build` directory.

    rm -rf build

If you still have issues, someone may be able to help via HandBrake's [Community support](../help/community-support.markdown) channels.

## Building the HandBrake GUI on Windows

The following tools are required to build the HandBrake GUI.

- [Microsoft Visual Studio Community](https://www.visualstudio.com/vs/community/)
- Git client to download the HandBrake source code
  - [Atlassian Sourcetree](https://www.sourcetreeapp.com) (graphical interface, recommended)
  - [Git for Windows](https://git-scm.com/install/windows) (command line interface)
  - Client included with Visual Studio

Begin by downloading and installing the required tools.

Clone the HandBrake repository at `https://github.com/HandBrake/HandBrake.git` using your Git client. If you are using Git for Windows, the command is:

    git clone https://github.com/HandBrake/HandBrake.git

Navigate to the `win\CS` folder and open the `HandBrake.sln` solution file in Visual Studio. In the Visual Studio Solution Explorer pane, right-click on the `HandBrakeWPF` project and choose "Set as Startup Project".

To build the HandBrake GUI, choose Build > Build Solution from the Visual Studio main menu. The build process will take a few moments.

When completed, navigate to the `win\CS\HandBrakeWPF\bin` folder. The `Debug` folder contains the built HandBrake GUI[^solution-configuration]. Copy the LibHB core library `hb.dll` file you previously downloaded or built to the `Debug` folder.

Now that you have completed building HandBrake, you can rename the folder to whatever you prefer, e.g., `HandBrake`, and copy or move it to another location on your system if desired. If you want to run multiple isolated copies of HandBrake on your machine, rename the `portable.ini.template` file inside the folder to `portable.ini`.

Open `HandBrake.exe` to launch HandBrake.

## Troubleshooting

If you encounter any issues, someone may be able to help via HandBrake's [Community support](../help/community-support.markdown) channels.

[^solution-configuration]: If you changed the solution configuration from `Debug` to `Release` in Visual Studio, the `Release` folder contains the built HandBrake GUI.
