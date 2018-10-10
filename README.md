# Sheetbase Module: @sheetbase/handlebars-server

Handlebars for Google apps script.

<!-- <content> -->

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </content> -->

## Install

- Using npm: `npm install --save @sheetbase/handlebars-server`

- As a library: `1onxq7LQFPM7BgErdOCogyc6_BIqCpnoINv6BqoYrYpNsj7U0ayRulVB2`

  Set the _Indentifier_ to **Handlebars** and select the lastest version, [view code](https://script.google.com/d/1onxq7LQFPM7BgErdOCogyc6_BIqCpnoINv6BqoYrYpNsj7U0ayRulVB2/edit?usp=sharing).

## Examples

```ts
function example1(): void {
  const source: string =
    "<p>Hello, my name is {{name}}. " +
    "I am from {{hometown}}. I have {{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
  const template = Handlebars.compile(source);
  const data = {
    name: "Alan",
    hometown: "Somewhere, TX",
    kids: [{ name: "Jimmy", age: "12" }, { name: "Sally", age: "4" }]
  };
  let result = template(data);
  Logger.log(result);
}
```

## Documentation

Homepage: http://www.handlebarsjs.com/

## License

**@sheetbase/handlebars-server** is released under the [MIT](https://github.com/sheetbase/module-handlebars-server/blob/master/LICENSE) license.

<!-- <footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-handlebars-server/blob/master/LICENSE
[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp
[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </footer> -->
