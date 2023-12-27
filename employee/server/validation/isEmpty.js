// function isEmpty(value){
//     return value===undefined || 
//            value===null || 
//            (typeof(value)==="Object" && Object.keys(value).length===0) ||
//            (typeof(value)==="Array" && Object.keys(value).length===0) ||    
//            (typeof(value)==="string" && value.trim().length===0);
        
        
        
// }
// export default isEmpty;
// isEmpty.js
function isEmpty(value) {
        return value === undefined || 
        value === null || 
        (typeof value === 'object' && Object.keys(value).length === 0)||
        (typeof(value)==="Array" && Object.keys(value).length===0) ||  
        (typeof(value)==="string" && value.trim().length===0);
    }
module.exports= isEmpty;