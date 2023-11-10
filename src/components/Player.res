@react.component
let make = (~url, ~options) => {
  let videoRef = React.useRef(Js.Nullable.null)

  React.useEffect1(() => {
    let video = Videojs.videojs(
      ~id=#Element(videoRef.current->Js.toOption->Option.getUnsafe),
      ~options,
    )

    video->Videojs.ready(~fn=() => Videojs.src(video, url), ~sync=true)

    Some(() => video->Videojs.dispose())
  }, [url])

  <video className="video-js vjs-big-play-centered" ref={ReactDOM.Ref.domRef(videoRef)} />
}
