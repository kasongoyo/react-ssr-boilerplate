export default ({ body, helmet }) => {
  return `
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        </head>
        
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root">${body}</div>
          <script src="dist/client.js" async></script>
        </body>
      </html>
    `;
};