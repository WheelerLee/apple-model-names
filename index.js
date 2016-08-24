//     apple-device-names
//     Version 1.0
//     https://github.com/twitter-fabric/apple-model-names
//     (c) 2016 Twitter, Inc.
//     apple-device-names may be freely distributed under the MIT license.

;(function () {
  function _convertMacbookPro(code) {
    if (!code) return;
    switch (true) {
      case /11[_,][4,5]/.test(code): return '(Retina, 15-inch, Mid 2015)';
      case /11[_,][2,3]/.test(code): return '(Retina, 15-inch, Mid 2014)';
      case /12[_,]1/.test(code): return '(Retina, 13-inch, Early 2015)';
      case /11[_,]1/.test(code): return '(Retina, 13-inch, Mid 2014)';
      case /10[_,]2/.test(code): return '(Retina, 13-inch, Early 2013)';
      case /10[_,]1/.test(code): return '(Retina, 15-inch, Early 2013)';
      case /9[_,]2/.test(code): return '(13-inch, Mid 2012)';
      case /9[_,]1/.test(code): return '(15-inch, Mid 2012)';
      case /8[_,]3/.test(code): return '(17-inch, Late 2011)';
      case /8[_,]2/.test(code): return '(15-inch, Late 2011)';
      case /8[_,]1/.test(code): return '(13-inch, Late 2011)';
      case /7[_,]1/.test(code): return '(13-inch, Mid 2010)';
      case /6[_,]2/.test(code): return '(15-inch, Mid 2010)';
      case /6[_,]1/.test(code): return '(17-inch, Mid 2010)';
      case /5[_,]5/.test(code): return '(13-inch, Mid 2009)';
      case /5[_,]3/.test(code): return '(15-inch, Mid 2009)';
      case /5[_,]2/.test(code): return '(17-inch, Mid 2009)';
      case /5[_,]1/.test(code): return '(Late 2008)';
      case /4[_,]1/.test(code): return '(Early 2008)';
      case /3[_,]1/.test(code): return '(Late 2007)';
      case /2[_,]2/.test(code): return '(15-inch, Core 2 Duo)';
      case /2[_,]1/.test(code): return '(17-inch, Core 2 Duo)';
      case /1[_,]2/.test(code): return '(17-inch)';
      case /1[_,]1/.test(code): return '(15-inch, Glossy)';
    }
  }

  function _convertMacbookAir(code) {
    if (!code) return;
    switch (true) {
      case /7[_,]2/.test(code): return '(13-inch, Early 2015)';
      case /7[_,]1/.test(code): return '(11-inch, Early 2015)';
      case /6[_,]2/.test(code): return '(13-inch, Mid 2013/Early 2014)';
      case /6[_,]1/.test(code): return '(11-inch, Mid 2013/Early 2014)';
      case /5[_,]2/.test(code): return '(13-inch, Mid 2012)';
      case /5[_,]1/.test(code): return '(11-inch, Mid 2012)';
      case /4[_,]2/.test(code): return '(13-inch, Mid 2011)';
      case /4[_,]1/.test(code): return '(11-inch, Mid 2011)';
      case /3[_,]2/.test(code): return '(13-inch, Late 2010)';
      case /3[_,]1/.test(code): return '(11-inch, Late 2010)';
      case /2[_,]1/.test(code): return '(Late 2008/Mid 2009)';
      case /1[_,]1/.test(code): return '(Original Model)';
    }
  }

  function _convertMacbook(code) {
    if (!code) return;
    switch (true) {
      case /8[_,]1/.test(code): return '(Retina, 12-inch, Early 2015)';
      case /7[_,]1/.test(code): return '(13-inch, Mid 2010)';
      case /6[_,]1/.test(code): return '(13-inch, Late 2009)';
      case /5[_,]2/.test(code): return '(13-inch, Mid 2009)';
      case /5[_,]1/.test(code): return '(13-inch, Aluminum, Late 2008)';
      case /4[_,]1/.test(code): return '(13-inch, Late 2007)';
      case /3[_,]1/.test(code): return '(13-inch, Late 2007)';
      case /2[_,]1/.test(code): return '(13-inch, Mid 2007)';
      case /1[_,]1/.test(code): return '(Original Model)';
    }
  }

  function _convertImac(code) {
    if (!code) return;
    switch (true) {
      case /17[_,]2/.test(code): return '(Retina 5K, 27-inch, Late 2015)';
      case /16[_,]2/.test(code): return '(Retina 4K, 21.5-inch, Late 2015)';
      case /16[_,]1/.test(code): return '(21.5-inch, Late 2015)';
      case /15[_,]1/.test(code): return '(Retina 5K, 27-inch, Mid 2015)';
      case /15[_,]1/.test(code): return '(Retina 5K, 27-inch, Mid 2015)';
      case /14[_,]4/.test(code): return '(21.5-inch, Mid 2014)';
      case /14[_,]2/.test(code): return '(27-inch, Late 2013)';
      case /14[_,]1/.test(code): return '(21.5-inch, Late 2013)';
      case /13[_,]2/.test(code): return '(27-inch, Late 2012)';
      case /13[_,]1/.test(code): return '(21.5-inch, Late 2012)';
      case /12[_,]2/.test(code): return '(27-inch, Mid 2011)';
      case /12[_,]1/.test(code): return '(21.5-inch, Mid 2011)';
      case /11[_,]3/.test(code): return '(27-inch, Mid 2010)';
      case /11[_,]2/.test(code): return '(21.5-inch, Mid 2010)';
      case /10[_,]1/.test(code): return '(Late 2009)';
      case /9[_,]1/.test(code): return '(Early 2009)';
      case /8[_,]1/.test(code): return '(Early 2008)';
      case /7[_,]1/.test(code): return '(Mid 2007)';
    }
  }

  function _convertMacMini(code) {
    if (!code) return;
    switch (true) {
      case /7[_,][1-3]/.test(code): return '(Late 2014)';
      case /6[_,][1-2]/.test(code): return '(Late 2012)';
      case /5[_,][1-3]/.test(code): return '(Mid 2011)';
      case /5[_,][1-3]/.test(code): return '(Mid 2011)';
      case /4[_,]1/.test(code): return '(Mid 2010)';
      case /3[_,]1/.test(code): return '(Early/Late 2009)';
      case /2[_,]1/.test(code): return '(Mid 2007)';
      case /1[_,]1/.test(code): return '(Early/Late 2006)';
    }
  }

  function _convertMacPro(code) {
    if (!code) return;
    switch (true) {
      case /6[_,]1/.test(code): return '(Late 2013)';
      case /5[_,]1/.test(code): return '(Mid 2012)';
    }
  }

  function _convertIphone(code) {
    if (!code) return;
    switch (true) {
      case /8[_,]4/.test(code): return 'SE';
      case /8[_,]2/.test(code): return '6s Plus';
      case /8[_,]1/.test(code): return '6s';
      case /7[_,]2/.test(code): return '6';
      case /7[_,]1/.test(code): return '6 Plus';
      case /6[_,]\d/.test(code): return '5s';
      case /5[_,][34]/.test(code): return '5c';
      case /5[_,]\d/.test(code): return '5';
      case /4[_,]\d/.test(code): return '4s';
      case /3[_,]\d/.test(code): return '4';
      case /2[_,]\d/.test(code): return '3GS';
      case /1[_,]2/.test(code): return '3G';
      case /1[_,]1/.test(code): return '1';
    }
  }

  function _convertIpod(code) {
    if (!code) return;
    switch (true) {
      case /7[_,]\d/.test(code): return '6G';
      case /5[_,]\d/.test(code): return '5G';
      case /4[_,]\d/.test(code): return '4G';
      case /3[_,]\d/.test(code): return '3G';
      case /2[_,]\d/.test(code): return '2G';
      case /1[_,]\d/.test(code): return '1G';
    }
  }

  function _convertIpad(code) {
    if (!code) return;
    switch (true) {
      case /6[_,][7-8]/.test(code): return 'Pro (12.9 inch)';
      case /6[_,][3-4]/.test(code): return 'Pro (9.7 inch)';
      case /5[_,][3-4]/.test(code): return 'Air 2';
      case /5[_,][1-2]/.test(code): return 'Mini 4';
      case /4[_,][7-9]/.test(code): return 'Mini 3';
      case /4[_,][4-6]/.test(code): return 'Mini 2';
      case /4[_,][1-3]/.test(code): return 'Air';
      case /3[_,][4-6]/.test(code): return '4';
      case /3[_,][1-3]/.test(code): return '3';
      case /2[_,][5-7]/.test(code): return 'Mini';
      case /2[_,][1-4]/.test(code): return '2';
      case /1[_,]\d/.test(code): return '1';
    }
  }

  function _convertTv(code) {
    if (!code) return;
    switch (true) {
      case /5[_,]\d/.test(code): return '4th G';
      case /3[_,]\d/.test(code): return '3rd G';
      case /2[_,]\d/.test(code): return '2nd G';
    }
  }

  function _convertWatch(code) {
    if (!code) return;
    switch (true) {
      case /1[_,]\d/.test(code): return '1st G';
    }
  }

  function getAppleModelName(str, options) {
    options = typeof options === 'undefined' ? {} : options;
    if (!str || typeof str !== 'string') return;

    var result = [str];
    if (str.match(/simulator/i)) {
      result = ['Simulator'];
    } else if (str.match(/ios/i)) {
      result = ['iOS']; // Simulator device
    } else if (m = str.match(/iphone\s?(.*)/i)) {
      result = ['iPhone', _convertIphone(m[1])];
    } else if (m = str.match(/ipad\s?(.*)/i)) {
      result = ['iPad', _convertIpad(m[1])];
    } else if (m = str.match(/ipod\s?(.*)/i)) {
      result = ['iPod touch', _convertIpod(m[1])];
    } else if (m = str.match(/macbookpro\s?(.*)/i)) {
      result = ['MacBook Pro', _convertMacbookPro(m[1])];
    } else if (m = str.match(/macbookair\s?(.*)/i)) {
      result = ['MacBook Air', _convertMacbookAir(m[1])];
    } else if (m = str.match(/macbook\s?(.*)/i)) {
      result = ['MacBook', _convertMacbook(m[1])];
    } else if (m = str.match(/imac\s?(.*)/i)) {
      result = ['iMac', _convertImac(m[1])];
    } else if (m = str.match(/macmini\s?(.*)/i)) {
      result = ['Mac mini', _convertMacMini(m[1])];
    } else if (m = str.match(/macpro\s?(.*)/i)) {
      result = ['Mac Pro', _convertMacPro(m[1])];
    } else if (m = str.match(/appletv\s?(.*)/i)) {
      result = ['Apple TV', _convertTv(m[1])];
    } else if (m = str.match(/watch\s?(.*)/i)) {
      result = ['Apple Watch', _convertWatch(m[1])];
    }

    if (!options.split) {
      result = result.join(' ').trim();
    }
    return result;
  };

  if (typeof define === 'function' && define.amd) {
    // RequireJS / AMD
    define(function () {
      return getAppleModelName;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = getAppleModelName;
  } else {
    // Global
    this.getAppleModelName = getAppleModelName;
  }
}.call(this));