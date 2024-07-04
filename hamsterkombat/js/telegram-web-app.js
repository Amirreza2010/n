var el = document.getElementsByTagName('iframe')[0];
el.src = el.src.replace(/(tgWebAppPlatform=)[^&]+/, "$1android");
console.log('-='.repeat(50));
console.log("Use this address in your browser:", el.src);
console.log('-='.repeat(50));
