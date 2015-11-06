module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string) {
    var str = string.toUpperCase();
    return "Hello " + str;
  },

  whisper: function(string) {
    var str = string.toLowerCase();
    return "Hello " + str;
  },

  separate: function(string) {
    var str = string.split('');
    return str;
  },

  reverseJoin: function(array) {
    var str = array.reverse('').join();
    return str;
  },

  reverseJoinCompact: function(array) {
    var str = array.reverse('').join().replace(/[,]/ig,'');
    return str;
  },

  backwardsDay: function(string) {
    var str = string.split('').reverse().join().replace(/[,]/ig,'');
    return "Hello " + str;
  }

};








