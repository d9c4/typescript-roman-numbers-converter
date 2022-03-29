[![NPM](https://nodei.co/npm/typescript-roman-numbers-converter.png?compact=true)](https://nodei.co/npm/typescript-roman-numbers-converter/)


Typescript Roman Numbers Converter
==============
[![NPM](https://img.shields.io/npm/l/typescript-roman-numbers-converter?style=flat-square)](#)

A simple and easy to use Typescript package that converts a given arabic number to roman number format
## Installation

<pre><code>$ npm install --save typescript-roman-numbers-converter</code></pre>

## How to use it

First of all import the package:

<pre><code>import { toRoman } from "typescript-roman-numbers-converter";</code></pre>

### toRoman

Converts the given **number** into a **string** that represents the same value in roman notation.

<pre>
<code>
let a: number;
let r: string;

a = 32
r = toRoman(a); //r is now equal to "XXXII"

let a_2 = -12
r = toRoman(a_2); //r is now "" due to limitations
</code>
</pre>