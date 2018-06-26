## Installation

You can use this package on the server side as well as the client side.

### [Node.js](http://nodejs.org/):

~~~
yarn add params-sign
~~~


## Usage

``` javascript

  * `data` -- `Object`
  * `secret` -- `String`
  * `options` -- `Object`
  * `options.ignoreKeys` -- `Object`
  * returns `String`
sign(data, secret, options)
~~~

~~~ javascript
checkSign(data, secret, signature, options)
~~~

  * `message` -- `String` or `Buffer`
  * returns `String`
