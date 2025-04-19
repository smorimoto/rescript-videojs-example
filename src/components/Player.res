@react.component
let make = (~url, ~options) => {
  let videoRef = React.useRef(Js.Nullable.null)

  React.useEffect(() => {
    switch videoRef.current->Js.toOption {
    | Some(element) =>
      let player = Videojs.videojs(~id=#Element(element), ~options)
      player->Videojs.ready(~fn=() => Videojs.src(player, url), ~sync=true)
      Some(() => player->Videojs.dispose())
    | None =>
      "Video element reference is not available - unable to initialise the player"->Js.Console.error
      None
    }
  }, [url])

  <video className="video-js" ref={ReactDOM.Ref.domRef(videoRef)} />
}
