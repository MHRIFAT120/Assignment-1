Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

Ans:Access modifiers control where class properties and methods can be used.In TypeScript, public, private, and protected define visibility,while readonly prevents reassignment after initialization. 
Public Modifier: In public modifier when we use it we can use everywhere in the code it can be use inside the class and also outside of the class 
Private Modifier: In private modifier we can use it privately we can not use anywhere according to our wishes. we must use it to the function where only we can access it privately to that function.
Protected Modifier: In protected modifier is accessible inside its declaring class and its subclasses, but not through an external instance.
Readonly Modifier:In readonly modifier when we use it we cannot directly change the variable. we only can read it nither we didnot update to remove from the variable.

Example of public, private, protected, and readonly modifier:
class BankAccount {
  public owner: string;
  private balance: number;
  protected accountType: string;
  readonly accountNumber: string;

  constructor(owner: string, accountNumber: string) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.accountType = "standard";
  }
}

Use public for the class supported API, private for class-only details, protected for subclass access, and readonly for values that should not be reassigned.