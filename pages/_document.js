import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <NextScript
          src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
          integrity="sha384-OMW7KvIxnT6b4rD6UHtuGOn9gt6jBf/FF0V+iwGgSWiBhZ1xOy1D2XBdjzI2v6Xr"
          crossorigin="anonymous"
        ></NextScript>
        <NextScript
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.3/umd/popper.min.js"
          integrity="sha512-qz4Wi4hYw8RNnJk7nCtQhzaSjgWtNUvbxnDZuPUurCEkaV7kYumQ57+V5yjxftobfVuk1uEqKRph9NX7JN5Omg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></NextScript>
        <NextScript
          src="https://maxcdn.bootstrapcdn.com/bootstrap/5.1.0/js/bootstrap.min.js"
          integrity="sha384-WmFhZFygsGJxcVTF+lnOg1GeXlZQcHsoIjpWw+8zi1YTnTxfT+RVthLHpvfmh8PI"
          crossorigin="anonymous"
        ></NextScript>
      </body>
    </Html>
  );
}
