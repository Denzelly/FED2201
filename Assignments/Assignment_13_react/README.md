•	What Is React?
React is a library that allows for a customizable app programming experience that isn't quite a framework. It allows devs to create interactive user interfaces.


•	What is JSX?
JSX, or JavaScript & XML, is an optional syntax used when creating React components. As mentioned before, it is optional and not necessarily needed to run React.

•	Explain the different types of components. 
Firstly, components are custom elements that are essential when building a React application. React components include: Functional components, Class components, Higher-Order Components, Dumb Components, Smart Components, Presentational Components, and Container Components.

•	What are Higher-Order components?
Higher-Order Components take a component as an input and returns said component as an output, with added extended functionality. A Higher-Order Component doesn't change or even copy its functionality for use in the return, rather it wraps the original component with a container component to subsequently return a new component with said extended functionality.

•	What is Context?
Context provides a way to share values between components without having to explicitly pass props through every level of the component tree.

•	What are State and Props? 
State and Properties are JavaScript Objects who each hold information that effect how the output is rendered.  While Properties get passed to the component, State is managed within the component.

•	What Are Hooks? 
Hooks allow you to use React features without writing a class.

•	What are some of the “Rules” of Hooks? 
Two things to note when using Hooks include: Only calling Hooks at the top level of your function & only calling Hooks from React Functions. You don't want to call Hooks inside loops, functions, or even nested functions. And too reiterate only calling Hooks from React functions, note that you don't want to attempt to call Hooks from vanilla JavaScript functions otherwise they will prove to be ineffective.

•	What are Error Boundaries?
Error Boundaries exist is to solve the issue of the entire UI failing when an error occurs in JavaScript. These are React components that catch JavaScript errors and displays a fallback UI instead of the crashed component tree.

•	What are Keys?
Keys are a required React element that must be presented when creating Lists. Keys belong to List elements inside the array to establish a stable identity as they help React maintain which items have been altered in any way.