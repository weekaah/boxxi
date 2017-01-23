# Boxxi
Boxxi is a simple custom video player plugin written in plain/vanilla JavaScript.

## Demo
[Plugin in action](weekaah.github.io/boxxi)

## Installation

Include `boxxi.min.css` and `boxxi.min.js`.
```html
<!-- stylesheet -->
<link rel="stylesheet" href="boxxi.min.css">

<!-- javascript -->
<script src="boxxi.min.js"></script>
```


## Usage

Initialize the plugin by running `boxxi();`.
First argument is the selector and is mandatory, while the second argument (options) can be omitted and will fall
back on defaults.

```html
<video class="myVideo" src="somevideo.mp4"></video>

<script>
  boxxi('.myVideo');
</script>
```

## Options

Pass a "options" object as a second argument to override the plugin defaults.

```js
boxxi('.myVideo', {
  // Options
});
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| playLabel | string | "Play video" | Play button title tag content. |
| pauseLabel | string | "Pause video" | Pause button title tag content. |
| stopLabel | string | "Stop video | Stop button title tag content. |
| muteLabel | string | "Mute video" | Mute button title tag content. |
| unmuteLabel | string | "Unmute video" | Unmute button title tag content. |
| volumeLabel | string | "Volume" | Volume range title tag content. |
| fullLabel | string | "Full screen" | Full screen button title tag content. |
| exitfullLabel | string | "Exit full screen" | Exit full screen button title tag content |
| autoPlay | bool | false | Autoplays the video|
