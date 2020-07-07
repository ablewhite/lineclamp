window.addEventListener('DOMContentLoaded', function() {
   var prefixes = ['', '-webkit-'];

   function supports(prop, value) {

    if ('CSS' in window && 'supports' in window.CSS) {

     for (var i = 0; i < prefixes.length; i++) {
      var property = prefixes[i] + prop;

      if (window.CSS.supports(property, value)) {
       return true;
      }
     }
     return false;
    }

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
	
    var el = document.createElement('div');
    var found = false;
	
    prefixes.forEach(function(prefix) {
     if (found) return;
	 
     var p = "".concat(prefix).concat(prop);
     var upperProp = p.replace(/-(.)/g, function(m, s) {
      return s.toUpperCase();
     });
	 
     if (!(upperProp in el.style)) return;
	 
     el.style[p] = value;
     found = el.style[p] == value;
    });
	
	el.remove();
	
    return found;
   }

   if (!supports("line-clamp", 2) {
	 var clamped = document.querySelectorAll("[data-clamp]");
	 
	 clamped.forEach(function(clamp, i) {
      var maxLines = Math.max(parseInt(clamp.getAttribute("data-clamp"), 10), 1);

      if (isNaN(maxLines)) {
       maxLines = 1;
      }

      var lineHeight = Math.round(parseFloat(window.getComputedStyle(clamp).lineHeight));
      clamp.style.maxHeight = (lineHeight * maxLines) + "px";
     });

    }
	
});
