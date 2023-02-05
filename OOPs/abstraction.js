//! Abstraction...
function Computer(n, c) {
    let name = n;
    let cost = c;

    let details_noAccess = () => {
        return (`Name: ${name}  Cost: ${cost}`);
    };
    this.details_Access = () => {
        return (`Name: ${name}  Cost: ${cost}`);
    };
}
// class Computer1 {
//     constructor(n, c) {
//         //Local Scope to Constructor
//         let name = n;
//         let cost = c;
//         let details_noAccess = () => {
//             return (`Name: ${name}  Cost: ${cost}`);
//         };
//         this.details_Access = () => {
//             return (`Name: ${name}  Cost: ${cost}`);
//         };
//     }
// }
let hp = new Computer('OMEN', 123000);
// console.log(hp.name);
// console.log(hp.details_noAccess);
// console.log(hp.details_Access());



