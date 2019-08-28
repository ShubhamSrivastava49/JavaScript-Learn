function dwightJob(title) {
    return function(prefix) {
        return prefix + ' ' + title;
    };
}

var sales = dwightJob('Salesman');
var manager = dwightJob('Manager');

console.log(sales('Top'));  // Top Salesman
console.log(manager('Assistant to the Regional')); // Assistant to the Regional Manager
console.log(manager('Regional')); // Regional Manager


