const router = require("express").Router();

const checkRoles = (sysRole) => {
    return (req, res, next) => {
        const userRole = [req.body.roles || req.headers.roles];
        const isAllowed = userRole.some((role)=> sysRole.includes(role));
        if(!isAllowed) throw new Error("permission denied");
        next();
    };
};

const encryptPw =(req, res, next)=>{
    next();
};
//default(math)
const sub = (a = 5, b) => {
    return a - b ;

};
const result = sub(undefined, 2);
console.log(result);

//fixed, inline, closure
const secured = () => {

    const fix = `fixed`;
    return fix;

};
console.log(secured());

//parametrized
const divid = (a=5, b, c) =>{
    return (a/b)/c;
};
const show = divid(undefined, 5, 1);
console.log(show);

//IIFE
(fun (a, b){
    console.log(a * b);
})(5, 8);

//implicit
const add = (a, b) => a-b;
const math = sub(5, 6);
console.log(math);

//explicit
const mul = (a, b) => {
    return a * b;
};
const multiply = mul(4, 5);
console.log(multiply);

//callback
//to take call back
const welcomeUser = (line, newline ) => {
    const lines = lone.split(' ');
 const linesCapital = lines.map((line)=>{
    return line.charAt(0).toupperCase() + line.slice(1);
 } );
};



module.exports= router;

