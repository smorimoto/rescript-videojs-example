type t

@dead
type playerOptions = {
  autoplay?: bool,
  controls?: bool,
  fluid?: bool,
}

@module("video.js")
external videojs: (
  ~id: @unwrap
  [
    | #String(string)
    | #Element(Dom.element)
  ],
  ~options: playerOptions,
  ~ready: unit => 'a=?,
) => t = "default"

@send @return(nullable) external src: (t, string) => option<string> = "src"

@send external dispose: (t, unit) => unit = "dispose"

@send external ready: (t, ~fn: unit => 'a, ~sync: bool=?) => unit = "ready"
