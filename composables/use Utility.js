export const useUtility=()=>{
    {
        function toUpperCaseTitle(str){
        return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
    }
        return{
            toUpperCaseTitle,
        }
    }
}