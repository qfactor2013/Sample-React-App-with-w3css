import React, { Fragment } from 'react';

const Link = () => (
  <Fragment>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <meta property="og:title" content="Qfactor Introduce"/>
    <meta property="og:description" content="Qfactor Introduce"/>
    <meta property="og:image" content="%PUBLIC_URL%/og-image.jpg"/>
    {/* // <!--
    //     manifest.json provides metadata used when your web app is added to the
    //     homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    //   --> */}
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="stylesheet" href="%PUBLIC_URL%/w3.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    {/* // <!--
    //     Notice the use of %PUBLIC_URL% in the tags above.
    //     It will be replaced with the URL of the `public` folder during the build.
    //     Only files inside the `public` folder can be referenced from the HTML.

    //     Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
    //     work correctly both with client-side routing and a non-root public URL.
    //     Learn how to configure a non-root public URL by running `npm run build`.
    //   --/> */}
    <title>Qfactor Introduce</title>
  </Fragment>
);
export default Link;
