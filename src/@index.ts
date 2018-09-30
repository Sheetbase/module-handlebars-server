/**
 * 
 * Name: @sheetbase/handlebars-server
 * Description: Handlebars for Google apps script.
 * Version: 4.0.11
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/module-handlebars-server.git
 *
 */
 
declare const handlebarsExports: {(): any};
const handlebars = handlebarsExports();
const Handlebars = handlebars;

for (const key of Object.keys(handlebars)) {
	this[key] = handlebars[key];
}

export { handlebars, Handlebars };

export function sheetbase_handlebars_example1(): void {
	const source: string = '<p>Hello, my name is {{name}}. ' +
							'I am from {{hometown}}. I have {{kids.length}} kids:</p>' +
							'<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>';
	const template = Handlebars.compile(source);
	const data = {
					name: 'Alan',
					hometown: 'Somewhere, TX',
					kids: [
						{name: 'Jimmy', age: '12'},
						{name: 'Sally', age: '4'}
					]
				};
	let result = template(data);
	Logger.log(result);
}