%%raw("import 'modern-css-reset/dist/reset.min.css'")

let () = {
  switch ReactDOM.querySelector("#root") {
  | Some(root) => root->ReactDOM.Client.createRoot->ReactDOM.Client.Root.render(<App />)
  | None => ()
  }
}
