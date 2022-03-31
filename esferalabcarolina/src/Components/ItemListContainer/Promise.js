const espera = ms => new Promise(resuelve => setTimeout(resuelve, ms));

espera(2000).then(() => diAlgo("2 segundos")).catch(falloCallback);