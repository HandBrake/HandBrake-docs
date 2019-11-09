---
Type:            article
State:           [ draft ]
Title:           Anamorphic Guide
Project:         HandBrake
Project_URL:     https://handbrake.fr/
Project_Version: 1.3.0
Language:        English
Language_Code:   en
Authors:         []
Copyright:       2019 HandBrake Team
License:         Creative Commons Attribution-ShareAlike 4.0 International
License_Abbr:    CC BY-SA 4.0
License_URL:     https://handbrake.fr/docs/license.html
---

Anamorphic Guide
=============================

Short Visual Example
--------------------------

These are scaled down 50% in size, in case you couldn't tell.

Here's the size of a movie stored on a DVD. On the disc, the film is distorted. Instead of being truly widescreen, it's squeezed into a narrower frame.

![Storage Resolution](../../images/anamorphic/storage_size.png)

To restore the proper shape, you can either squeeze the picture vertically or stretch the picture horizontally. One shrinks the image, and one expands it.

Here's the size of a movie that's been squeezed vertically. This shrinks the image. Notice how the width stays the same as what's stored on the DVD, but the height is reduced:

![Corrected Display Resolution](../../images/anamorphic/storage_size.png)

Here's the display size of a movie that's been stretched horizontally -- HandBrake's default. This expands the image. Note that it preserves the full height of the image stored on the DVD:

![Anamorphic Display Resolution](../../images/anamorphic/storage_size.png)

Anamorphic in HandBrake means encoding that distorted image stored on the DVD, but telling the video player how to stretch it out when you watch it. This produces that nice, big, widescreen image.

Enabling Anamorphic PAR
--------------------------

You can enable anamorphic support via the Picture Settings tab on the main window.

Anamorphic DVDs
--------------------------

An image is stored on a DVD at 720*480 (NTSC) or 720*576 (for PAL). I'm in North America so I'll be using NTSC numbers in my examples. (See the PAL appendix for the differences.)

This is what the image stored on an anamorphic NTSC DVD looks like (for information on non-anamorphic DVDs, see the Hard Letterboxing Appendix):

![Anamorphic DVD Example](../../images/anamorphic/storage_size.png)

Notice how it's distorted? That's the anamorphic part. DVDs are stored with a 1.5:1 aspect ratio.

## Aspect Ratios

Wait, aspect ratio? What?

Aspect ratio is the width, divided by the height. DVDs are stored with a 720*480 resolution, and 720 / 480 = 1.5. That means it's 1.5 times wider than it is tall.

But video isn't meant to be seen with a 1.5:1 aspect ratio. It's not wide enough for movies and widescreen TV, and too wide for standard TV. One common widescreen aspect ratio is 1.78:1, or 16/9. This is the native aspect ratio of widescreen TVs. Standard TVs use an aspect ratio of 4/3 (1.33:1).

DVD video has an "aspect ratio flag" which tells the DVD player how to distort the picture stored on the DVD to recreate the original film aspect ratio. This flag is either 4/3 or 16/9.

Of course, a lot of movies are wider than 16/9. One popular aspect ratio is 2.35:1, which is quite a bit wider. When this is stored on a DVD, it too is given the 16:9 aspect ratio flag. Of course, the content itself is wider. To cope with this, black bars (letterboxing) line the top and bottom of the picture. This can be a difficult part to grasp. At least, it was for me. So I'm going to repeat this with a few different wordings.

## Letterboxing

When anamorphic DVD content is stretched for viewing on a widescreen TV, it *always* stretches to 854*480. 480 is too "tall" for films wider than 16:9. To make it "shorter" the top and bottom are matted with black lines. So whether a movie has an aspect ratio of 1.78:1, 1.85:1, or 2.35:1, it is always going to displayed 854 pixels wide. The visible frame height (when you remove the letterboxing) just gets shorter and shorter to match the aspect ratio—480, 460, and 360, consecutively. (Those height and width values are only approximate. For details, see the Macroblock Appendix.)

The storage width is the width of the visible frame on the DVD (almost always 720) and the display width is 854 (storage height of 480 times 16/9). The display height is the height of the visible frame on the DVD—the frame after cropping away black bars. This is going to be roughly equivalent to the display width divided by the film's aspect ratio.

## What happens on a TV

When you play the DVD on a widescreen 16:9 television, it keeps the height and stretches the width (854*480). This is what it means when a DVD box proclaims "Enhanced for widescreen." When you play the DVD on a standard 4:3 television, it reduces the width to 640 (the maximum width for a standard TV) and squishes the height to 360 to match the aspect ratio.

Both ways recreate the film's aspect ratio. The first way multiplies the height (480) by a 16:9 aspect ratio, and uses that for the width. The second method takes the width (720), reduces it to the maximum width of a standard TV (640), divides it by the film's aspect ratio (1.78:1 aka 16:9), and uses that as the height.

## Flexibility
To put this another way, "anamorphic" means the movie doesn't have a single, native shape that you watch. Instead, it shape-shifts. If you're watching it on a standard TV, it morphs to fit it. When you play it on a widescreen TV, it morphs to fit it, too.

What happens when anamorphic is turned off
-------------------------------------------
When Anamorphic is disabled, HandBrake corrects the aspect ratio by maintaining the width and squishing the height to match. The result looks like this:

![Anamorphic Turned Off](../../images/anamorphic/storage_size.png)

This is very similar to what happens when you play a DVD on a standard 4:3 television. The only difference is, HandBrake leaves the width at 720, instead of reducing it to 640. So it divides 720 by the aspect ratio, giving you output dimensions of 720*404. (If you're testing me on this and you get a width of 704 or a height of 400, please see the Macroblock Appendix.)

Of course, that means you're reducing the vertical line count from 480p to 404p... a significant reduction in picture quality.

There are other ways to go about encoding the anamorphic video, in order to keep that from happening.


Anamorphic encoding methods
-------------------------------------------

### Crude anamorphic
The crude way (which is easily done from !HandBrakeCLI), is to maintain the height and "hard" stretch the frame width to 854 (for details, see the CLI Appendix). The problem with this is that you end up storing an image that's got a higher resolution than your DVD source—it takes up more space. Instead of a 720*480 frame or a 720*404 frame, you're writing a 854*480 frame to disk.

### Strict anamorphic
The second method is far less wasteful. Why not do the same thing a DVD does? Store in one aspect and display in another.

With this method, you can preserve the full frame on the DVD, without having to store it at its wider display resolution. Compared to storing 854*480 on disk, storing 720*480 reduces file size while maintaining exactly the same quality.

Now, how do we go about doing this?

Video on a computer is stored in a container file, be it .mp4 or .mkv or .avi or .ogm or something else. Inside that container are tracks or streams. Usually, there will be one video track and one audio track.

The smart way of handling anamorphic is to store the display information in the video track. And this is exactly what HandBrake does:

![Anamorphic Strict](../../images/anamorphic/storage_size.png)

### Pixel Aspect Ratio
In fact, it is displaying 720*480. Only, the video track is telling VLC: "Display this with wide pixels instead of the square ones you usually use." So instead of an image of square blocks, it becomes an image of wide rectangular blocks.

Because computers think of video in terms of square pixels, VLC has to figure out what arrangement of square pixels is needed to reproduce the image in its correct dimensions. It does this by multiplying the storage width (720) by a ratio: the Pixel Aspect Ratio, or PAR. By default, the PAR is 1:1. With that ratio, what you see is what you get—square pixels. The video is stored and displayed with the same dimensions. In order to recreate 16:9 pixels from 1:1 pixels, the ratio is 32/27 (16*2 / 9*3). For every 32 square pixels across, it uses 27 square pixels up and down. You already know this, another way: it produces the same results as multiplying the height (480) by 16/9. Multiply 720 by 32 and divide that by 27, and you end up with 854, the display width in square pixels.

This is anamorphic PAR, and it is very, very sexy.

### The downside of strict anamorphic
Strict anamorphic concentrates on one thing and one thing only: preserving the exact visible frame of a DVD, displayed to exactly the same size as it would be from the DVD.

This means it will sometimes use odd dimensions, ones that don't divide cleanly by 16. When this happens, the video encoders cannot work as efficiently — x264 warns that "compression will suffer."

It also means that, when using strict anamorphic, it is impossible to change the stored size of the encoded frame. It will simply use the exact frame size of the DVD and apply cropping.

### Loose anamorphic

Loose anamorphic starts off the same way as strict -- with the exact visible frame on the DVD. But then it adjusts the dimensions to be sure they divide cleanly by 16. After that, it adjusts the display size so the film's aspect ratio is preserved with the new dimensions.

You can also scale the width of the storage frame, using loose anamorphic. For example, the full-sized storage frame has a width of 720. You could scale that down to 640. HandBrake will automatically keep the aspect ratio of the storage frame. So as the full-sized is 720*480 (a 1.5:1 aspect ratio), a scaled down one would be 640*432 (as close as one can get to 1.5:1 while keeping dimensions that divide cleanly by 16). HandBrake will then calculate the proper display size for that scaled frame, one which preserves the source's film aspect ratio.

There are some other minor differences in the output of loose versus strict, but they are nerdy. Only the curious and sleepless need bother reading about them in the ITU appendix.

What about QuickTime? And iPods? And AppleTVs? And iPhones?
----------------------------------------------------------------
In order to preset anamorphic video in QuickTime, HandBrake adds extra display information to the .mp4 container wrapping the video, called a picture aspect atom.

This is different from the information in the video stream, but achieves the same effect.

In this manner, HandBrake creates anamorphic video that can be displayed with QuickTime, as well as with iPods, as well as with iPhones, as well as with AppleTVs, as well as with open source video players like VLC and MPlayer.

Further Reading
-----------------

[Wikipedia: Anamorphic Widescreen](https://en.wikipedia.org/wiki/Anamorphic_widescreen)

Appendices
-----------------

## Command Line (CLI) 

### Hard stretching to anamorphic in HandBrakeCLI
It's really easy. You just have to specify the visible frame height. Say your command is:

    ./HandBrakeCLI -i dvd -o movie.mp4
    
What you add for anamorphic encoding depends on the film's aspect ratio.

   - 1.78:1 means adding "-l 480" to the end of the command.
   - 1.85:1 means adding "-l 460"
   - 2.35:1 means adding "-l 360"
So for a 1.85:1 movie your complete command would be:

    ./HandBrakeCLI -i dvd -o movie.mp4 -l 460
    
What this is going to do is give you output dimensions of 854*460. That means you are storing a movie with a frame size 33% larger than the DVD. So only use it to play around. It's a total waste of storage space.

Instead do...

### Anamorphic PAR in HandBrakeCLI
This is even easier. For strict anamorphic just add a "-p" like so:

    ./HandBrakeCLI -i dvd -o movie.mp4 -p
    
And for loose anamorphic, use a "-P":

    ./HandBrakeCLI -i dvd -o movie.mp4 -P
    
That will output a movie with dimensions of 720*480 (for a 1.78:1 NTSC film) but which QuickTime, VLC, and MPlayer will display as 854*480. The same display as a hard stretched anamorphic DVD, without storing a 33% larger image.

Note that when using loose anamorphic, you can also include a storage width to use. In addition, you can choose what number the dimensions should divide by cleanly. By default, this is 16, the size of MPEG macroblocks. It is passed as the optional argument to -P.

So, for example, to do an anamorphic encode to a frame sized 640*424, you could use:

    ./HandBrakeCLI -i dvd -o movie.mp4 -w 640 -P=8
    
    
## Hard Letterboxing Appendix
  
Some widescreen DVDs, especially older ones, aren't anamorphic. These DVDs are specifically designed to play on standard 4:3 TVs. The "aspect ratio flag" for these discs is set to 4:3 even though the content's aspect ratio is wider.

![Hard Letterbox](../../images/anamorphic/storage_size.png)

When you play it on a standard square TV, everything's shiny. However, when you play it on a widescreen TV, you will have black bars not only on the top and bottom, but also on the sides. This gives you a far smaller picture. Those side-bars are often called "pillars." This technique is often used in broadcast television to deliver 16/9 content to standard definition sets. Because it gives you an even smaller picture than letterboxing does, it's sometimes called postage-stamping.


## Macroblock Appendix

MPEG video encoders (like the MPEG-2 used on DVDs or the MPEG-4 variants used by HandBrake) work by dividing the video frame into blocks. The entire frame becomes a grid of blocks, 16 pixels high and 16 pixels wide. These 16x16 blocks are called macroblocks. When you encode video, you have to use height and width values that are multiples of 16. When the height or width doesn't divide cleanly into 16 (that is to say, when there is a remainder), the video encoder has to make up extra "garbage" information for the edges of the frame. This increases the file size or decreases the video quality, depending on whether you're targeting a constant quality or a size/bitrate.

An unhappy side effect of this is that aspect ratios can only be approximate. 720*360 is the storage dimensions of a 2.35:1 movie after cropping. But because 360 is not divisible by 16, you have to bump up to 368 or down to 352. Suddenly the display aspect ratio is 2.32:1.

This is why sometimes, using HandBrake with anamorphic encoding disabled, you will get an output width of 704 for a 1.78:1 film. For whatever reason, HandBrake has decided it needs a width that is slightly lower than 720. But in order to honor macroblocking requirements, widths have to be divisible by 16. 704 is next possible width lower than 720.

Similarly, even though the "perfect" height for a movie 720 pixels wide with a 1.78:1 aspect ratio would be 404, that number isn't cleanly divisible by 16, while 400 is.

When using "strict" anamorphic, HandBrake ignores macroblocking requirements for anamorphic encoding. It makes perfectly preserving the visible frame with a precise aspect ratio its top priority.

When using loose anamorphic, HandBrake uses dimensions that divide cleanly by 16. Using the CLI, you can also tell it to use a different number. Sometimes using 8 instead of 16 allows dimensions that are far closer to the correct aspect ratio.


