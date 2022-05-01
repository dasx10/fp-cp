import arrayLikeIndexesCore from "./core/index";
import arrayLikeIndexesFilter        from "./filter/index";


const arrayLikeIndexes = Object.assign(arrayLikeIndexesCore, {
  filter: arrayLikeIndexesFilter
});


export default arrayLikeIndexes;
