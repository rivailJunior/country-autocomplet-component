## What is the difference between Component and PureComponent? Give an example where it might break my app.

It's like a component but the main goals here is to skip unnecessary re-renders.
when you dont use the correct way to get the props.

## Context + ShouldComponentUpdate might be dangerous. Why is that?

Using context all the wrapped components from the context provider will be updated when any context state changes and the ShouldComponentUpdate is a logic to define what can be updated or not. Having both, we gonna break the ShouldComponentUpdate behavior because Context might override these optimizations.

## Describe 3 ways to pass information from a component to its PARENT.

callbacks funcs
using context api
props with callbacks

## Give 2 ways to prevent components from re-rendering

memo
pureComponent
shouldComponentUpdate

## What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is way to group elements without write a wrapper element like a div.
Where it can break? Maybe when we need to style one child item on a list like the first element and we separate the logic to handle the items and use a fragment to compound the entire component. In this case the fragment can interfere

## Give 3 examples of the HOC pattern

map to return a new array
filter to return array with filtered elements
reduce to return array with n kind of computation

## What's the difference in handling exceptions in promises, callbacks and async…await?

using promises we need to use the tag (catch)
using callbacks we need to use the (reject)
using async/await we need to use the try/catch block to handle it

## How many arguments does setState take and why is it async.

2 arguments, nextState and one callback (callback is optional)
its async because if we change a various states react will batch their updates and re-render together

## List the steps needed to migrate a Class to Function Component.

update lifecicle methods
change the way we handle the state in the component view
update the lifecicle effects funcitons
update event handles (not necessary to bind it)
remove this references
update the render method
update ref handling

## List a few ways styles can be used with components.

inline
css-in-js like styled components
css-modules

## How to render an HTML string coming from the server.

using dangerouslySetInnerHTML tag, but it's not so safe.
