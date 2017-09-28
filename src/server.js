/*eslint no-unused-vars: ["error", { "args": "none" }]*/

//react
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'App';
import template from './template';
import { Helmet } from 'react-helmet';


export default function serverRender({ clientStats, serverStats }) {
	return (req, res, next) => {
		// Render the component to a string
		const context = {};
		const body = renderToString(
			<Router location={req.url} context={context}><App /></Router>
		);

		const helmet = Helmet.renderStatic();

		// Send the rendered page back to the client
		res.send(template({ body, helmet }));
	};
}
