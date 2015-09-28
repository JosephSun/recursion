// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className1){
    var results = [];
    function findNodes(element) {
        if (element.className != undefined){
            if ( (element.className).indexOf(className1)  > -1) {
                results.push(element);
            }
        }
        for (var i = 0; i < element.children.length; i++) {
            findNodes(element.children[i]);
        }
    }

    findNodes(document);
    return results;
}

