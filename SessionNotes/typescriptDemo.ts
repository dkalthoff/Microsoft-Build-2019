declare function f2(x: string, y:number): string;

type MyTuple = [string, number, boolean];

declare function foo(x: string, y: number, z: boolean): string;
declare function bar(...args: [string, number?, ...boolean[]]): string;

foo("hello", 42, false);

function call<A extends any[], R>(fn: (...args: A[]) => any, ...args: any[])
{
    return fn(...args);
}
 
let x = call(f2, "hello", "hello");

f2.call()