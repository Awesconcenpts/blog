import React from "react";
class Utils {
    getUrl(e){
		var props=window.location.href.split('#');
		props=props[0].split('?');
		props=props[0].replace(".html", "").split('/');
		return props[e+2];
	}
}

export default Utils;
