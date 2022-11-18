var Storage={_poolKey:'nsPool',poolAdd:function(key){var storage=Storage.isSupported;if(storage!=undefined){var allKey=Storage.get(Storage._poolKey);if(!allKey){allKey={};}
allKey[key]=key;Storage.set(Storage._poolKey,allKey,false);}},poolClear:function(){var nsKeys=Storage.get(Storage._poolKey);for(var key in nsKeys){Storage.remove(key);}
Storage.remove(Storage._poolKey);},isSupported:function(){try{return'localStorage'in window&&window['localStorage']!==null;}catch(e){return false;}},set:function(key,val,isPool){if(isPool==undefined){isPool=true;}
if(Storage.isSupported){if(isPool){Storage.poolAdd(key);}
localStorage.setItem(key,JSON.stringify(val));}},get:function(key){if(Storage.isSupported){var data=localStorage.getItem(key);return JSON.parse(data);}
return undefined;},remove:function(key){if(Storage.isSupported){localStorage.removeItem(key);}}};