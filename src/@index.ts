/**
 * 
 * Name: @sheetbase/handlebars-server
 * Description: Handlebars for Google apps script.
 * Version: 4.0.11-1
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/module-handlebars-server.git
 *
 */
 
declare const handlebarsModuleExports: {(): any};

export const Handlebars = handlebarsModuleExports();
for (const prop of Object.keys({... Handlebars, ... Object.getPrototypeOf(Handlebars)})) {
	this[prop] = Handlebars[prop];
}

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