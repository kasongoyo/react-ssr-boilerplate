export default ({ body, helmet }) => {
  return `
      <!DOCTYPE html>
      <html>
        <head ${helmet.htmlAttributes.toString()}>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="dist/styles.css">
        </head>
        
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${body}</div>
          <script src="dist/client.js" async></script>
        </body>
      </html>
    `;
};