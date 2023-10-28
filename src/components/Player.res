%%raw("import 'video.js/dist/video-js.min.css'")

@react.component
let make = (~url) => {
  let videoRef = React.useRef(Js.Nullable.null)

  React.useEffect1(() => {
    let video = Videojs.videojs(
      ~tag=videoRef.current->Js.Nullable.toOption->Option.getExn,
      ~options={
        autoplay: false,
        controls: true,
        fluid: true,
      },
    )

    video->Videojs.ready(~fn=Videojs.src(video, url), ~sync=true)

    Some(() => video->Videojs.dispose())
  }, [url])

  <video className="video-js vjs-big-play-centered" ref={ReactDOM.Ref.domRef(videoRef)} />
}
