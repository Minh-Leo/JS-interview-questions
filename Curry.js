// Currying is a process to reduce functions of more than one argument to functions of one argument with the help of lambda calculus.
// f(n, m) --> f'(n)(m)

multiply = (n, m) => n * m;
multiply(3, 4) === 12; // true

curryedMultiply = (n) => (m) => multiply(n, m);
triple = curryedMultiply(3);
triple(4) === 12; // true

// UNCURRY
curryedMultiply = (n) => (m) => n * m;
curryedMultiply(3)(4) === 12; // true

multiply = (n, m) => curryedMultiply(n)(m);
multiply(3, 4) === 12; // true

// Real World Currying Examples
// You must be wondering how this theoretical toolset can be revealed in daily life.

// JavaScript Bind
// Function.prototype.bind() does partial application actually.
// // first param is thisArg which is irrelevant now
// increment = add.bind(undefined, 1)
// increment(4) === 5

// React and Redux
// The simplest use case of the react-redux connect() function is a purely curried one.
// export default connect(mapStateToProps)(TodoApp)

// Event Handling
// Event handler can be reused for multiple fields.
// const handleChange = (fieldName) => (event) => {
//   saveField(fieldName, event.target.value)
// }
// <input type="text" onChange={handleChange('email')} ... />

// Rendering HTML
// Render function can be reused to render similar HTML tags.
// renderHtmlTag = tagName => content => `<${tagName}>${content}</${tagName}>`

// renderDiv = renderHtmlTag('div')
// renderH1 = renderHtmlTag('h1')

// console.log(
//   renderDiv('this is a really cool div'),
//   renderH1('and this is an even cooler h1')
// )

// Curry as Higher Order Function
// We can define curry, uncurry and papply as higher order functions as follows. Arrow notation is right associative so we can omit brackets.
// curry = f => a => b => f(a, b)
// uncurry = f => (a, b) => f(a)(b)
// papply = (f, a) => b => f(a, b)
