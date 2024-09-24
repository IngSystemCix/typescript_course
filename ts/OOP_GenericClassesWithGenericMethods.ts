class utility {
    static display<T>(arg: T): T {
        return arg;
    }
}

let output = utility.display<string>("Hello");
console.log(output);