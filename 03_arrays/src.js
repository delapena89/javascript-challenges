module.exports = {

  first: function(array) {
    if(array === []) {
      return undefined;
    } else {
    return array[0];
  }
},

  last: function(array) {
    var arrayLast = array[array.length - 1];
    if (array === []) {
      return undefined;
    } else {
    return arrayLast;
  }
},

  empty: function(array) {
    if (array.length === 0) {
      return true;
    } else {
      return false;
    }
  },

  first_n: function(array, number) {
    if (array.length === 0) {
      return array;
    }
      return array.slice(0, number);
  },

  last_n: function(array, number) {
    if (array.length === 0) {
      return array;
    }
    return array.splice(-number);
  }



};









