export default ({ body, title }) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" type="text/css" href="/assets/bundle.css"></style>

    </head>
    <body>
      <div id="root">${body}</div>
    </body>
    <script src="/assets/bundle.js"></script>
  </html>
`);