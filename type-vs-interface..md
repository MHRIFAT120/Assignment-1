What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Ans:Type aliases and interface are used to make custom type in TypeScript.Type aliases allow to define type with custom name used for primitives like string ,object and array.where the inteface are apply in the object only.
The core differences is declaration merging, type composition and supported use case although they share many similarities.Inteface is generally connected to the object and type aliases is connected to the literals,unions, tuples and primitives. In inteface we use extends when we need data from one inteface to another interface and in type aliases we use "&" symbol to performed the intesection.In interface if we use same name variable than it will merge one with another, no need to declare the extends.But in type aliases if their is same variable declare they didn't merge with one another rather than we nedd symbol "&" . 

Inteface Example:

interface Animal {
    species: string;
}
interface Cat extends Animal {
    breed: string;
};


Type aliases Example:

type Vehicle ={
    brand: string;
};

type Car =Vehicle & { 
    model: string; 
};



we choose type aliases when we needs unions, tuples, mapped types, or other type expressions. For ordinary object shapes, either is valid.Choose interface when defining an extendable object contract,especially one intended for declaration merging.