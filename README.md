# Sheetbase Module: handlebars-server

Using Handlebars.js in Google Apps Script. See: https://github.com/wycats/handlebars.js/

## Install

- NPM: ``$ npm install --save @sheetbase/handlebars-server``

- As library: ``1onxq7LQFPM7BgErdOCogyc6_BIqCpnoINv6BqoYrYpNsj7U0ayRulVB2`` (set Indentifier to **Handlebars**, [view code](https://script.google.com/d/1onxq7LQFPM7BgErdOCogyc6_BIqCpnoINv6BqoYrYpNsj7U0ayRulVB2/edit?usp=sharing))

## Usage

```ts
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
```

## License

[MIT][license-url]

[license-url]: https://github.com/sheetbase/module-handlebars-server/blob/master/LICENSE