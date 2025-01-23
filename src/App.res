@react.component
let make = () => {
  <div className="max-w-5xl">
    <Player
      url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
      options={
        autoplay: false,
        controls: true,
        fluid: true,
      }
    />
  </div>
}
