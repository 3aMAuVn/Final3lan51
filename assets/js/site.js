(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function normalisePath(pathname) {
    pathname = (pathname || '').split('?')[0].split('#')[0];
    if (pathname.endsWith('/')) pathname += 'index.html';
    return pathname.toLowerCase();
  }

  function initActiveNav() {
    const current = normalisePath(location.pathname);
    document.querySelectorAll('a[data-nav], .nav a[href]').forEach(function (a) {
      try {
        const href = a.getAttribute('href') || '';
        if (/^(mailto:|tel:|https?:|javascript:)/i.test(href)) return;
        const hrefPath = normalisePath(new URL(href, location.origin).pathname);
        if (hrefPath === current) {
          a.classList.add('active');
          a.classList.add('is-active');
          a.setAttribute('aria-current', 'page');
        }
      } catch (e) {}
    });
  }

  function initLanguageMenu() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangText = document.getElementById('currentLangText');
    const currentLangFlag = document.getElementById('currentLangFlag');
    const langOptions = document.querySelectorAll('.lang-option');
    if (!langBtn || !langDropdown || !currentLangText || !currentLangFlag || !langOptions.length) return;

    const path = window.location.pathname.toLowerCase();
    const fileName = (path.split('/').pop() || 'index.html').toLowerCase();
    let currentCode = 'en';
    if (path.indexOf('/vi/') !== -1) currentCode = 'vi';
    else if (path.indexOf('/cn/') !== -1) currentCode = 'zh';
    else if (path.indexOf('/hi/') !== -1) currentCode = 'hi';
    else if (path.indexOf('/es/') !== -1) currentCode = 'es';

    langOptions.forEach(function (option) {
      const code = option.getAttribute('data-lang');
      const label = option.getAttribute('data-label');
      const optionIcon = option.querySelector('img, svg');
      if (code === currentCode) {
        currentLangText.textContent = label;
        currentLangText.setAttribute('aria-hidden', 'false');
        if (optionIcon && optionIcon.tagName && optionIcon.tagName.toLowerCase() === 'img') {
          currentLangFlag.src = optionIcon.getAttribute('src');
          currentLangFlag.alt = label;
          currentLangFlag.hidden = false;
        } else {
          currentLangFlag.hidden = true;
        }
        option.classList.add('active');
      }
      option.addEventListener('click', function () {
        let target = 'index.html';
        if (code === 'vi') target = 'vi/' + fileName;
        else if (code === 'zh') target = 'cn/' + fileName;
        else if (code === 'hi') target = 'hi/' + fileName;
        else if (code === 'es') target = 'es/' + fileName;
        if (currentCode !== 'en') {
          target = code === 'en' ? '../' + fileName : '../' + target;
        }
        window.location.href = target;
      });
    });

    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = !langDropdown.hasAttribute('hidden');
      if (isOpen) {
        langDropdown.setAttribute('hidden', '');
        langBtn.setAttribute('aria-expanded', 'false');
      } else {
        langDropdown.removeAttribute('hidden');
        langBtn.setAttribute('aria-expanded', 'true');
      }
    });

    langDropdown.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () {
      langDropdown.setAttribute('hidden', '');
      langBtn.setAttribute('aria-expanded', 'false');
    });
  }



  function initStarryHeroBackgrounds() {
    var heroNodes = document.querySelectorAll('.hero--starry');
    if (!heroNodes.length) return;

    var dotStyles = ['left:813.7px;top:99.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:6.14s;animation-delay:-5.11s;',
      'left:277.4px;top:518.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:4.85s;animation-delay:-4.02s;',
      'left:335.4px;top:242.9px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:4.11s;animation-delay:-5.27s;',
      'left:1882.8px;top:516.6px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:6.53s;animation-delay:-0.15s;',
      'left:773.8px;top:201.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.55;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:3.62s;animation-delay:-2.57s;',
      'left:1745.1px;top:10.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:4.29s;animation-delay:-4.24s;',
      'left:748.0px;top:12.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:5.80s;animation-delay:-2.33s;',
      'left:1406.5px;top:271.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.61;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:5.83s;animation-delay:-5.76s;',
      'left:1897.0px;top:429.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.02s;animation-delay:-4.62s;',
      'left:165.6px;top:27.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:3.90s;animation-delay:-5.92s;',
      'left:1530.6px;top:228.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.55;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:7.37s;animation-delay:-5.77s;',
      'left:1389.7px;top:70.8px;width:2.2px;height:2.2px;background:rgba(248,239,210,0.92);opacity:0.50;box-shadow:0 0 3.7px rgba(248,239,210,0.14);animation-duration:5.77s;animation-delay:-1.69s;',
      'left:575.9px;top:460.2px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.19s;animation-delay:-1.96s;',
      'left:799.2px;top:316.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:6.11s;animation-delay:-4.20s;',
      'left:1774.0px;top:18.4px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:6.97s;animation-delay:-2.16s;',
      'left:1409.0px;top:210.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:4.40s;animation-delay:-2.24s;',
      'left:617.5px;top:169.7px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.80;box-shadow:0 0 3.5px rgba(248,239,210,0.14);animation-duration:6.97s;animation-delay:-1.23s;',
      'left:261.5px;top:97.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.59;box-shadow:0 0 4.0px rgba(248,239,210,0.14);animation-duration:6.04s;animation-delay:-1.24s;',
      'left:925.5px;top:69.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.81;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:3.73s;animation-delay:-1.82s;',
      'left:1389.4px;top:274.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:4.52s;animation-delay:-3.31s;',
      'left:515.9px;top:157.7px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.55;box-shadow:0 0 2.6px rgba(248,239,210,0.14);animation-duration:4.88s;animation-delay:-0.03s;',
      'left:1583.4px;top:519.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.84;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:6.53s;animation-delay:-1.89s;',
      'left:1616.6px;top:218.3px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.59;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:4.93s;animation-delay:-1.34s;',
      'left:1550.6px;top:429.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:7.00s;animation-delay:-1.69s;',
      'left:1677.3px;top:93.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:4.42s;animation-delay:-1.86s;',
      'left:441.2px;top:371.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:4.95s;animation-delay:-5.58s;',
      'left:1590.4px;top:156.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.95;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.11s;animation-delay:-5.14s;',
      'left:25.4px;top:178.2px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:6.54s;animation-delay:-1.76s;',
      'left:899.4px;top:304.1px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.65;box-shadow:0 0 1.8px rgba(248,239,210,0.14);animation-duration:6.19s;animation-delay:-3.97s;',
      'left:170.5px;top:333.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:5.34s;animation-delay:-2.53s;',
      'left:745.8px;top:87.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:3.99s;animation-delay:-5.05s;',
      'left:51.5px;top:257.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:3.96s;animation-delay:-0.99s;',
      'left:1226.7px;top:489.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:5.82s;animation-delay:-5.57s;',
      'left:1339.3px;top:233.7px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.67;box-shadow:0 0 3.8px rgba(208,224,255,0.12);animation-duration:5.94s;animation-delay:-2.78s;',
      'left:116.9px;top:60.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:3.61s;animation-delay:-5.86s;',
      'left:1654.5px;top:130.7px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.94;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:6.55s;animation-delay:-3.86s;',
      'left:337.9px;top:431.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.70;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:4.49s;animation-delay:-5.44s;',
      'left:1015.4px;top:267.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.55;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:6.29s;animation-delay:-0.04s;',
      'left:340.5px;top:396.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:6.37s;animation-delay:-2.53s;',
      'left:1448.6px;top:256.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.70;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:3.73s;animation-delay:-4.18s;',
      'left:803.6px;top:137.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.23s;animation-delay:-0.88s;',
      'left:810.9px;top:155.9px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.73;box-shadow:0 0 3.8px rgba(208,224,255,0.12);animation-duration:6.77s;animation-delay:-5.38s;',
      'left:740.2px;top:418.9px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.31;box-shadow:0 0 2.9px rgba(208,224,255,0.12);animation-duration:5.75s;animation-delay:-3.83s;',
      'left:2018.1px;top:178.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.31;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:5.70s;animation-delay:-2.05s;',
      'left:57.3px;top:216.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.42;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:6.00s;animation-delay:-0.44s;',
      'left:1190.9px;top:316.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.92;box-shadow:0 0 2.6px rgba(248,239,210,0.14);animation-duration:3.79s;animation-delay:-0.16s;',
      'left:338.7px;top:4.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.32;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:7.07s;animation-delay:-4.34s;',
      'left:208.4px;top:479.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:3.51s;animation-delay:-5.51s;',
      'left:1464.9px;top:471.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:6.34s;animation-delay:-0.54s;',
      'left:2011.5px;top:215.1px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.75;box-shadow:0 0 1.8px rgba(248,239,210,0.14);animation-duration:5.83s;animation-delay:-5.53s;',
      'left:1430.8px;top:373.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:6.76s;animation-delay:-3.83s;',
      'left:1874.1px;top:23.2px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:3.54s;animation-delay:-1.93s;',
      'left:1014.1px;top:0.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.38s;animation-delay:-0.90s;',
      'left:454.6px;top:435.5px;width:2.2px;height:2.2px;background:rgba(248,239,210,0.92);opacity:0.43;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:4.40s;animation-delay:-2.71s;',
      'left:1914.2px;top:315.7px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.59;box-shadow:0 0 1.8px rgba(248,239,210,0.14);animation-duration:4.96s;animation-delay:-4.53s;',
      'left:936.8px;top:53.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:4.54s;animation-delay:-2.67s;',
      'left:1868.8px;top:351.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:5.08s;animation-delay:-4.95s;',
      'left:845.1px;top:84.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:6.99s;animation-delay:-5.79s;',
      'left:840.6px;top:408.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:4.88s;animation-delay:-3.33s;',
      'left:1106.6px;top:488.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:7.45s;animation-delay:-5.60s;',
      'left:1836.8px;top:221.7px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:4.97s;animation-delay:-2.70s;',
      'left:1708.4px;top:320.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:6.00s;animation-delay:-3.88s;',
      'left:1743.2px;top:286.0px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.84;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.63s;animation-delay:-5.57s;',
      'left:1228.5px;top:3.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.63;box-shadow:0 0 1.8px rgba(208,224,255,0.12);animation-duration:4.67s;animation-delay:-5.68s;',
      'left:1758.8px;top:452.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.31;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:4.11s;animation-delay:-4.33s;',
      'left:83.6px;top:323.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:5.92s;animation-delay:-4.71s;',
      'left:553.6px;top:369.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.97s;animation-delay:-5.27s;',
      'left:1027.9px;top:337.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.30;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:7.13s;animation-delay:-1.44s;',
      'left:1762.7px;top:448.2px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.54;box-shadow:0 0 2.7px rgba(208,224,255,0.12);animation-duration:3.69s;animation-delay:-0.79s;',
      'left:963.6px;top:290.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:6.60s;animation-delay:-4.19s;',
      'left:1112.1px;top:247.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:7.27s;animation-delay:-1.01s;',
      'left:1541.8px;top:184.6px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:7.27s;animation-delay:-2.60s;',
      'left:821.1px;top:500.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:5.99s;animation-delay:-3.37s;',
      'left:2027.6px;top:423.2px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.51;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:7.16s;animation-delay:-2.60s;',
      'left:1488.0px;top:76.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.25s;animation-delay:-4.25s;',
      'left:1511.4px;top:226.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.67;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.73s;animation-delay:-0.77s;',
      'left:354.7px;top:226.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.40;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:6.35s;animation-delay:-5.26s;',
      'left:1452.4px;top:411.6px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.79;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:5.99s;animation-delay:-4.17s;',
      'left:44.0px;top:395.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.10s;animation-delay:-2.20s;',
      'left:1416.8px;top:384.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:6.93s;animation-delay:-2.58s;',
      'left:2035.1px;top:199.7px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.76;box-shadow:0 0 2.4px rgba(208,224,255,0.12);animation-duration:5.90s;animation-delay:-4.65s;',
      'left:965.3px;top:446.3px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.71;box-shadow:0 0 2.0px rgba(248,239,210,0.14);animation-duration:5.62s;animation-delay:-5.97s;',
      'left:681.7px;top:301.4px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:7.43s;animation-delay:-1.75s;',
      'left:608.4px;top:42.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.30s;animation-delay:-3.65s;',
      'left:1402.3px;top:246.9px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.51;box-shadow:0 0 3.4px rgba(248,239,210,0.14);animation-duration:5.79s;animation-delay:-0.20s;',
      'left:727.8px;top:254.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.43;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:6.86s;animation-delay:-4.01s;',
      'left:337.6px;top:454.1px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.46;box-shadow:0 0 3.8px rgba(248,239,210,0.14);animation-duration:3.97s;animation-delay:-1.96s;',
      'left:1930.4px;top:204.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:3.47s;animation-delay:-3.33s;',
      'left:622.5px;top:225.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.41;box-shadow:0 0 2.5px rgba(248,239,210,0.14);animation-duration:4.85s;animation-delay:-1.64s;',
      'left:17.0px;top:383.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:5.42s;animation-delay:-4.96s;',
      'left:1973.4px;top:92.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:6.11s;animation-delay:-2.97s;',
      'left:2039.5px;top:125.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:3.46s;animation-delay:-3.32s;',
      'left:1091.4px;top:365.0px;width:2.2px;height:2.2px;background:rgba(208,224,255,0.82);opacity:0.52;box-shadow:0 0 1.7px rgba(208,224,255,0.12);animation-duration:7.13s;animation-delay:-1.49s;',
      'left:1998.0px;top:38.5px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.92;box-shadow:0 0 1.5px rgba(208,224,255,0.12);animation-duration:3.46s;animation-delay:-2.24s;',
      'left:975.9px;top:336.8px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.67;box-shadow:0 0 3.1px rgba(208,224,255,0.12);animation-duration:3.90s;animation-delay:-2.63s;',
      'left:1652.5px;top:351.6px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.83;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:6.00s;animation-delay:-5.54s;',
      'left:133.5px;top:90.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:7.35s;animation-delay:-3.78s;',
      'left:270.9px;top:106.9px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.34;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:3.72s;animation-delay:-1.12s;',
      'left:689.3px;top:95.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.51;box-shadow:0 0 1.2px rgba(248,239,210,0.14);animation-duration:3.60s;animation-delay:-3.92s;',
      'left:794.0px;top:386.8px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.39;box-shadow:0 0 2.5px rgba(208,224,255,0.12);animation-duration:6.76s;animation-delay:-2.62s;',
      'left:1986.7px;top:449.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.40;box-shadow:0 0 2.0px rgba(248,239,210,0.14);animation-duration:6.82s;animation-delay:-4.27s;',
      'left:180.3px;top:49.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.77;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:5.87s;animation-delay:-1.54s;',
      'left:97.5px;top:506.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:6.25s;animation-delay:-5.64s;',
      'left:344.8px;top:361.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.61;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:4.57s;animation-delay:-6.00s;',
      'left:278.4px;top:283.4px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:4.75s;animation-delay:-0.46s;',
      'left:903.8px;top:492.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.65;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:6.06s;animation-delay:-3.74s;',
      'left:214.6px;top:499.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:4.07s;animation-delay:-4.69s;',
      'left:563.9px;top:366.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:5.07s;animation-delay:-1.76s;',
      'left:167.1px;top:427.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.47s;animation-delay:-2.28s;',
      'left:186.9px;top:10.0px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.75;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:3.86s;animation-delay:-1.79s;',
      'left:1855.0px;top:480.6px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.62;box-shadow:0 0 1.2px rgba(248,239,210,0.14);animation-duration:4.89s;animation-delay:-1.64s;',
      'left:2046.0px;top:196.4px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.57;box-shadow:0 0 3.7px rgba(248,239,210,0.14);animation-duration:5.36s;animation-delay:-5.36s;',
      'left:1465.9px;top:346.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.62s;animation-delay:-5.44s;',
      'left:978.9px;top:110.1px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.46;box-shadow:0 0 3.8px rgba(208,224,255,0.12);animation-duration:3.83s;animation-delay:-1.98s;',
      'left:800.4px;top:365.5px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.48;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:6.43s;animation-delay:-5.27s;',
      'left:762.7px;top:474.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.65;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:5.49s;animation-delay:-2.00s;',
      'left:978.2px;top:171.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.77;box-shadow:0 0 1.9px rgba(248,239,210,0.14);animation-duration:3.57s;animation-delay:-2.74s;',
      'left:414.2px;top:367.8px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.72;box-shadow:0 0 1.4px rgba(248,239,210,0.14);animation-duration:3.51s;animation-delay:-4.91s;',
      'left:1859.2px;top:469.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.62;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:3.27s;animation-delay:-3.44s;',
      'left:252.9px;top:190.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.73;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:6.20s;animation-delay:-1.58s;',
      'left:507.2px;top:352.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.04s;animation-delay:-2.54s;',
      'left:164.3px;top:88.5px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:7.00s;animation-delay:-5.60s;',
      'left:1854.3px;top:493.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:6.86s;animation-delay:-4.67s;',
      'left:69.7px;top:507.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:4.88s;animation-delay:-3.75s;',
      'left:1827.5px;top:450.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:7.03s;animation-delay:-2.34s;',
      'left:186.2px;top:386.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.00s;animation-delay:-3.59s;',
      'left:1408.9px;top:372.7px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.79;box-shadow:0 0 1.9px rgba(208,224,255,0.12);animation-duration:6.12s;animation-delay:-5.65s;',
      'left:1111.4px;top:332.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:6.96s;animation-delay:-4.90s;',
      'left:283.1px;top:114.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:6.30s;animation-delay:-3.67s;',
      'left:1315.7px;top:40.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.52;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.45s;animation-delay:-0.74s;',
      'left:598.9px;top:95.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.32;box-shadow:0 0 3.0px rgba(208,224,255,0.12);animation-duration:4.25s;animation-delay:-3.50s;',
      'left:1142.5px;top:347.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.80s;animation-delay:-2.14s;',
      'left:1102.2px;top:201.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.63;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.32s;animation-delay:-4.27s;',
      'left:858.7px;top:146.1px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.91;box-shadow:0 0 1.7px rgba(208,224,255,0.12);animation-duration:5.54s;animation-delay:-1.21s;',
      'left:1704.6px;top:486.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:4.32s;animation-delay:-4.25s;',
      'left:312.3px;top:168.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.71;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:7.14s;animation-delay:-4.96s;',
      'left:27.9px;top:195.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:5.26s;animation-delay:-1.47s;',
      'left:1977.1px;top:429.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:5.98s;animation-delay:-2.09s;',
      'left:1370.8px;top:290.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:4.99s;animation-delay:-3.72s;',
      'left:1186.9px;top:347.0px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.31;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:3.78s;animation-delay:-0.63s;',
      'left:1396.1px;top:221.8px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.64;box-shadow:0 0 3.7px rgba(248,239,210,0.14);animation-duration:5.65s;animation-delay:-2.99s;',
      'left:745.5px;top:412.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:5.33s;animation-delay:-1.81s;',
      'left:1192.3px;top:494.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.71;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:4.66s;animation-delay:-2.45s;',
      'left:1108.0px;top:290.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.67s;animation-delay:-4.25s;',
      'left:1495.6px;top:419.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:7.12s;animation-delay:-4.02s;',
      'left:954.5px;top:376.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.18s;animation-delay:-3.03s;',
      'left:1308.5px;top:60.3px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.81;box-shadow:0 0 1.1px rgba(208,224,255,0.12);animation-duration:6.39s;animation-delay:-4.66s;',
      'left:209.7px;top:452.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.75;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.95s;animation-delay:-5.39s;',
      'left:488.8px;top:447.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 4.0px rgba(255,255,255,0.16);animation-duration:6.53s;animation-delay:-5.62s;',
      'left:1639.1px;top:302.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.32;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:4.56s;animation-delay:-3.94s;',
      'left:110.5px;top:258.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:7.41s;animation-delay:-1.94s;',
      'left:940.0px;top:464.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:4.51s;animation-delay:-1.08s;',
      'left:1478.4px;top:66.1px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.46;box-shadow:0 0 1.1px rgba(208,224,255,0.12);animation-duration:4.80s;animation-delay:-5.22s;',
      'left:17.1px;top:133.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.67;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:5.80s;animation-delay:-0.01s;',
      'left:1360.9px;top:468.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:5.69s;animation-delay:-3.13s;',
      'left:1770.5px;top:262.1px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.83;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:6.97s;animation-delay:-5.27s;',
      'left:830.9px;top:341.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.94;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:5.63s;animation-delay:-3.96s;',
      'left:1932.6px;top:294.6px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.38;box-shadow:0 0 2.3px rgba(248,239,210,0.14);animation-duration:5.77s;animation-delay:-4.25s;',
      'left:2019.5px;top:238.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.61;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:7.27s;animation-delay:-4.97s;',
      'left:344.1px;top:190.6px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.67;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:4.08s;animation-delay:-2.69s;',
      'left:20.5px;top:265.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:3.19s;animation-delay:-5.56s;',
      'left:405.3px;top:260.8px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.61;box-shadow:0 0 1.8px rgba(208,224,255,0.12);animation-duration:3.66s;animation-delay:-1.09s;',
      'left:438.6px;top:463.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.61;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:7.31s;animation-delay:-4.18s;',
      'left:945.2px;top:66.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.77;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:6.42s;animation-delay:-1.81s;',
      'left:647.4px;top:195.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:6.21s;animation-delay:-2.08s;',
      'left:891.4px;top:382.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:6.09s;animation-delay:-4.79s;',
      'left:408.0px;top:10.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:4.51s;animation-delay:-3.65s;',
      'left:586.2px;top:423.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.40;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:7.09s;animation-delay:-2.40s;',
      'left:120.9px;top:146.4px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:6.70s;animation-delay:-4.87s;',
      'left:270.8px;top:250.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.75;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:5.55s;animation-delay:-5.57s;',
      'left:915.5px;top:512.9px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.58;box-shadow:0 0 2.4px rgba(208,224,255,0.12);animation-duration:6.82s;animation-delay:-5.55s;',
      'left:274.5px;top:485.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:4.47s;animation-delay:-3.05s;',
      'left:1484.2px;top:5.8px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.32;box-shadow:0 0 1.1px rgba(248,239,210,0.14);animation-duration:6.39s;animation-delay:-5.54s;',
      'left:1151.7px;top:460.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.54;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:6.65s;animation-delay:-0.10s;',
      'left:519.3px;top:169.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.65;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:3.28s;animation-delay:-0.89s;',
      'left:564.8px;top:330.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.08s;animation-delay:-5.45s;',
      'left:1104.7px;top:80.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.13s;animation-delay:-4.77s;',
      'left:1372.8px;top:221.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:6.69s;animation-delay:-2.49s;',
      'left:1260.9px;top:201.9px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.43;box-shadow:0 0 2.8px rgba(248,239,210,0.14);animation-duration:4.56s;animation-delay:-3.70s;',
      'left:660.8px;top:257.9px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:6.75s;animation-delay:-5.20s;',
      'left:1654.7px;top:113.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:4.82s;animation-delay:-3.57s;',
      'left:1738.4px;top:77.6px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.40s;animation-delay:-2.07s;',
      'left:881.0px;top:481.4px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.46;box-shadow:0 0 1.0px rgba(208,224,255,0.12);animation-duration:3.06s;animation-delay:-4.41s;',
      'left:235.0px;top:413.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:3.23s;animation-delay:-4.17s;',
      'left:1089.3px;top:382.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:4.45s;animation-delay:-2.80s;',
      'left:714.0px;top:410.8px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.63;box-shadow:0 0 2.8px rgba(248,239,210,0.14);animation-duration:6.89s;animation-delay:-5.05s;',
      'left:1138.8px;top:167.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.51s;animation-delay:-4.11s;',
      'left:1311.7px;top:451.3px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:6.09s;animation-delay:-1.38s;',
      'left:1638.2px;top:255.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.43;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:4.17s;animation-delay:-0.34s;',
      'left:1047.9px;top:458.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.87;box-shadow:0 0 2.4px rgba(248,239,210,0.14);animation-duration:5.30s;animation-delay:-4.85s;',
      'left:701.7px;top:391.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:7.07s;animation-delay:-3.41s;',
      'left:1480.0px;top:6.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.54;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:4.60s;animation-delay:-3.95s;',
      'left:469.2px;top:318.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.63;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:6.14s;animation-delay:-0.23s;',
      'left:1513.3px;top:195.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:3.22s;animation-delay:-5.33s;',
      'left:47.8px;top:235.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:6.69s;animation-delay:-3.60s;',
      'left:86.7px;top:375.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.63;box-shadow:0 0 3.0px rgba(248,239,210,0.14);animation-duration:4.92s;animation-delay:-2.28s;',
      'left:1680.5px;top:26.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.33;box-shadow:0 0 2.5px rgba(248,239,210,0.14);animation-duration:6.89s;animation-delay:-2.48s;',
      'left:352.8px;top:188.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.31;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:4.79s;animation-delay:-2.50s;',
      'left:1549.6px;top:87.2px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.85;box-shadow:0 0 2.2px rgba(208,224,255,0.12);animation-duration:3.51s;animation-delay:-0.28s;',
      'left:665.0px;top:427.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:5.90s;animation-delay:-4.81s;',
      'left:578.2px;top:262.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.44;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:3.63s;animation-delay:-1.08s;',
      'left:395.9px;top:507.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:4.04s;animation-delay:-4.62s;',
      'left:1991.3px;top:237.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:6.65s;animation-delay:-2.58s;',
      'left:213.7px;top:386.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:6.74s;animation-delay:-2.19s;',
      'left:1794.2px;top:264.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:6.34s;animation-delay:-1.60s;',
      'left:1137.7px;top:48.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:6.42s;animation-delay:-0.56s;',
      'left:580.3px;top:475.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.44;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:7.15s;animation-delay:-3.96s;',
      'left:257.5px;top:382.1px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.89;box-shadow:0 0 2.6px rgba(208,224,255,0.12);animation-duration:7.09s;animation-delay:-5.30s;',
      'left:1601.4px;top:325.4px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.94;box-shadow:0 0 1.2px rgba(248,239,210,0.14);animation-duration:4.50s;animation-delay:-3.03s;',
      'left:1425.6px;top:201.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.55;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:4.83s;animation-delay:-2.82s;',
      'left:418.7px;top:85.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:3.99s;animation-delay:-5.24s;',
      'left:1277.3px;top:450.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:6.07s;animation-delay:-1.27s;',
      'left:598.4px;top:148.1px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.48;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:5.84s;animation-delay:-2.17s;',
      'left:1294.2px;top:422.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.52;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:5.63s;animation-delay:-0.12s;',
      'left:1090.9px;top:84.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:7.24s;animation-delay:-4.29s;',
      'left:1738.4px;top:41.6px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:7.04s;animation-delay:-1.49s;',
      'left:1573.6px;top:359.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:4.82s;animation-delay:-5.74s;',
      'left:740.5px;top:206.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.77;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:6.02s;animation-delay:-4.47s;',
      'left:1754.5px;top:129.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.84;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:4.53s;animation-delay:-0.58s;',
      'left:1941.4px;top:399.7px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.77;box-shadow:0 0 3.0px rgba(248,239,210,0.14);animation-duration:4.32s;animation-delay:-3.47s;',
      'left:1024.8px;top:57.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.68;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:5.48s;animation-delay:-3.14s;',
      'left:1259.5px;top:193.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:5.89s;animation-delay:-0.02s;',
      'left:95.2px;top:438.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.33s;animation-delay:-3.70s;',
      'left:1951.1px;top:425.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:3.18s;animation-delay:-4.21s;',
      'left:1725.2px;top:163.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.30;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:3.53s;animation-delay:-1.80s;',
      'left:889.5px;top:3.3px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.39;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:7.07s;animation-delay:-1.33s;',
      'left:1037.2px;top:478.4px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.45;box-shadow:0 0 3.6px rgba(248,239,210,0.14);animation-duration:6.08s;animation-delay:-2.49s;',
      'left:866.5px;top:258.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.47;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:3.75s;animation-delay:-3.95s;',
      'left:1886.6px;top:370.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.94;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.07s;animation-delay:-5.12s;',
      'left:1494.7px;top:59.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.42;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:7.29s;animation-delay:-1.60s;',
      'left:1797.1px;top:353.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:3.54s;animation-delay:-0.77s;',
      'left:1794.2px;top:28.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:5.42s;animation-delay:-3.45s;',
      'left:176.7px;top:97.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:3.51s;animation-delay:-5.63s;',
      'left:1873.9px;top:126.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.34;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:3.85s;animation-delay:-3.14s;',
      'left:250.6px;top:81.3px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.78;box-shadow:0 0 2.1px rgba(208,224,255,0.12);animation-duration:3.52s;animation-delay:-1.09s;',
      'left:1452.8px;top:346.9px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.54;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:3.89s;animation-delay:-3.02s;',
      'left:1838.4px;top:474.8px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.43;box-shadow:0 0 2.4px rgba(248,239,210,0.14);animation-duration:3.43s;animation-delay:-1.25s;',
      'left:84.5px;top:173.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:6.63s;animation-delay:-2.20s;',
      'left:1785.3px;top:316.1px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.35;box-shadow:0 0 3.1px rgba(248,239,210,0.14);animation-duration:3.93s;animation-delay:-4.44s;',
      'left:1253.4px;top:193.7px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.34;box-shadow:0 0 3.2px rgba(208,224,255,0.12);animation-duration:3.38s;animation-delay:-2.62s;',
      'left:665.0px;top:150.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:4.56s;animation-delay:-5.18s;',
      'left:1563.0px;top:331.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:7.48s;animation-delay:-2.87s;',
      'left:721.4px;top:260.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:4.92s;animation-delay:-5.10s;',
      'left:1022.0px;top:131.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:7.07s;animation-delay:-5.55s;',
      'left:1452.1px;top:477.5px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.48s;animation-delay:-1.32s;',
      'left:1416.4px;top:21.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:5.44s;animation-delay:-3.59s;',
      'left:1188.1px;top:20.6px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.20s;animation-delay:-5.59s;',
      'left:639.4px;top:396.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:3.25s;animation-delay:-2.35s;',
      'left:201.3px;top:78.1px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.57;box-shadow:0 0 3.4px rgba(208,224,255,0.12);animation-duration:5.91s;animation-delay:-0.79s;',
      'left:1761.0px;top:434.7px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.44;box-shadow:0 0 1.6px rgba(248,239,210,0.14);animation-duration:5.68s;animation-delay:-4.40s;',
      'left:1849.0px;top:367.5px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.41;box-shadow:0 0 1.6px rgba(208,224,255,0.12);animation-duration:3.40s;animation-delay:-3.79s;',
      'left:1961.0px;top:317.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:4.95s;animation-delay:-0.45s;',
      'left:1815.2px;top:28.0px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.46;box-shadow:0 0 2.8px rgba(248,239,210,0.14);animation-duration:6.41s;animation-delay:-1.18s;',
      'left:1703.6px;top:513.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.65;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:7.48s;animation-delay:-2.69s;',
      'left:1970.6px;top:276.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.81s;animation-delay:-3.51s;',
      'left:1182.6px;top:9.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.33;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:4.56s;animation-delay:-1.06s;',
      'left:2.1px;top:484.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:3.41s;animation-delay:-0.90s;',
      'left:1586.1px;top:360.3px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:5.47s;animation-delay:-2.27s;',
      'left:113.3px;top:269.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.87;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:5.04s;animation-delay:-4.69s;',
      'left:827.9px;top:254.9px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:6.16s;animation-delay:-2.70s;',
      'left:494.2px;top:315.2px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:6.01s;animation-delay:-1.72s;',
      'left:325.9px;top:224.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.09s;animation-delay:-3.55s;',
      'left:1496.5px;top:503.1px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.93;box-shadow:0 0 1.1px rgba(248,239,210,0.14);animation-duration:6.60s;animation-delay:-2.98s;',
      'left:1244.5px;top:167.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.42;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:4.32s;animation-delay:-3.10s;',
      'left:30.8px;top:150.9px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.54;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:5.07s;animation-delay:-5.51s;',
      'left:982.4px;top:439.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:4.85s;animation-delay:-5.94s;',
      'left:1751.4px;top:316.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.57;box-shadow:0 0 2.2px rgba(208,224,255,0.12);animation-duration:4.19s;animation-delay:-1.34s;',
      'left:1034.8px;top:237.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:7.49s;animation-delay:-0.54s;',
      'left:1096.2px;top:459.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.54;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:4.18s;animation-delay:-4.56s;',
      'left:942.0px;top:454.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:5.86s;animation-delay:-0.18s;',
      'left:1755.0px;top:6.7px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.52;box-shadow:0 0 3.6px rgba(208,224,255,0.12);animation-duration:4.92s;animation-delay:-4.84s;',
      'left:548.0px;top:132.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.33;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:6.14s;animation-delay:-1.24s;',
      'left:762.7px;top:193.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.94;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:7.20s;animation-delay:-2.98s;',
      'left:620.8px;top:319.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:5.42s;animation-delay:-0.92s;',
      'left:446.7px;top:477.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.84s;animation-delay:-3.12s;',
      'left:1145.6px;top:268.0px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.53;box-shadow:0 0 3.5px rgba(248,239,210,0.14);animation-duration:4.79s;animation-delay:-0.42s;',
      'left:1609.4px;top:55.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.42;box-shadow:0 0 2.6px rgba(248,239,210,0.14);animation-duration:6.70s;animation-delay:-1.43s;',
      'left:1702.7px;top:37.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:5.39s;animation-delay:-0.93s;',
      'left:1580.4px;top:235.5px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:7.37s;animation-delay:-5.82s;',
      'left:1751.2px;top:448.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:7.07s;animation-delay:-5.33s;',
      'left:165.1px;top:173.9px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.46;box-shadow:0 0 1.4px rgba(248,239,210,0.14);animation-duration:4.98s;animation-delay:-1.91s;',
      'left:1715.6px;top:412.9px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.41;box-shadow:0 0 3.1px rgba(248,239,210,0.14);animation-duration:4.66s;animation-delay:-0.47s;',
      'left:1405.5px;top:386.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.32;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:6.45s;animation-delay:-1.94s;',
      'left:95.8px;top:15.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:5.97s;animation-delay:-5.29s;',
      'left:1043.2px;top:279.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:5.21s;animation-delay:-1.49s;',
      'left:330.8px;top:226.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.74s;animation-delay:-4.57s;',
      'left:402.8px;top:134.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:3.73s;animation-delay:-1.18s;',
      'left:1822.7px;top:258.3px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.47;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:4.35s;animation-delay:-3.67s;',
      'left:83.6px;top:235.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.68;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:4.35s;animation-delay:-5.33s;',
      'left:29.0px;top:321.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:4.53s;animation-delay:-1.25s;',
      'left:1750.4px;top:309.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.42;box-shadow:0 0 1.2px rgba(255,255,255,0.16);animation-duration:4.31s;animation-delay:-2.34s;',
      'left:956.3px;top:472.3px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.86;box-shadow:0 0 1.3px rgba(208,224,255,0.12);animation-duration:4.66s;animation-delay:-0.07s;',
      'left:499.1px;top:441.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:3.59s;animation-delay:-5.65s;',
      'left:1406.3px;top:248.1px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.48;box-shadow:0 0 3.7px rgba(248,239,210,0.14);animation-duration:4.00s;animation-delay:-2.76s;',
      'left:1208.6px;top:1.5px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.56;box-shadow:0 0 1.9px rgba(208,224,255,0.12);animation-duration:4.07s;animation-delay:-0.87s;',
      'left:1980.6px;top:386.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:3.51s;animation-delay:-1.62s;',
      'left:130.9px;top:442.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.78;box-shadow:0 0 2.7px rgba(248,239,210,0.14);animation-duration:5.69s;animation-delay:-1.52s;',
      'left:1152.3px;top:57.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 1.2px rgba(255,255,255,0.16);animation-duration:3.64s;animation-delay:-5.22s;',
      'left:504.2px;top:500.2px;width:1.9px;height:1.9px;background:rgba(208,224,255,0.82);opacity:0.31;box-shadow:0 0 3.5px rgba(208,224,255,0.12);animation-duration:5.86s;animation-delay:-3.90s;',
      'left:1426.2px;top:463.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:4.66s;animation-delay:-4.54s;',
      'left:614.9px;top:391.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 2.0px rgba(255,255,255,0.16);animation-duration:4.70s;animation-delay:-0.82s;',
      'left:857.1px;top:243.6px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.90;box-shadow:0 0 3.1px rgba(208,224,255,0.12);animation-duration:5.96s;animation-delay:-0.77s;',
      'left:1008.5px;top:274.7px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.45;box-shadow:0 0 2.1px rgba(248,239,210,0.14);animation-duration:3.37s;animation-delay:-0.35s;',
      'left:1683.9px;top:381.7px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.82;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:3.38s;animation-delay:-4.21s;',
      'left:928.9px;top:384.0px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.94;box-shadow:0 0 2.7px rgba(248,239,210,0.14);animation-duration:6.91s;animation-delay:-1.79s;',
      'left:1813.8px;top:365.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:4.76s;animation-delay:-2.32s;',
      'left:653.8px;top:443.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.71;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:5.46s;animation-delay:-3.40s;',
      'left:963.2px;top:64.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.33;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:4.51s;animation-delay:-5.57s;',
      'left:1967.8px;top:309.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:3.37s;animation-delay:-3.31s;',
      'left:1115.2px;top:305.7px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.76;box-shadow:0 0 1.9px rgba(208,224,255,0.12);animation-duration:7.48s;animation-delay:-2.16s;',
      'left:1677.3px;top:389.3px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.62;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:5.75s;animation-delay:-5.65s;',
      'left:423.8px;top:347.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:5.59s;animation-delay:-3.51s;',
      'left:800.1px;top:239.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:6.54s;animation-delay:-2.98s;',
      'left:350.7px;top:178.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.34s;animation-delay:-5.14s;',
      'left:1827.8px;top:374.8px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.59;box-shadow:0 0 2.1px rgba(208,224,255,0.12);animation-duration:4.82s;animation-delay:-0.19s;',
      'left:1640.5px;top:433.2px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.74;box-shadow:0 0 3.9px rgba(248,239,210,0.14);animation-duration:6.75s;animation-delay:-2.34s;',
      'left:1889.3px;top:406.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.68;box-shadow:0 0 1.4px rgba(248,239,210,0.14);animation-duration:6.54s;animation-delay:-4.83s;',
      'left:754.1px;top:307.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.32;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:4.96s;animation-delay:-2.00s;',
      'left:418.0px;top:166.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.35s;animation-delay:-3.74s;',
      'left:268.4px;top:4.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.86;box-shadow:0 0 1.2px rgba(248,239,210,0.14);animation-duration:4.08s;animation-delay:-5.63s;',
      'left:1834.8px;top:218.5px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.50;box-shadow:0 0 1.4px rgba(248,239,210,0.14);animation-duration:7.13s;animation-delay:-1.89s;',
      'left:1585.7px;top:203.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.63;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:7.30s;animation-delay:-1.91s;',
      'left:1557.3px;top:2.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:4.26s;animation-delay:-2.66s;',
      'left:355.5px;top:271.0px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.87;box-shadow:0 0 3.2px rgba(208,224,255,0.12);animation-duration:3.30s;animation-delay:-1.00s;',
      'left:918.0px;top:298.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:7.37s;animation-delay:-1.48s;',
      'left:1181.0px;top:473.3px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.64;box-shadow:0 0 3.5px rgba(248,239,210,0.14);animation-duration:4.62s;animation-delay:-3.91s;',
      'left:759.5px;top:135.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:4.16s;animation-delay:-3.81s;',
      'left:1249.4px;top:517.7px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.75;box-shadow:0 0 1.0px rgba(248,239,210,0.14);animation-duration:4.63s;animation-delay:-5.30s;',
      'left:1313.2px;top:417.8px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:5.84s;animation-delay:-3.39s;',
      'left:1565.0px;top:389.5px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.63;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:4.44s;animation-delay:-2.54s;',
      'left:479.2px;top:325.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.47;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:3.70s;animation-delay:-3.71s;',
      'left:1905.9px;top:325.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.49s;animation-delay:-5.02s;',
      'left:1051.2px;top:207.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.47;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:4.80s;animation-delay:-3.72s;',
      'left:1389.2px;top:338.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.68;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.91s;animation-delay:-3.73s;',
      'left:1313.0px;top:26.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:6.35s;animation-delay:-1.83s;',
      'left:1949.7px;top:196.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.87;box-shadow:0 0 4.0px rgba(255,255,255,0.16);animation-duration:4.62s;animation-delay:-5.83s;',
      'left:1817.3px;top:169.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.71;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:3.72s;animation-delay:-4.68s;',
      'left:1614.5px;top:105.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:7.30s;animation-delay:-1.91s;',
      'left:455.2px;top:216.1px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.32;box-shadow:0 0 3.6px rgba(248,239,210,0.14);animation-duration:3.42s;animation-delay:-0.42s;',
      'left:1176.9px;top:199.5px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.90;box-shadow:0 0 3.0px rgba(208,224,255,0.12);animation-duration:7.23s;animation-delay:-3.80s;',
      'left:387.0px;top:9.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:4.94s;animation-delay:-1.87s;',
      'left:417.8px;top:68.3px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.45;box-shadow:0 0 4.0px rgba(248,239,210,0.14);animation-duration:5.84s;animation-delay:-5.22s;',
      'left:1950.9px;top:328.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:3.05s;animation-delay:-4.95s;',
      'left:503.4px;top:371.0px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.36;box-shadow:0 0 2.4px rgba(208,224,255,0.12);animation-duration:3.91s;animation-delay:-5.95s;',
      'left:223.6px;top:151.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.84;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:6.61s;animation-delay:-5.96s;',
      'left:660.4px;top:21.7px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.71;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:3.56s;animation-delay:-3.03s;',
      'left:1848.5px;top:376.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.48;box-shadow:0 0 1.3px rgba(255,255,255,0.16);animation-duration:7.13s;animation-delay:-3.71s;',
      'left:777.7px;top:108.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.74;box-shadow:0 0 2.7px rgba(208,224,255,0.12);animation-duration:6.12s;animation-delay:-4.74s;',
      'left:1077.2px;top:276.0px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.86;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:5.90s;animation-delay:-2.00s;',
      'left:1428.0px;top:502.7px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.50;box-shadow:0 0 1.6px rgba(248,239,210,0.14);animation-duration:3.50s;animation-delay:-2.46s;',
      'left:415.5px;top:287.1px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:7.39s;animation-delay:-4.06s;',
      'left:58.4px;top:158.4px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.65;box-shadow:0 0 2.3px rgba(248,239,210,0.14);animation-duration:5.44s;animation-delay:-1.06s;',
      'left:1058.3px;top:449.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:6.31s;animation-delay:-5.73s;',
      'left:484.3px;top:216.1px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.38;box-shadow:0 0 1.3px rgba(248,239,210,0.14);animation-duration:3.72s;animation-delay:-4.24s;',
      'left:1483.6px;top:162.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:6.72s;animation-delay:-0.84s;',
      'left:1581.6px;top:369.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:4.50s;animation-delay:-3.20s;',
      'left:1975.2px;top:196.6px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.57;box-shadow:0 0 1.3px rgba(248,239,210,0.14);animation-duration:5.36s;animation-delay:-1.49s;',
      'left:23.0px;top:445.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:6.05s;animation-delay:-0.17s;',
      'left:1785.5px;top:238.8px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.37;box-shadow:0 0 3.3px rgba(248,239,210,0.14);animation-duration:6.49s;animation-delay:-0.46s;',
      'left:1556.1px;top:209.1px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:3.88s;animation-delay:-5.52s;',
      'left:1332.2px;top:184.8px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.48;box-shadow:0 0 1.7px rgba(248,239,210,0.14);animation-duration:4.69s;animation-delay:-0.63s;',
      'left:1773.0px;top:358.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:3.19s;animation-delay:-4.20s;',
      'left:1506.0px;top:473.8px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:3.59s;animation-delay:-2.26s;',
      'left:834.4px;top:37.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:3.88s;animation-delay:-3.96s;',
      'left:217.3px;top:191.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.34;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.06s;animation-delay:-0.92s;',
      'left:1406.8px;top:187.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.20s;animation-delay:-2.70s;',
      'left:598.3px;top:192.6px;width:1.9px;height:1.9px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:5.95s;animation-delay:-1.78s;',
      'left:124.1px;top:146.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:3.64s;animation-delay:-1.58s;',
      'left:276.8px;top:141.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:6.13s;animation-delay:-3.23s;',
      'left:1067.9px;top:206.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.89;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:6.35s;animation-delay:-4.84s;',
      'left:356.2px;top:107.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.77;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:6.73s;animation-delay:-2.35s;',
      'left:511.1px;top:378.1px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:6.74s;animation-delay:-0.08s;',
      'left:1832.4px;top:367.2px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.94;box-shadow:0 0 1.7px rgba(248,239,210,0.14);animation-duration:4.56s;animation-delay:-0.39s;',
      'left:1808.1px;top:183.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.64;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:6.05s;animation-delay:-3.93s;',
      'left:321.4px;top:413.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.59;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.15s;animation-delay:-1.69s;',
      'left:1945.3px;top:35.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:3.80s;animation-delay:-5.48s;',
      'left:1299.6px;top:39.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.70;box-shadow:0 0 2.3px rgba(255,255,255,0.16);animation-duration:4.13s;animation-delay:-0.58s;',
      'left:504.3px;top:289.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.52;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:4.78s;animation-delay:-4.73s;',
      'left:923.4px;top:336.4px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.40;box-shadow:0 0 1.8px rgba(248,239,210,0.14);animation-duration:3.48s;animation-delay:-5.34s;',
      'left:87.3px;top:449.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.46;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:5.08s;animation-delay:-2.42s;',
      'left:1708.4px;top:337.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.41;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:7.27s;animation-delay:-3.61s;',
      'left:784.0px;top:182.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:4.07s;animation-delay:-2.26s;',
      'left:1199.3px;top:44.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:4.60s;animation-delay:-0.98s;',
      'left:91.2px;top:400.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:4.72s;animation-delay:-3.23s;',
      'left:566.1px;top:116.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:4.09s;animation-delay:-2.52s;',
      'left:41.7px;top:423.2px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.75;box-shadow:0 0 3.9px rgba(248,239,210,0.14);animation-duration:4.80s;animation-delay:-4.71s;',
      'left:343.9px;top:17.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.59;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:4.86s;animation-delay:-2.44s;',
      'left:1850.2px;top:445.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.79;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:5.69s;animation-delay:-1.80s;',
      'left:355.3px;top:50.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.93;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:7.19s;animation-delay:-3.71s;',
      'left:1221.0px;top:487.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:4.39s;animation-delay:-0.74s;',
      'left:1187.9px;top:21.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:3.70s;animation-delay:-0.89s;',
      'left:345.9px;top:343.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.92;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:6.74s;animation-delay:-2.69s;',
      'left:667.2px;top:121.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:6.06s;animation-delay:-3.17s;',
      'left:43.8px;top:245.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.61;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:6.70s;animation-delay:-5.59s;',
      'left:1783.6px;top:122.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.59;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:6.37s;animation-delay:-4.61s;',
      'left:307.0px;top:401.1px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.35;box-shadow:0 0 3.0px rgba(248,239,210,0.14);animation-duration:3.91s;animation-delay:-3.27s;',
      'left:1291.9px;top:217.7px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.84;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:4.40s;animation-delay:-0.04s;',
      'left:62.5px;top:403.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.80;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:4.86s;animation-delay:-1.45s;',
      'left:992.4px;top:432.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:4.84s;animation-delay:-0.13s;',
      'left:1143.0px;top:180.2px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.62;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:7.18s;animation-delay:-4.58s;',
      'left:1615.0px;top:504.1px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:3.80s;animation-delay:-2.32s;',
      'left:836.5px;top:230.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.67;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:4.58s;animation-delay:-0.48s;',
      'left:1649.4px;top:258.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:7.28s;animation-delay:-3.67s;',
      'left:135.8px;top:231.7px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.72;box-shadow:0 0 1.0px rgba(208,224,255,0.12);animation-duration:6.08s;animation-delay:-3.95s;',
      'left:1412.1px;top:466.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.73;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:3.45s;animation-delay:-1.79s;',
      'left:355.0px;top:7.1px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.82;box-shadow:0 0 1.0px rgba(248,239,210,0.14);animation-duration:4.85s;animation-delay:-1.20s;',
      'left:1219.7px;top:118.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.59;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:5.31s;animation-delay:-2.70s;',
      'left:1356.2px;top:285.9px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:6.72s;animation-delay:-0.23s;',
      'left:428.1px;top:175.7px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.77;box-shadow:0 0 1.2px rgba(208,224,255,0.12);animation-duration:3.06s;animation-delay:-1.64s;',
      'left:1358.3px;top:31.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 4.0px rgba(255,255,255,0.16);animation-duration:6.16s;animation-delay:-3.77s;',
      'left:551.6px;top:251.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.58;box-shadow:0 0 3.3px rgba(248,239,210,0.14);animation-duration:3.03s;animation-delay:-1.28s;',
      'left:596.0px;top:80.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:5.17s;animation-delay:-3.20s;',
      'left:504.7px;top:319.4px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.65;box-shadow:0 0 3.6px rgba(248,239,210,0.14);animation-duration:4.54s;animation-delay:-0.92s;',
      'left:1962.2px;top:437.3px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.81;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:7.00s;animation-delay:-5.41s;',
      'left:322.4px;top:265.6px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.79;box-shadow:0 0 3.7px rgba(208,224,255,0.12);animation-duration:3.90s;animation-delay:-1.09s;',
      'left:1327.3px;top:376.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.78;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:6.62s;animation-delay:-2.32s;',
      'left:1649.3px;top:74.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.08s;animation-delay:-1.91s;',
      'left:1813.6px;top:504.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:6.53s;animation-delay:-3.37s;',
      'left:780.5px;top:347.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.58;box-shadow:0 0 3.1px rgba(255,255,255,0.16);animation-duration:5.13s;animation-delay:-3.64s;',
      'left:1564.9px;top:73.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.84;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:5.97s;animation-delay:-5.23s;',
      'left:844.9px;top:415.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.95;box-shadow:0 0 2.6px rgba(248,239,210,0.14);animation-duration:5.55s;animation-delay:-5.35s;',
      'left:1072.1px;top:411.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:6.35s;animation-delay:-0.22s;',
      'left:554.1px;top:397.1px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.56;box-shadow:0 0 2.1px rgba(208,224,255,0.12);animation-duration:4.93s;animation-delay:-4.52s;',
      'left:1457.5px;top:173.0px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.63;box-shadow:0 0 1.8px rgba(248,239,210,0.14);animation-duration:5.94s;animation-delay:-0.45s;',
      'left:1380.3px;top:478.8px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.36;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:5.65s;animation-delay:-3.50s;',
      'left:1103.9px;top:392.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.84;box-shadow:0 0 1.3px rgba(208,224,255,0.12);animation-duration:4.32s;animation-delay:-5.96s;',
      'left:56.7px;top:183.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.93;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:6.17s;animation-delay:-0.22s;',
      'left:1997.6px;top:74.6px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.72;box-shadow:0 0 2.7px rgba(248,239,210,0.14);animation-duration:3.09s;animation-delay:-4.22s;',
      'left:2020.1px;top:75.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:4.55s;animation-delay:-0.68s;',
      'left:1789.1px;top:447.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:3.70s;animation-delay:-5.97s;',
      'left:667.7px;top:345.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.75;box-shadow:0 0 1.9px rgba(255,255,255,0.16);animation-duration:3.36s;animation-delay:-4.40s;',
      'left:1092.3px;top:374.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.94;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:4.92s;animation-delay:-1.85s;',
      'left:231.3px;top:479.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.36;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:4.59s;animation-delay:-1.72s;',
      'left:60.0px;top:175.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:6.45s;animation-delay:-3.74s;',
      'left:1509.8px;top:236.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:4.27s;animation-delay:-0.98s;',
      'left:117.9px;top:175.4px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:3.13s;animation-delay:-1.12s;',
      'left:1849.3px;top:187.3px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.37;box-shadow:0 0 4.0px rgba(248,239,210,0.14);animation-duration:4.47s;animation-delay:-4.74s;',
      'left:417.3px;top:480.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.34;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:7.48s;animation-delay:-2.53s;',
      'left:808.2px;top:185.0px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.47;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:6.21s;animation-delay:-2.99s;',
      'left:1403.9px;top:69.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.88;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:4.31s;animation-delay:-5.47s;',
      'left:594.2px;top:32.6px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:6.21s;animation-delay:-1.47s;',
      'left:216.5px;top:173.9px;width:1.5px;height:1.5px;background:rgba(208,224,255,0.82);opacity:0.77;box-shadow:0 0 3.5px rgba(208,224,255,0.12);animation-duration:5.28s;animation-delay:-3.52s;',
      'left:630.3px;top:473.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.56;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:3.51s;animation-delay:-2.17s;',
      'left:1938.0px;top:395.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.60;box-shadow:0 0 2.1px rgba(255,255,255,0.16);animation-duration:5.78s;animation-delay:-0.06s;',
      'left:2031.5px;top:26.0px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.89;box-shadow:0 0 3.7px rgba(208,224,255,0.12);animation-duration:5.76s;animation-delay:-5.01s;',
      'left:1985.8px;top:25.2px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.66;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:4.44s;animation-delay:-1.84s;',
      'left:1199.3px;top:320.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.49;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:4.48s;animation-delay:-2.94s;',
      'left:1652.9px;top:290.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.87;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:3.32s;animation-delay:-3.54s;',
      'left:575.6px;top:510.4px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 2.4px rgba(255,255,255,0.16);animation-duration:6.97s;animation-delay:-2.76s;',
      'left:1866.4px;top:172.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:4.23s;animation-delay:-2.37s;',
      'left:1260.7px;top:435.5px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.37;box-shadow:0 0 3.9px rgba(248,239,210,0.14);animation-duration:5.80s;animation-delay:-2.43s;',
      'left:1049.8px;top:309.7px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.54;box-shadow:0 0 3.4px rgba(208,224,255,0.12);animation-duration:4.54s;animation-delay:-0.74s;',
      'left:277.6px;top:270.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.94;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:6.95s;animation-delay:-2.13s;',
      'left:1384.1px;top:151.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.81;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:6.86s;animation-delay:-2.27s;',
      'left:513.3px;top:26.6px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 1.2px rgba(255,255,255,0.16);animation-duration:7.28s;animation-delay:-1.31s;',
      'left:987.1px;top:447.9px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.67;box-shadow:0 0 3.3px rgba(248,239,210,0.14);animation-duration:7.41s;animation-delay:-3.96s;',
      'left:279.6px;top:35.7px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:4.89s;animation-delay:-5.22s;',
      'left:238.2px;top:411.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.33;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:7.50s;animation-delay:-4.56s;',
      'left:1304.8px;top:75.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.63;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:3.58s;animation-delay:-1.62s;',
      'left:730.3px;top:47.5px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.73;box-shadow:0 0 3.6px rgba(248,239,210,0.14);animation-duration:5.33s;animation-delay:-0.55s;',
      'left:936.2px;top:449.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.59;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:4.87s;animation-delay:-4.33s;',
      'left:354.8px;top:469.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.30;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:3.08s;animation-delay:-5.01s;',
      'left:655.0px;top:246.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.34;box-shadow:0 0 3.8px rgba(255,255,255,0.16);animation-duration:7.26s;animation-delay:-4.70s;',
      'left:2035.2px;top:141.4px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.94;box-shadow:0 0 2.2px rgba(248,239,210,0.14);animation-duration:6.73s;animation-delay:-3.40s;',
      'left:1229.3px;top:482.0px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.90;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:6.91s;animation-delay:-5.72s;',
      'left:643.7px;top:499.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.74;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.58s;animation-delay:-2.90s;',
      'left:1632.6px;top:387.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 1.8px rgba(255,255,255,0.16);animation-duration:5.82s;animation-delay:-3.77s;',
      'left:473.6px;top:515.3px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.77;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:4.14s;animation-delay:-0.56s;',
      'left:153.3px;top:260.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.43;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:4.74s;animation-delay:-3.73s;',
      'left:1414.3px;top:446.1px;width:2.2px;height:2.2px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:5.51s;animation-delay:-2.99s;',
      'left:527.9px;top:515.5px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.52;box-shadow:0 0 1.5px rgba(208,224,255,0.12);animation-duration:5.61s;animation-delay:-3.87s;',
      'left:112.8px;top:23.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.50;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:3.74s;animation-delay:-1.90s;',
      'left:405.1px;top:350.5px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 3.5px rgba(255,255,255,0.16);animation-duration:6.66s;animation-delay:-1.13s;',
      'left:605.2px;top:88.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.48;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:7.26s;animation-delay:-0.07s;',
      'left:278.0px;top:218.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.34;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:3.60s;animation-delay:-5.55s;',
      'left:136.4px;top:415.9px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.31;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:7.32s;animation-delay:-0.10s;',
      'left:86.8px;top:59.0px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 2.9px rgba(255,255,255,0.16);animation-duration:5.44s;animation-delay:-5.97s;',
      'left:628.3px;top:272.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.53;box-shadow:0 0 3.7px rgba(255,255,255,0.16);animation-duration:5.64s;animation-delay:-1.69s;',
      'left:1142.1px;top:454.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.35;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:3.03s;animation-delay:-3.68s;',
      'left:216.6px;top:330.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.64;box-shadow:0 0 1.2px rgba(248,239,210,0.14);animation-duration:5.90s;animation-delay:-5.10s;',
      'left:2040.1px;top:189.3px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.71;box-shadow:0 0 3.5px rgba(248,239,210,0.14);animation-duration:3.06s;animation-delay:-5.81s;',
      'left:2044.1px;top:517.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.42;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:7.07s;animation-delay:-3.79s;',
      'left:982.0px;top:40.6px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.70;box-shadow:0 0 3.2px rgba(248,239,210,0.14);animation-duration:4.47s;animation-delay:-0.67s;',
      'left:317.2px;top:248.2px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.71;box-shadow:0 0 1.1px rgba(255,255,255,0.16);animation-duration:4.18s;animation-delay:-2.11s;',
      'left:1253.3px;top:260.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.70;box-shadow:0 0 3.3px rgba(255,255,255,0.16);animation-duration:5.74s;animation-delay:-2.87s;',
      'left:860.5px;top:139.2px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.71;box-shadow:0 0 2.3px rgba(248,239,210,0.14);animation-duration:4.03s;animation-delay:-2.83s;',
      'left:64.5px;top:181.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.45;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:5.59s;animation-delay:-3.24s;',
      'left:126.9px;top:362.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.52;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:4.20s;animation-delay:-4.62s;',
      'left:159.5px;top:454.6px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.60;box-shadow:0 0 3.4px rgba(208,224,255,0.12);animation-duration:6.53s;animation-delay:-3.56s;',
      'left:560.4px;top:417.1px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.87;box-shadow:0 0 1.8px rgba(208,224,255,0.12);animation-duration:5.85s;animation-delay:-2.51s;',
      'left:1525.9px;top:212.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:4.84s;animation-delay:-2.08s;',
      'left:1232.2px;top:388.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.33;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:5.61s;animation-delay:-0.39s;',
      'left:1085.9px;top:370.1px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.76;box-shadow:0 0 1.7px rgba(255,255,255,0.16);animation-duration:6.04s;animation-delay:-3.53s;',
      'left:1441.9px;top:356.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 2.5px rgba(255,255,255,0.16);animation-duration:4.38s;animation-delay:-5.46s;',
      'left:886.6px;top:0.9px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.30;box-shadow:0 0 3.0px rgba(208,224,255,0.12);animation-duration:3.66s;animation-delay:-4.54s;',
      'left:1395.0px;top:264.9px;width:1.5px;height:1.5px;background:rgba(248,239,210,0.92);opacity:0.93;box-shadow:0 0 1.9px rgba(248,239,210,0.14);animation-duration:4.29s;animation-delay:-1.35s;',
      'left:268.5px;top:42.4px;width:1.0px;height:1.0px;background:rgba(208,224,255,0.82);opacity:0.31;box-shadow:0 0 3.7px rgba(208,224,255,0.12);animation-duration:3.28s;animation-delay:-3.73s;',
      'left:1042.0px;top:470.4px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.72;box-shadow:0 0 4.0px rgba(255,255,255,0.16);animation-duration:5.51s;animation-delay:-1.91s;',
      'left:540.1px;top:347.8px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.83;box-shadow:0 0 1.6px rgba(255,255,255,0.16);animation-duration:3.23s;animation-delay:-0.69s;',
      'left:1234.3px;top:114.7px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.44;box-shadow:0 0 2.7px rgba(248,239,210,0.14);animation-duration:5.40s;animation-delay:-0.50s;',
      'left:756.5px;top:207.9px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.69;box-shadow:0 0 1.0px rgba(248,239,210,0.14);animation-duration:3.14s;animation-delay:-3.48s;',
      'left:1134.9px;top:47.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 3.4px rgba(255,255,255,0.16);animation-duration:4.16s;animation-delay:-1.83s;',
      'left:835.1px;top:276.3px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.43;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:6.51s;animation-delay:-3.18s;',
      'left:745.2px;top:390.9px;width:1.0px;height:1.0px;background:rgba(255,255,255,0.92);opacity:0.68;box-shadow:0 0 3.9px rgba(255,255,255,0.16);animation-duration:3.58s;animation-delay:-3.57s;',
      'left:498.7px;top:308.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 3.2px rgba(255,255,255,0.16);animation-duration:5.68s;animation-delay:-0.10s;',
      'left:597.0px;top:425.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 3.0px rgba(255,255,255,0.16);animation-duration:7.04s;animation-delay:-4.80s;',
      'left:774.5px;top:378.1px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.69;box-shadow:0 0 3.6px rgba(255,255,255,0.16);animation-duration:6.36s;animation-delay:-4.45s;',
      'left:1917.1px;top:476.2px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.93;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:5.90s;animation-delay:-0.99s;',
      'left:1779.8px;top:252.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.37;box-shadow:0 0 2.2px rgba(255,255,255,0.16);animation-duration:3.56s;animation-delay:-2.90s;',
      'left:996.4px;top:62.8px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.39;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:3.92s;animation-delay:-5.67s;',
      'left:728.6px;top:185.7px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.57;box-shadow:0 0 2.7px rgba(255,255,255,0.16);animation-duration:3.23s;animation-delay:-2.35s;',
      'left:1176.3px;top:517.7px;width:1.2px;height:1.2px;background:rgba(248,239,210,0.92);opacity:0.63;box-shadow:0 0 3.5px rgba(248,239,210,0.14);animation-duration:7.38s;animation-delay:-1.46s;',
      'left:935.6px;top:284.0px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 2.8px rgba(255,255,255,0.16);animation-duration:4.81s;animation-delay:-4.10s;',
      'left:225.9px;top:290.5px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.51;box-shadow:0 0 2.6px rgba(255,255,255,0.16);animation-duration:5.40s;animation-delay:-5.10s;',
      'left:1242.7px;top:285.0px;width:1.0px;height:1.0px;background:rgba(248,239,210,0.92);opacity:0.48;box-shadow:0 0 2.7px rgba(248,239,210,0.14);animation-duration:3.89s;animation-delay:-5.87s;',
      'left:1473.1px;top:517.8px;width:1.5px;height:1.5px;background:rgba(255,255,255,0.92);opacity:0.85;box-shadow:0 0 1.5px rgba(255,255,255,0.16);animation-duration:5.00s;animation-delay:-5.75s;',
      'left:2.0px;top:377.6px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.38;box-shadow:0 0 1.0px rgba(255,255,255,0.16);animation-duration:4.25s;animation-delay:-3.60s;',
      'left:1504.6px;top:76.1px;width:1.2px;height:1.2px;background:rgba(208,224,255,0.82);opacity:0.75;box-shadow:0 0 1.7px rgba(208,224,255,0.12);animation-duration:3.76s;animation-delay:-4.06s;',
      'left:498.9px;top:0.1px;width:1.9px;height:1.9px;background:rgba(248,239,210,0.92);opacity:0.72;box-shadow:0 0 2.9px rgba(248,239,210,0.14);animation-duration:7.04s;animation-delay:-1.91s;',
      'left:678.1px;top:239.5px;width:1.2px;height:1.2px;background:rgba(255,255,255,0.92);opacity:0.91;box-shadow:0 0 1.4px rgba(255,255,255,0.16);animation-duration:5.44s;animation-delay:-5.90s;'];
    var starItems = [{cls:'star-img', style:'left:48px;top:152px;width:98px;height:98px;animation-duration:1.60s;animation-delay:-0.00s;--base-scale:1.00;'},
      {cls:'star-img', style:'left:108px;top:394px;width:42px;height:42px;animation-duration:2.90s;animation-delay:-0.45s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:386px;top:166px;width:38px;height:38px;animation-duration:2.10s;animation-delay:-0.90s;--base-scale:1.05;'},
      {cls:'star-img', style:'left:882px;top:186px;width:32px;height:32px;animation-duration:3.40s;animation-delay:-1.35s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:1522px;top:118px;width:102px;height:102px;animation-duration:1.80s;animation-delay:-0.20s;--base-scale:1.10;'},
      {cls:'star-img', style:'left:1626px;top:162px;width:52px;height:52px;animation-duration:2.60s;animation-delay:-1.10s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:1730px;top:144px;width:77px;height:77px;animation-duration:3.10s;animation-delay:-0.70s;--base-scale:1.03;'},
      {cls:'star-img', style:'left:1980px;top:56px;width:63px;height:63px;animation-duration:2.30s;animation-delay:-1.60s;--base-scale:1.00;'},
      {cls:'star-img', style:'left:18px;top:72px;width:49px;height:49px;animation-duration:2.10s;animation-delay:-0.25s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:74px;top:48px;width:38px;height:38px;animation-duration:2.95s;animation-delay:-1.10s;--base-scale:1.04;'},
      {cls:'star-img', style:'left:150px;top:46px;width:32px;height:32px;animation-duration:1.85s;animation-delay:-0.55s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:246px;top:62px;width:35px;height:35px;animation-duration:3.20s;animation-delay:-1.55s;--base-scale:1.02;'},
      {cls:'star-img', style:'left:318px;top:104px;width:42px;height:42px;animation-duration:2.35s;animation-delay:-0.80s;--base-scale:1.08;'},
      {cls:'star-img', style:'left:354px;top:188px;width:32px;height:32px;animation-duration:2.80s;animation-delay:-1.95s;--base-scale:0.95;'},
      {cls:'star-img', style:'left:340px;top:304px;width:35px;height:35px;animation-duration:1.95s;animation-delay:-0.40s;--base-scale:1.00;'},
      {cls:'star-img', style:'left:290px;top:382px;width:28px;height:28px;animation-duration:3.35s;animation-delay:-1.25s;--base-scale:1.03;'},
      {cls:'star-img', style:'left:204px;top:422px;width:38px;height:38px;animation-duration:2.25s;animation-delay:-1.70s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:112px;top:430px;width:32px;height:32px;animation-duration:2.70s;animation-delay:-0.95s;--base-scale:1.05;'},
      {cls:'star-img', style:'left:42px;top:354px;width:28px;height:28px;animation-duration:1.75s;animation-delay:-0.30s;--base-scale:0.94;'},
      {cls:'star-img', style:'left:1842px;top:18px;width:32px;height:32px;animation-duration:2.60s;animation-delay:-0.60s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:1918px;top:24px;width:38px;height:38px;animation-duration:1.90s;animation-delay:-1.35s;--base-scale:1.07;'},
      {cls:'star-img', style:'left:1974px;top:18px;width:32px;height:32px;animation-duration:2.85s;animation-delay:-0.20s;--base-scale:0.95;'},
      {cls:'star-img', style:'left:2012px;top:54px;width:42px;height:42px;animation-duration:2.15s;animation-delay:-1.05s;--base-scale:1.03;'},
      {cls:'star-img', style:'left:1962px;top:116px;width:32px;height:32px;animation-duration:3.10s;animation-delay:-1.80s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:1888px;top:112px;width:28px;height:28px;animation-duration:2.45s;animation-delay:-0.75s;--base-scale:1.02;'},
      {cls:'star-img', style:'left:6px;top:36px;width:32px;height:32px;animation-duration:2.40s;animation-delay:-0.15s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:28px;top:108px;width:38px;height:38px;animation-duration:1.95s;animation-delay:-1.10s;--base-scale:1.05;'},
      {cls:'star-img', style:'left:44px;top:210px;width:35px;height:35px;animation-duration:2.80s;animation-delay:-0.60s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:20px;top:292px;width:32px;height:32px;animation-duration:3.25s;animation-delay:-1.55s;--base-scale:1.02;'},
      {cls:'star-img', style:'left:30px;top:402px;width:42px;height:42px;animation-duration:2.15s;animation-delay:-0.35s;--base-scale:1.08;'},
      {cls:'star-img', style:'left:66px;top:458px;width:35px;height:35px;animation-duration:2.70s;animation-delay:-1.20s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:126px;top:20px;width:28px;height:28px;animation-duration:3.05s;animation-delay:-0.75s;--base-scale:0.94;'},
      {cls:'star-img', style:'left:176px;top:28px;width:35px;height:35px;animation-duration:2.25s;animation-delay:-1.45s;--base-scale:1.03;'},
      {cls:'star-img', style:'left:222px;top:22px;width:32px;height:32px;animation-duration:1.85s;animation-delay:-0.50s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:280px;top:34px;width:38px;height:38px;animation-duration:2.55s;animation-delay:-1.05s;--base-scale:1.07;'},
      {cls:'star-img', style:'left:332px;top:66px;width:32px;height:32px;animation-duration:3.15s;animation-delay:-1.80s;--base-scale:0.95;'},
      {cls:'star-img', style:'left:372px;top:126px;width:42px;height:42px;animation-duration:2.05s;animation-delay:-0.30s;--base-scale:1.10;'},
      {cls:'star-img', style:'left:384px;top:236px;width:32px;height:32px;animation-duration:2.90s;animation-delay:-1.25s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:376px;top:336px;width:35px;height:35px;animation-duration:1.75s;animation-delay:-0.65s;--base-scale:1.00;'},
      {cls:'star-img', style:'left:342px;top:414px;width:28px;height:28px;animation-duration:3.30s;animation-delay:-1.70s;--base-scale:1.04;'},
      {cls:'star-img', style:'left:268px;top:452px;width:38px;height:38px;animation-duration:2.10s;animation-delay:-0.25s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:166px;top:470px;width:32px;height:32px;animation-duration:2.60s;animation-delay:-1.00s;--base-scale:1.06;'},
      {cls:'star-img', style:'left:94px;top:486px;width:28px;height:28px;animation-duration:3.45s;animation-delay:-1.95s;--base-scale:0.93;'},
      {cls:'star-img', style:'left:410px;top:120px;width:32px;height:32px;animation-duration:2.20s;animation-delay:-0.40s;--base-scale:1.02;'},
      {cls:'star-img', style:'left:430px;top:230px;width:28px;height:28px;animation-duration:2.95s;animation-delay:-1.30s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:402px;top:340px;width:35px;height:35px;animation-duration:1.90s;animation-delay:-0.85s;--base-scale:1.05;'},
      {cls:'star-img', style:'left:1818px;top:6px;width:28px;height:28px;animation-duration:2.35s;animation-delay:-0.30s;--base-scale:0.95;'},
      {cls:'star-img', style:'left:1858px;top:2px;width:35px;height:35px;animation-duration:1.85s;animation-delay:-1.20s;--base-scale:1.06;'},
      {cls:'star-img', style:'left:1898px;top:8px;width:32px;height:32px;animation-duration:2.70s;animation-delay:-0.70s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:1940px;top:0px;width:42px;height:42px;animation-duration:2.10s;animation-delay:-1.55s;--base-scale:1.08;'},
      {cls:'star-img', style:'left:1986px;top:2px;width:32px;height:32px;animation-duration:3.00s;animation-delay:-0.20s;--base-scale:0.94;'},
      {cls:'star-img', style:'left:2020px;top:10px;width:28px;height:28px;animation-duration:2.45s;animation-delay:-1.00s;--base-scale:1.03;'},
      {cls:'star-img', style:'left:2032px;top:42px;width:32px;height:32px;animation-duration:1.95s;animation-delay:-0.45s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:2024px;top:88px;width:28px;height:28px;animation-duration:2.85s;animation-delay:-1.65s;--base-scale:1.00;'},
      {cls:'star-img', style:'left:1994px;top:136px;width:35px;height:35px;animation-duration:2.20s;animation-delay:-0.80s;--base-scale:1.04;'},
      {cls:'star-img', style:'left:1946px;top:148px;width:32px;height:32px;animation-duration:3.20s;animation-delay:-1.35s;--base-scale:0.96;'},
      {cls:'star-img', style:'left:1904px;top:146px;width:28px;height:28px;animation-duration:2.55s;animation-delay:-0.55s;--base-scale:1.01;'},
      {cls:'star-img', style:'left:1848px;top:138px;width:32px;height:32px;animation-duration:1.80s;animation-delay:-1.50s;--base-scale:1.07;'},
      {cls:'star-img', style:'left:1812px;top:112px;width:35px;height:35px;animation-duration:2.65s;animation-delay:-0.25s;--base-scale:0.98;'},
      {cls:'star-img', style:'left:1796px;top:68px;width:28px;height:28px;animation-duration:3.10s;animation-delay:-1.10s;--base-scale:0.94;'},
      {cls:'star-img', style:'left:1804px;top:30px;width:32px;height:32px;animation-duration:2.05s;animation-delay:-0.60s;--base-scale:1.02;'},
      {cls:'star-img', style:'left:1880px;top:176px;width:32px;height:32px;animation-duration:2.75s;animation-delay:-1.85s;--base-scale:0.97;'},
      {cls:'star-img', style:'left:1942px;top:184px;width:28px;height:28px;animation-duration:2.30s;animation-delay:-0.95s;--base-scale:1.05;'},
      {cls:'star-img', style:'left:2002px;top:172px;width:35px;height:35px;animation-duration:1.90s;animation-delay:-0.35s;--base-scale:0.96;'},
      {cls:'star-img star-img-bg', style:'left:486px;top:38px;width:22px;height:22px;animation-duration:3.95s;animation-delay:-2.26s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:610px;top:56px;width:18px;height:18px;animation-duration:3.95s;animation-delay:-3.00s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:738px;top:30px;width:20px;height:20px;animation-duration:3.60s;animation-delay:-0.33s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:888px;top:48px;width:32px;height:32px;animation-duration:2.10s;animation-delay:-1.65s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:1038px;top:28px;width:28px;height:28px;animation-duration:1.85s;animation-delay:-1.04s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:1186px;top:50px;width:20px;height:20px;animation-duration:3.95s;animation-delay:-3.52s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:1328px;top:26px;width:18px;height:18px;animation-duration:1.85s;animation-delay:-3.48s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1464px;top:44px;width:22px;height:22px;animation-duration:2.65s;animation-delay:-3.70s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:560px;top:118px;width:26px;height:26px;animation-duration:2.65s;animation-delay:-3.84s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:706px;top:104px;width:18px;height:18px;animation-duration:2.95s;animation-delay:-3.11s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:962px;top:112px;width:26px;height:26px;animation-duration:2.35s;animation-delay:-0.43s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:1094px;top:94px;width:24px;height:24px;animation-duration:3.60s;animation-delay:-3.24s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1260px;top:110px;width:26px;height:26px;animation-duration:2.95s;animation-delay:-1.46s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1390px;top:96px;width:18px;height:18px;animation-duration:2.95s;animation-delay:-1.52s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:470px;top:170px;width:30px;height:30px;animation-duration:2.65s;animation-delay:-1.85s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:640px;top:172px;width:30px;height:30px;animation-duration:1.85s;animation-delay:-2.01s;--base-scale:1.00;'},
      {cls:'star-img star-img-bg', style:'left:770px;top:156px;width:28px;height:28px;animation-duration:2.95s;animation-delay:-0.95s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:930px;top:176px;width:28px;height:28px;animation-duration:2.95s;animation-delay:-3.73s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:1098px;top:164px;width:18px;height:18px;animation-duration:2.35s;animation-delay:-0.63s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:1262px;top:172px;width:30px;height:30px;animation-duration:1.55s;animation-delay:-0.88s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1428px;top:166px;width:28px;height:28px;animation-duration:3.25s;animation-delay:-3.11s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:520px;top:236px;width:28px;height:28px;animation-duration:2.65s;animation-delay:-3.80s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:676px;top:228px;width:20px;height:20px;animation-duration:1.85s;animation-delay:-2.91s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:840px;top:238px;width:18px;height:18px;animation-duration:2.65s;animation-delay:-1.34s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:1024px;top:230px;width:22px;height:22px;animation-duration:3.25s;animation-delay:-2.34s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:1168px;top:236px;width:18px;height:18px;animation-duration:3.25s;animation-delay:-3.58s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:1360px;top:228px;width:22px;height:22px;animation-duration:2.10s;animation-delay:-2.30s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:1508px;top:236px;width:26px;height:26px;animation-duration:2.35s;animation-delay:-0.76s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:462px;top:318px;width:20px;height:20px;animation-duration:2.35s;animation-delay:-3.84s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:612px;top:330px;width:24px;height:24px;animation-duration:3.25s;animation-delay:-0.54s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:786px;top:314px;width:22px;height:22px;animation-duration:3.25s;animation-delay:-2.69s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:952px;top:326px;width:26px;height:26px;animation-duration:2.35s;animation-delay:-1.42s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:1118px;top:314px;width:30px;height:30px;animation-duration:1.85s;animation-delay:-2.93s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1298px;top:328px;width:26px;height:26px;animation-duration:3.25s;animation-delay:-1.81s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1452px;top:318px;width:18px;height:18px;animation-duration:2.95s;animation-delay:-3.59s;--base-scale:1.00;'},
      {cls:'star-img star-img-bg', style:'left:500px;top:414px;width:32px;height:32px;animation-duration:3.95s;animation-delay:-1.18s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:684px;top:410px;width:26px;height:26px;animation-duration:2.35s;animation-delay:-2.14s;--base-scale:1.03;'},
      {cls:'star-img star-img-bg', style:'left:844px;top:430px;width:22px;height:22px;animation-duration:2.65s;animation-delay:-1.19s;--base-scale:1.06;'},
      {cls:'star-img star-img-bg', style:'left:1020px;top:412px;width:32px;height:32px;animation-duration:2.35s;animation-delay:-2.08s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:1184px;top:426px;width:24px;height:24px;animation-duration:2.35s;animation-delay:-2.61s;--base-scale:0.94;'},
      {cls:'star-img star-img-bg', style:'left:1368px;top:414px;width:18px;height:18px;animation-duration:3.25s;animation-delay:-1.19s;--base-scale:1.00;'},
      {cls:'star-img star-img-bg', style:'left:1542px;top:422px;width:20px;height:20px;animation-duration:1.55s;animation-delay:-2.00s;--base-scale:1.00;'},
      {cls:'star-img star-img-bg', style:'left:1702px;top:240px;width:26px;height:26px;animation-duration:3.60s;animation-delay:-2.86s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1778px;top:312px;width:20px;height:20px;animation-duration:3.25s;animation-delay:-0.17s;--base-scale:0.97;'},
      {cls:'star-img star-img-bg', style:'left:1680px;top:392px;width:28px;height:28px;animation-duration:2.35s;animation-delay:-1.19s;--base-scale:1.10;'},
      {cls:'star-img star-img-bg', style:'left:1610px;top:454px;width:32px;height:32px;animation-duration:2.35s;animation-delay:-3.09s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:14px;top:10px;width:44px;height:44px;animation-duration:2.80s;animation-delay:-1.35s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:92px;top:6px;width:40px;height:40px;animation-duration:3.20s;animation-delay:-3.74s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:182px;top:12px;width:36px;height:36px;animation-duration:2.40s;animation-delay:-3.53s;--base-scale:1.12;'},
      {cls:'star-img star-img-edge', style:'left:318px;top:8px;width:28px;height:28px;animation-duration:2.40s;animation-delay:-0.47s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:470px;top:10px;width:36px;height:36px;animation-duration:1.75s;animation-delay:-1.49s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:628px;top:6px;width:36px;height:36px;animation-duration:2.40s;animation-delay:-0.69s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:790px;top:12px;width:28px;height:28px;animation-duration:1.75s;animation-delay:-2.77s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:946px;top:8px;width:28px;height:28px;animation-duration:3.70s;animation-delay:-3.73s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:1118px;top:10px;width:28px;height:28px;animation-duration:1.45s;animation-delay:-1.02s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:1288px;top:6px;width:36px;height:36px;animation-duration:1.45s;animation-delay:-4.21s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:1458px;top:12px;width:40px;height:40px;animation-duration:3.70s;animation-delay:-1.34s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:1628px;top:8px;width:32px;height:32px;animation-duration:3.70s;animation-delay:-0.19s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:1788px;top:10px;width:40px;height:40px;animation-duration:2.80s;animation-delay:-4.00s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:1918px;top:6px;width:36px;height:36px;animation-duration:2.05s;animation-delay:-1.29s;--base-scale:1.12;'},
      {cls:'star-img star-img-edge', style:'left:20px;top:480px;width:36px;height:36px;animation-duration:1.75s;animation-delay:-1.57s;--base-scale:1.12;'},
      {cls:'star-img star-img-edge', style:'left:116px;top:486px;width:36px;height:36px;animation-duration:3.70s;animation-delay:-4.48s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:228px;top:478px;width:36px;height:36px;animation-duration:3.20s;animation-delay:-4.50s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:372px;top:484px;width:32px;height:32px;animation-duration:3.70s;animation-delay:-2.43s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:520px;top:480px;width:32px;height:32px;animation-duration:1.75s;animation-delay:-3.31s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:680px;top:486px;width:28px;height:28px;animation-duration:1.75s;animation-delay:-3.55s;--base-scale:1.12;'},
      {cls:'star-img star-img-edge', style:'left:842px;top:478px;width:44px;height:44px;animation-duration:2.05s;animation-delay:-0.18s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:1008px;top:484px;width:40px;height:40px;animation-duration:1.45s;animation-delay:-2.87s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:1178px;top:480px;width:30px;height:30px;animation-duration:1.75s;animation-delay:-2.39s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:1348px;top:486px;width:40px;height:40px;animation-duration:1.45s;animation-delay:-2.67s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:1514px;top:478px;width:44px;height:44px;animation-duration:2.40s;animation-delay:-4.33s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:1688px;top:484px;width:36px;height:36px;animation-duration:2.40s;animation-delay:-1.93s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:1858px;top:480px;width:32px;height:32px;animation-duration:1.45s;animation-delay:-4.21s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:1978px;top:486px;width:28px;height:28px;animation-duration:2.40s;animation-delay:-0.68s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:4px;top:58px;width:40px;height:40px;animation-duration:3.20s;animation-delay:-4.40s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:12px;top:122px;width:44px;height:44px;animation-duration:3.70s;animation-delay:-0.81s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:6px;top:196px;width:30px;height:30px;animation-duration:2.05s;animation-delay:-2.15s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:14px;top:276px;width:36px;height:36px;animation-duration:3.20s;animation-delay:-0.70s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:8px;top:356px;width:28px;height:28px;animation-duration:1.75s;animation-delay:-2.35s;--base-scale:1.04;'},
      {cls:'star-img star-img-edge', style:'left:10px;top:434px;width:40px;height:40px;animation-duration:1.75s;animation-delay:-2.85s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:2008px;top:54px;width:30px;height:30px;animation-duration:3.20s;animation-delay:-4.47s;--base-scale:0.96;'},
      {cls:'star-img star-img-edge', style:'left:2018px;top:128px;width:44px;height:44px;animation-duration:2.05s;animation-delay:-3.84s;--base-scale:1.08;'},
      {cls:'star-img star-img-edge', style:'left:2010px;top:208px;width:32px;height:32px;animation-duration:3.20s;animation-delay:-3.01s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:2018px;top:292px;width:30px;height:30px;animation-duration:2.80s;animation-delay:-0.91s;--base-scale:1.12;'},
      {cls:'star-img star-img-edge', style:'left:2006px;top:374px;width:30px;height:30px;animation-duration:1.45s;animation-delay:-2.10s;--base-scale:1.00;'},
      {cls:'star-img star-img-edge', style:'left:2014px;top:446px;width:28px;height:28px;animation-duration:3.20s;animation-delay:-2.52s;--base-scale:1.08;'}];

    function buildBackground() {
      var bg = document.createElement('div');
      bg.className = 'hero-bg';
      bg.setAttribute('aria-hidden', 'true');

      var scene = document.createElement('div');
      scene.className = 'hero-bg-scene';

      dotStyles.forEach(function(style) {
        var star = document.createElement('span');
        star.className = 'star-dot';
        star.setAttribute('style', style);
        scene.appendChild(star);
      });

      starItems.forEach(function(item) {
        var img = document.createElement('img');
        img.className = item.cls;
        img.src = (document.body && document.body.getAttribute('data-asset-prefix') ? document.body.getAttribute('data-asset-prefix') : '.') + '/assets/hero-star.png';
        img.alt = '';
        img.setAttribute('style', item.style);
        scene.appendChild(img);
      });

      bg.appendChild(scene);
      return bg;
    }

    function assetPrefixFor(el) {
      var path = (window.location.pathname || '').toLowerCase();
      if (path.indexOf('/demo/') !== -1) return '../..';
      if (path.indexOf('/vi/') !== -1 || path.indexOf('/cn/') !== -1) return '..';
      return '.';
    }

    function resizeScene(hero) {
      var scene = hero.querySelector('.hero-bg-scene');
      if (!scene) return;
      var rect = hero.getBoundingClientRect();
      var scaleX = rect.width / 2047;
      var scaleY = rect.height / 523;
      var scale = Math.max(scaleX, scaleY);
      scene.style.setProperty('--scene-scale', scale.toFixed(4));
    }

    heroNodes.forEach(function(hero) {
      if (hero.querySelector('.hero-bg')) {
        resizeScene(hero);
        return;
      }
      if (document.body) document.body.setAttribute('data-asset-prefix', assetPrefixFor(hero));
      var bg = buildBackground();
      hero.insertBefore(bg, hero.firstChild);
      resizeScene(hero);
    });

    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(function(entries) {
        entries.forEach(function(entry) { resizeScene(entry.target); });
      });
      heroNodes.forEach(function(hero) { ro.observe(hero); });
    } else {
      window.addEventListener('resize', function() {
        heroNodes.forEach(function(hero) { resizeScene(hero); });
      });
    }
  }

  function initQuicklinks() {
    document.querySelectorAll('[data-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-open');
        var target = document.getElementById(id);
        if (!target) return;
        if (target.tagName && target.tagName.toLowerCase() === 'details') target.open = true;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initPricingTool() {
    if (!document.getElementById('priceBody')) return;

    var pathLower = window.location.pathname.toLowerCase();
    var docLang = (document.documentElement.lang || '').toLowerCase();
    var bodyLang = ((document.body && document.body.getAttribute('data-page-lang')) || '').toLowerCase();
    var forcedLang = ((window.__MMM_LANG || '') + '').toLowerCase();
    var pricingLang = ((document.body && document.body.getAttribute('data-pricing-lang')) || '').toLowerCase();

    function startsWithAny(value, prefixes) {
      return prefixes.some(function (prefix) { return value.indexOf(prefix) === 0; });
    }

    function resolvePricingLocale() {
      if (pathLower.indexOf('/cn/') !== -1) return 'zh';
      if (pathLower.indexOf('/vi/') !== -1) return 'vi';
      if (/\/pricing(?:\.html)?$/.test(pathLower)) return 'en';
      if (startsWithAny(pricingLang, ['zh', 'cn'])) return 'zh';
      if (startsWithAny(pricingLang, ['vi'])) return 'vi';
      if ((document.body && document.body.classList.contains('page-cn')) || startsWithAny(bodyLang, ['zh', 'cn']) || startsWithAny(docLang, ['zh', 'cn']) || startsWithAny(forcedLang, ['zh', 'cn'])) return 'zh';
      if ((document.body && document.body.classList.contains('page-vi')) || startsWithAny(bodyLang, ['vi']) || startsWithAny(docLang, ['vi']) || startsWithAny(forcedLang, ['vi'])) return 'vi';
      return 'en';
    }

    var pricingLocale = resolvePricingLocale();
    var isVi = pricingLocale === 'vi';
    var isZh = pricingLocale === 'zh';

    function t(en, vi, zh) {
      return isVi ? vi : (isZh ? zh : en);
    }

    var rows = isVi ? [
      { icon:'👩‍🏫', program:'1 kèm 1', p30:{ online:55, inperson:60 }, p60:{ online:100, inperson:110 } },
      { icon:'👩‍👦', program:'2 học sinh', p30:{ online:45, inperson:50 }, p60:{ online:80, inperson:90 } },
      { icon:'👨‍👩‍👧', program:'3 học sinh', p30:{ online:35, inperson:40 }, p60:{ online:60, inperson:70 } },
      { icon:'👨‍👩‍👧‍👦', program:'4 học sinh', p30:{ online:30, inperson:35 }, p60:{ online:50, inperson:60 } },
      { icon:'👨‍👩‍👧‍👦🧑', program:'5 học sinh', p30:{ online:25, inperson:30 }, p60:{ online:40, inperson:50 }, min60:true },
      { icon:'👨‍👩‍👧‍👦🧑+', program:'5+ học sinh', p30:{ online:20, inperson:25 }, p60:{ online:35, inperson:45 }, min60:true }
    ] : isZh ? [
      { icon:'👩‍🏫', program:'一对一', p30:{ online:55, inperson:60 }, p60:{ online:100, inperson:110 } },
      { icon:'👩‍👦', program:'2 位学生', p30:{ online:45, inperson:50 }, p60:{ online:80, inperson:90 } },
      { icon:'👨‍👩‍👧', program:'3 位学生', p30:{ online:35, inperson:40 }, p60:{ online:60, inperson:70 } },
      { icon:'👨‍👩‍👧‍👦', program:'4 位学生', p30:{ online:30, inperson:35 }, p60:{ online:50, inperson:60 } },
      { icon:'👨‍👩‍👧‍👦🧑', program:'5 位学生', p30:{ online:25, inperson:30 }, p60:{ online:40, inperson:50 }, min60:true },
      { icon:'👨‍👩‍👧‍👦🧑+', program:'5 位以上学生', p30:{ online:20, inperson:25 }, p60:{ online:35, inperson:45 }, min60:true }
    ] : [
      { icon:'👩‍🏫', program:'One-to-One', p30:{ online:55, inperson:60 }, p60:{ online:100, inperson:110 } },
      { icon:'👩‍👦', program:'2 students', p30:{ online:45, inperson:50 }, p60:{ online:80, inperson:90 } },
      { icon:'👨‍👩‍👧', program:'3 students', p30:{ online:35, inperson:40 }, p60:{ online:60, inperson:70 } },
      { icon:'👨‍👩‍👧‍👦', program:'4 students', p30:{ online:30, inperson:35 }, p60:{ online:50, inperson:60 } },
      { icon:'👨‍👩‍👧‍👦🧑', program:'5 students', p30:{ online:25, inperson:30 }, p60:{ online:40, inperson:50 }, min60:true },
      { icon:'👨‍👩‍👧‍👦🧑+', program:'5+ students', p30:{ online:20, inperson:25 }, p60:{ online:35, inperson:45 }, min60:true }
    ];

    var adjustments = isVi ? {
      primary:{ add30:-5, add60:-10, badge:'Điều chỉnh Tiểu học', rule:'Toán Tiểu học: –$5 (30 phút) và –$10 (60 phút) mỗi học sinh.', extra:'Gợi ý: nếu con bạn cần bồi dưỡng hoặc nâng cao, hãy hỏi về lộ trình phù hợp.' },
      mid:{ add30:0, add60:0, badge:'Giá chuẩn', rule:'Toán Lớp 7–10: giá chuẩn (không điều chỉnh).', extra:'Gợi ý: buổi 60 phút có thêm thời gian luyện tập + phản hồi.' },
      vce:{ extra:'Với Toán VCE, chúng tôi khuyến nghị mạnh mẽ buổi 60 phút.' }
    } : isZh ? {
      primary:{ add30:-5, add60:-10, badge:'小学阶段调整', rule:'小学数学：每位学生 30 分钟减 $5，60 分钟减 $10。', extra:'提示：如果孩子需要巩固或拔高，请咨询适合的学习方案。' },
      mid:{ add30:0, add60:0, badge:'标准收费', rule:'7–10 年级数学：标准收费（不作调整）。', extra:'提示：60 分钟课程能提供更多练习与反馈。' },
      vce:{ extra:'对于 VCE 数学，我们强烈建议选择 60 分钟课程。' }
    } : {
      primary:{ add30:-5, add60:-10, badge:'Primary adjustment', rule:'Primary Maths: –$5 (30 min) and –$10 (60 min) per student.', extra:'Tip: If your child needs enrichment or extension, ask about a tailored plan.' },
      mid:{ add30:0, add60:0, badge:'Standard pricing', rule:'Years 7–10 Maths: standard pricing (no adjustment).', extra:'Tip: 60-minute sessions allow more practice + feedback.' },
      vce:{ extra:'For VCE Maths, 60-minute sessions are strongly recommended.' }
    };

    var vceSubjects = isVi ? {
      general:{ add30:+10, add60:+15, label:'VCE Toán Tổng quát: +$10 (30) và +$15 (60) mỗi học sinh.' },
      methods:{ add30:+15, add60:+20, label:'VCE Toán Phương pháp: +$15 (30) và +$20 (60) mỗi học sinh.' },
      specialist:{ add30:+20, add60:+25, label:'VCE Toán Chuyên sâu: +$20 (30) và +$25 (60) mỗi học sinh.' }
    } : isZh ? {
      general:{ add30:+10, add60:+15, label:'VCE 普通数学：每位学生 30 分钟加 $10，60 分钟加 $15。' },
      methods:{ add30:+15, add60:+20, label:'VCE 数学方法：每位学生 30 分钟加 $15，60 分钟加 $20。' },
      specialist:{ add30:+20, add60:+25, label:'VCE 专业数学：每位学生 30 分钟加 $20，60 分钟加 $25。' }
    } : {
      general:{ add30:+10, add60:+15, label:'VCE General Maths: +$10 (30) and +$15 (60) per student.' },
      methods:{ add30:+15, add60:+20, label:'VCE Maths Methods: +$15 (30) and +$20 (60) per student.' },
      specialist:{ add30:+20, add60:+25, label:'VCE Specialist Maths: +$20 (30) and +$25 (60) per student.' }
    };

    var tracks = isVi ? {
      standard:{ add30:0, add60:0, name:'Chuẩn', label:'Dạy kèm chuẩn: +$0.', min60:false, extra:'Trọng tâm: bám sát ở trường, hỗ trợ bài tập, xây tự tin.' },
      extension:{ add30:+5, add60:+10, name:'Nâng cao', label:'Nâng cao: +$5 (30) và +$10 (60) mỗi học sinh.', min60:false, extra:'Trọng tâm: bồi dưỡng, hiểu sâu, bài nâng cao.' },
      selective:{ add30:+10, add60:+20, name:'Thi tuyển chọn', label:'Thi tuyển chọn: +$10 (30) và +$20 (60) mỗi học sinh.', min60:true, extra:'Trọng tâm: kỹ thuật làm bài, tốc độ, lập luận, luyện đề.' },
      amc:{ add30:+15, add60:+25, name:'AMC/AMO', label:'AMC/AMO: +$15 (30) và +$25 (60) mỗi học sinh.', min60:true, extra:'Trọng tâm: chiến lược thi, tư duy nâng cao, giải quyết vấn đề.' },
      amointensive:{ add30:+20, add60:+30, name:'AMO Chuyên sâu', label:'AMO Chuyên sâu: +$20 (30) và +$30 (60) mỗi học sinh.', min60:true, extra:'Trọng tâm: luyện Olympiad nâng cao, chứng minh, bộ bài khó.' }
    } : isZh ? {
      standard:{ add30:0, add60:0, name:'标准课程', label:'标准课程辅导：+$0。', min60:false, extra:'重点：跟进学校学习、作业支持与建立信心。' },
      extension:{ add30:+5, add60:+10, name:'拓展课程', label:'拓展课程：每位学生 30 分钟加 $5，60 分钟加 $10。', min60:false, extra:'重点：拓展提升、更深入理解与更高阶题目。' },
      selective:{ add30:+10, add60:+20, name:'选拔考试', label:'选拔考试：每位学生 30 分钟加 $10，60 分钟加 $20。', min60:true, extra:'重点：做题技巧、速度、推理与模拟练习。' },
      amc:{ add30:+15, add60:+25, name:'数学竞赛', label:'数学竞赛：每位学生 30 分钟加 $15，60 分钟加 $25。', min60:true, extra:'重点：竞赛解题、策略与高阶推理。' },
      amointensive:{ add30:+20, add60:+30, name:'竞赛强化', label:'竞赛强化：每位学生 30 分钟加 $20，60 分钟加 $30。', min60:true, extra:'重点：高阶奥赛训练、证明与高难度题组。' }
    } : {
      standard:{ add30:0, add60:0, name:'Standard', label:'Standard tutoring: +$0.', min60:false, extra:'Focus: school learning, homework support, confidence building.' },
      extension:{ add30:+5, add60:+10, name:'Extension', label:'Extension: +$5 (30) and +$10 (60) per student.', min60:false, extra:'Focus: enrichment, deeper understanding, higher-level questions.' },
      selective:{ add30:+10, add60:+20, name:'Selective tests', label:'Selective tests: +$10 (30) and +$20 (60) per student.', min60:true, extra:'Focus: test technique, speed, reasoning, practice papers.' },
      amc:{ add30:+15, add60:+25, name:'AMC/AMO', label:'AMC/AMO: +$15 (30) and +$25 (60) per student.', min60:true, extra:'Focus: competition problem solving, strategies, advanced reasoning.' },
      amointensive:{ add30:+20, add60:+30, name:'AMO Intensive', label:'AMO Intensive: +$20 (30) and +$30 (60) per student.', min60:true, extra:'Focus: advanced Olympiad training, proofs, and high-difficulty problem sets.' }
    };

    var currentLevel='primary', currentVce='general', currentTrack='standard';

    function money(n){ return '$'+Math.max(0,n); }
    function yearAdj(){ return currentLevel === 'vce' ? vceSubjects[currentVce] : adjustments[currentLevel]; }
    function totalAdd30(){ var y=yearAdj(), tr=tracks[currentTrack]; return (y.add30||0)+(tr.add30||0); }
    function totalAdd60(){ var y=yearAdj(), tr=tracks[currentTrack]; return (y.add60||0)+(tr.add60||0); }
    function setText(id, txt){ var el=document.getElementById(id); if(el) el.textContent=txt; }
    function setHTML(id, html){ var el=document.getElementById(id); if(el) el.innerHTML=html; }
    function priceCells(online, inperson){
      return '<div class="cells"><div class="pricebox"><div class="price">'+money(online)+'</div><div class="tag online">'+t('🌐 Online','Trực tuyến','🌐 线上')+'</div></div><div class="pricebox"><div class="price">'+money(inperson)+'</div><div class="tag inperson">'+t('📍 In-person','Trực tiếp','📍 线下')+'</div></div></div>';
    }
    function selectionLabel(){
      var yearLabel;
      if (currentLevel === 'primary') yearLabel = t('Primary','Tiểu học','小学阶段');
      else if (currentLevel === 'mid') yearLabel = t('Years 7–10','Lớp 7–10','7–10 年级');
      else {
        yearLabel = isVi ? 'VCE ('+(currentVce==='general'?'Tổng quát':currentVce==='methods'?'Phương pháp':'Chuyên sâu')+')' :
          isZh ? 'VCE ' + (currentVce==='general'?'普通数学':currentVce==='methods'?'数学方法':'专业数学') :
          'VCE ' + currentVce.charAt(0).toUpperCase() + currentVce.slice(1);
      }
      return yearLabel + ' • ' + tracks[currentTrack].name;
    }
    function updateFeesAtGlance(){
      var add30=totalAdd30(), add60=totalAdd60(), oneToOne=rows[0], force60_1to1=!!oneToOne.min60 || tracks[currentTrack].min60;
      setText('glance-price-online', '$'+(oneToOne.p60.online+add60));
      setText('glance-price-inperson', '$'+(oneToOne.p60.inperson+add60));
      var label=selectionLabel();
      setText('glance-badge-online', t('1-to-1 • 60 min • ','1 kèm 1 • 60 phút • ','一对一 • 60 分钟 • ') + label);
      setText('glance-badge-inperson', t('1-to-1 • 60 min • ','1 kèm 1 • 60 phút • ','一对一 • 60 分钟 • ') + label);
      setText('glance-badge-30', t('1-to-1 • 30 min • ','1 kèm 1 • 30 phút • ','一对一 • 30 分钟 • ') + label);
      if(force60_1to1){
        setText('glance-price-30', t('60-min required','Bắt buộc 60 phút','必须为 60 分钟'));
        setText('glance-30-note', t('This selection requires 60-minute sessions for quality/results.','Lựa chọn này yêu cầu buổi 60 phút để đảm bảo chất lượng/kết quả.','此选项需要 60 分钟课程，以保证质量和学习效果。'));
        setHTML('glance-30-helper', t('<strong>Why?</strong> These programs need time for strategy + deep practice + feedback.','<strong>Vì sao?</strong> Cần đủ thời gian cho chiến lược + luyện sâu + phản hồi.','<strong>为什么？</strong> 这些课程需要足够时间进行策略讲解、深入练习与反馈。'));
      } else {
        setText('glance-price-30', '$'+(oneToOne.p30.online+add30)+' / $'+(oneToOne.p30.inperson+add30));
        setText('glance-30-note', t('Online / In-person (per student)','Trực tuyến / trực tiếp (mỗi học sinh)','线上 / 线下（每位学生）'));
        setText('glance-30-helper', t('Tip: 60 minutes usually gives better progress (more time for practice + feedback).','Gợi ý: 60 phút thường hiệu quả hơn (nhiều thời gian luyện tập + phản hồi).','提示：60 分钟课程通常效果更好（有更多时间进行练习与反馈）。'));
      }
      var fivePlus=rows[5];
      setText('glance-badge-5plus', t('5+ students • 60 min • ','5+ học sinh • 60 phút • ','5 人以上 • 60 分钟 • ') + label);
      setText('glance-price-5plus', '$'+(fivePlus.p60.online+add60)+' / $'+(fivePlus.p60.inperson+add60));
      setText('glance-per-5plus', t('per 60 minutes (online / in-person • per student)','mỗi 60 phút (trực tuyến / trực tiếp • mỗi học sinh)','每 60 分钟（线上 / 线下 • 每位学生）'));
    }
    function render(){
      var y=yearAdj(), tr=tracks[currentTrack], vceBox=document.getElementById('vceBox');
      if(vceBox) vceBox.style.display = currentLevel === 'vce' ? 'block' : 'none';
      setText('badgeYear', currentLevel === 'vce' ? t('VCE subject','Môn VCE','VCE 科目') : adjustments[currentLevel].badge);
      setText('badgeTrack', tr.name);
      setHTML('ruleLine', (currentLevel === 'vce' ? y.label : adjustments[currentLevel].rule) + '<br>' + tr.label);
      setText('extraLine', ((currentLevel === 'vce' ? adjustments.vce.extra : adjustments[currentLevel].extra) + ' ' + tr.extra).trim());
      var add30=totalAdd30(), add60=totalAdd60(), tbody=document.getElementById('priceBody');
      if(!tbody) return;
      tbody.innerHTML='';
      rows.forEach(function(r){
        var trEl=document.createElement('tr');
        var tdIcon=document.createElement('td'); tdIcon.className='icon'; tdIcon.textContent=r.icon;
        var tdProg=document.createElement('td'); tdProg.innerHTML='<div class="program">'+r.program+'</div>';
        var td30=document.createElement('td'); var force60=!!r.min60 || tracks[currentTrack].min60;
        if(force60){
          td30.innerHTML='<div class="locked"><div class="label">'+t('60-minute minimum','Tối thiểu 60 phút','至少 60 分钟')+'</div><div class="small">'+(r.min60 ? t('For 5+ students we only offer 60-minute sessions to keep lesson quality high.','Với nhóm 5+ học sinh, chỉ áp dụng buổi 60 phút để đảm bảo chất lượng buổi học.','对于 5 人以上小组，为保证课程质量，我们仅提供 60 分钟课程。') : t('For this program type, 60-minute sessions are required for best results.','Với loại chương trình này, buổi 60 phút là bắt buộc để đạt kết quả tốt.','对于这种课程类型，为取得最佳效果需要 60 分钟课程。'))+'</div></div>';
        } else {
          td30.innerHTML=priceCells(r.p30.online+add30, r.p30.inperson+add30);
        }
        var td60=document.createElement('td'); td60.innerHTML=priceCells(r.p60.online+add60, r.p60.inperson+add60);
        trEl.appendChild(tdIcon); trEl.appendChild(tdProg); trEl.appendChild(td30); trEl.appendChild(td60); tbody.appendChild(trEl);
      });
      updateFeesAtGlance();
    }

    document.querySelectorAll('[data-level]').forEach(function(btn){ btn.addEventListener('click', function(){ currentLevel=btn.dataset.level; document.querySelectorAll('[data-level]').forEach(function(b){ var active=b.dataset.level===currentLevel; b.classList.toggle('active',active); b.setAttribute('aria-selected', active?'true':'false'); }); render(); }); });
    document.querySelectorAll('[data-vce]').forEach(function(btn){ btn.addEventListener('click', function(){ currentVce=btn.dataset.vce; document.querySelectorAll('[data-vce]').forEach(function(b){ var active=b.dataset.vce===currentVce; b.classList.toggle('active',active); b.setAttribute('aria-selected', active?'true':'false'); }); render(); }); });
    document.querySelectorAll('[data-track]').forEach(function(btn){ btn.addEventListener('click', function(){ currentTrack=btn.dataset.track; document.querySelectorAll('[data-track]').forEach(function(b){ var active=b.dataset.track===currentTrack; b.classList.toggle('active',active); b.setAttribute('aria-selected', active?'true':'false'); }); render(); }); });
    render();
  }

  function isVietnamesePage() {
    return document.documentElement.lang === 'vi' ||
      document.body.classList.contains('page-vi') ||
      window.location.pathname.toLowerCase().indexOf('/vi/') !== -1;
  }

  function setModalOpen(modal, open) {
    if (!modal) return;
    if (open) {
      modal.hidden = false;
      modal.removeAttribute('hidden');
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    } else {
      if (modal.classList.contains('modal-backdrop')) modal.hidden = true;
      else modal.setAttribute('hidden', '');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }

  function wireModalClose(modal, closeBtn) {
    if (!modal) return;
    if (closeBtn && !closeBtn.dataset.boundClose) {
      closeBtn.dataset.boundClose = 'true';
      closeBtn.addEventListener('click', function () {
        setModalOpen(modal, false);
      });
    }
    if (!modal.dataset.boundBackdrop) {
      modal.dataset.boundBackdrop = 'true';
      modal.addEventListener('click', function (event) {
        if (event.target === modal) setModalOpen(modal, false);
      });
    }
  }

  function syncSelectOther(select) {
    var targetId = select && select.dataset ? select.dataset.target : '';
    var otherValue = select && select.dataset ? select.dataset.otherValue : '';
    if (!targetId || !otherValue) return;
    var target = document.getElementById(targetId);
    if (!target) return;

    var isActive = select.value === otherValue;
    target.classList.toggle('show', isActive);

    var field = target.querySelector('input, textarea, select');
    if (field) {
      field.required = isActive;
      if (!isActive && 'value' in field) field.value = '';
    }
  }

  function initSelectOtherFields(root) {
    (root || document).querySelectorAll('select[data-target]').forEach(function (select) {
      if (select.dataset.boundOther === 'true') return;
      select.dataset.boundOther = 'true';
      select.addEventListener('change', function () {
        syncSelectOther(select);
      });
      syncSelectOther(select);
    });
  }

  function initRegisterForm() {
    var form = document.getElementById('registerForm');
    if (!form) return;

    var isVi = isVietnamesePage();
    var checkboxGroup = Array.prototype.slice.call(form.querySelectorAll('input[name="register_for"]'));
    var registerError = document.getElementById('registerError');
    var submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    var modal = document.getElementById('registerThankYouModal') || document.getElementById('thankYouModal');
    var closeBtn = document.getElementById('registerThankYouOkBtn') || document.getElementById('closeThankYou') || document.getElementById('thankYouOkBtn');
    var copyEmailBtn = document.getElementById('copyEmailBtn');
    var copyNote = document.getElementById('copyNote');
    var supportEmail = 'magicmathmasters@gmail.com';
    var submitFrame = null;
    var submitTarget = form.getAttribute('target');
    var submissionPending = false;

    if (submitTarget) submitFrame = document.querySelector('iframe[name="' + submitTarget + '"]');

    function validatePrograms() {
      if (!checkboxGroup.length) return true;
      var hasSelection = checkboxGroup.some(function (box) { return box.checked; });
      if (registerError) registerError.classList.toggle('show', !hasSelection);
      checkboxGroup.forEach(function (box) {
        box.setCustomValidity(hasSelection ? '' : (isVi ? 'Vui lòng chọn ít nhất một chương trình.' : 'Please select at least one program.'));
      });
      return hasSelection;
    }

    function resetFormState() {
      form.reset();
      initSelectOtherFields(form);
      validatePrograms();
      if (copyNote) copyNote.textContent = '';
    }

    function showThanks() {
      if (!modal) return;
      setModalOpen(modal, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    checkboxGroup.forEach(function (box) {
      if (box.dataset.boundRegisterChange === 'true') return;
      box.dataset.boundRegisterChange = 'true';
      box.addEventListener('change', validatePrograms);
    });

    initSelectOtherFields(form);
    validatePrograms();
    wireModalClose(modal, closeBtn);

    if (submitFrame && !submitFrame.dataset.boundRegisterLoad) {
      submitFrame.dataset.boundRegisterLoad = 'true';
      submitFrame.addEventListener('load', function () {
        if (!submissionPending) return;
        submissionPending = false;
        resetFormState();
        showThanks();
      });
    }

    if (copyEmailBtn && !copyEmailBtn.dataset.boundCopy) {
      copyEmailBtn.dataset.boundCopy = 'true';
      copyEmailBtn.addEventListener('click', function () {
        var writePromise;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          writePromise = navigator.clipboard.writeText(supportEmail);
        } else {
          writePromise = new Promise(function (resolve, reject) {
            try {
              var temp = document.createElement('input');
              temp.value = supportEmail;
              document.body.appendChild(temp);
              temp.select();
              document.execCommand('copy');
              document.body.removeChild(temp);
              resolve();
            } catch (err) {
              reject(err);
            }
          });
        }
        writePromise.then(function () {
          if (copyNote) copyNote.textContent = (isVi ? 'Đã sao chép email: ' : 'Copied email: ') + supportEmail;
        }).catch(function () {
          if (copyNote) copyNote.textContent = (isVi ? 'Không thể sao chép tự động. Vui lòng sao chép thủ công: ' : 'Could not copy automatically. Please copy manually: ') + supportEmail;
        });
      });
    }

    if (!form.dataset.boundSubmit) {
      form.dataset.boundSubmit = 'true';
      form.addEventListener('submit', function (event) {
        var programsValid = validatePrograms();
        if (!programsValid || !form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
          return;
        }

        if (submitFrame) {
          submissionPending = true;
          return;
        }

        event.preventDefault();
        var originalLabel = submitButton ? submitButton.textContent : '';
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = isVi ? 'Đang gửi...' : 'Submitting...';
        }

        fetch(form.action, {
          method: 'POST',
          mode: 'no-cors',
          body: new FormData(form)
        }).then(function () {
          resetFormState();
          showThanks();
        }).catch(function () {
          alert(isVi ? 'Có lỗi khi gửi biểu mẫu. Vui lòng thử lại hoặc liên hệ qua điện thoại / email.' : 'There was a problem submitting the form. Please try again or contact us by phone/email.');
        }).finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalLabel;
          }
        });
      });
    }
  }

  function initEnquiryForm() {
    var form = document.getElementById('enquiryForm');
    if (!form) return;

    var isVi = isVietnamesePage();
    var submitFrame = null;
    var submitTarget = form.getAttribute('target');
    var modal = document.getElementById('thankYouModal');
    var closeBtn = modal ? modal.querySelector('button') : null;
    var submissionPending = false;

    if (submitTarget) submitFrame = document.querySelector('iframe[name="' + submitTarget + '"]');

    wireModalClose(modal, closeBtn);

    if (submitFrame && !submitFrame.dataset.boundEnquiryLoad) {
      submitFrame.dataset.boundEnquiryLoad = 'true';
      submitFrame.addEventListener('load', function () {
        if (!submissionPending) return;
        submissionPending = false;
        form.reset();
        setModalOpen(modal, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (!form.dataset.boundSubmit) {
      form.dataset.boundSubmit = 'true';
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
          return;
        }

        if (submitFrame) {
          submissionPending = true;
          return;
        }

        event.preventDefault();
        fetch(form.action, {
          method: 'POST',
          mode: 'no-cors',
          body: new FormData(form)
        }).then(function () {
          form.reset();
          setModalOpen(modal, true);
        }).catch(function () {
          alert(isVi ? 'Có lỗi khi gửi biểu mẫu. Vui lòng thử lại.' : 'There was a problem submitting the form. Please try again.');
        });
      });
    }
  }

  function initMathsClubRegisterForm() {
    var form = document.getElementById('mathsClubRegisterForm');
    if (!form) return;

    var tableBody = document.querySelector('#studentTable tbody');
    if (!tableBody || !tableBody.rows.length) return;

    var firstRowTemplate = tableBody.rows[0].cloneNode(true);
    var clubOptions = document.querySelectorAll('.club-option');
    var clubRadios = document.querySelectorAll('input[name="clubStream"]');
    var prep6Radio = document.getElementById('club-prep6');
    var prepSubgroupWrap = document.getElementById('prepSubgroupWrap');
    var prepSubgroupRadios = document.querySelectorAll('input[name="prepSubgroup"]');
    var submitFrame = document.querySelector('iframe[name="' + (form.getAttribute('target') || '') + '"]');
    var successMessage = document.getElementById('successMessage');
    var competitionMode = document.getElementById('competitionMode');
    var competitionLocationGroup = document.getElementById('competitionLocationGroup');
    var competitionLocation = document.getElementById('competitionLocation');
    var clubStreamField = document.getElementById('clubStreamField');
    var prepSubgroupField = document.getElementById('prepSubgroupField');
    var studentsField = document.getElementById('studentsField');
    var clubModal = document.getElementById('clubThankYouModal');
    var clubOkBtn = document.getElementById('clubThankYouOkBtn');
    var submissionPending = false;

    function clearRowValues(row) {
      row.querySelectorAll('input, select, textarea').forEach(function (field) {
        if (field.type === 'checkbox' || field.type === 'radio') field.checked = false;
        else field.value = '';
      });
    }

    function updateRowNumbers() {
      document.querySelectorAll('#studentTable tbody tr').forEach(function (row, index) {
        var num = row.querySelector('.row-number');
        if (num) num.textContent = index + 1;
      });
    }

    function addRow() {
      var newRow = firstRowTemplate.cloneNode(true);
      clearRowValues(newRow);
      tableBody.appendChild(newRow);
      updateRowNumbers();
    }

    function removeRow(button) {
      if (tableBody.rows.length === 1) {
        alert('At least one student row must remain in the register.');
        return;
      }
      var row = button && button.closest ? button.closest('tr') : null;
      if (row) row.remove();
      updateRowNumbers();
    }

    function resetTable() {
      while (tableBody.rows.length > 1) tableBody.deleteRow(1);
      clearRowValues(tableBody.rows[0]);
      updateRowNumbers();
    }

    function resetClubSelection() {
      clubRadios.forEach(function (radio) { radio.checked = false; });
      prepSubgroupRadios.forEach(function (radio) {
        radio.checked = false;
        radio.required = false;
      });
      clubOptions.forEach(function (card) { card.classList.remove('active'); });
      if (prepSubgroupWrap) prepSubgroupWrap.classList.remove('show');
    }

    function updateClubUI() {
      clubOptions.forEach(function (card) {
        var radio = card.querySelector('input[type="radio"]');
        card.classList.toggle('active', !!(radio && radio.checked));
      });

      if (prep6Radio && prep6Radio.checked) {
        if (prepSubgroupWrap) prepSubgroupWrap.classList.add('show');
        prepSubgroupRadios.forEach(function (radio) { radio.required = true; });
      } else {
        if (prepSubgroupWrap) prepSubgroupWrap.classList.remove('show');
        prepSubgroupRadios.forEach(function (radio) {
          radio.required = false;
          radio.checked = false;
        });
      }
    }

    function updateCompetitionLocation() {
      var needsLocation = competitionMode && competitionMode.value === 'In-person (if available)';
      if (!competitionLocationGroup || !competitionLocation) return;
      competitionLocationGroup.style.display = needsLocation ? 'block' : 'none';
      competitionLocation.required = !!needsLocation;
      if (!needsLocation) competitionLocation.value = '';
    }

    function collectPayload() {
      var selectedClub = document.querySelector('input[name="clubStream"]:checked');
      var selectedPrepSubgroup = document.querySelector('input[name="prepSubgroup"]:checked');
      var rows = Array.prototype.slice.call(document.querySelectorAll('#studentTable tbody tr'));
      return {
        clubStream: selectedClub ? selectedClub.value : '',
        prepSubgroup: selectedPrepSubgroup ? selectedPrepSubgroup.value : '',
        students: rows.map(function (row, index) {
          return {
            rowNumber: index + 1,
            studentName: (row.querySelector('input[name="studentName[]"]') || {}).value || '',
            preferredName: (row.querySelector('input[name="preferredName[]"]') || {}).value || '',
            grade: (row.querySelector('select[name="grade[]"]') || {}).value || '',
            school: (row.querySelector('input[name="school[]"]') || {}).value || '',
            mathsFocus: (row.querySelector('select[name="mathsFocus[]"]') || {}).value || '',
            studentNotes: (row.querySelector('input[name="studentNotes[]"]') || {}).value || ''
          };
        })
      };
    }

    function afterSuccess() {
      if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      setModalOpen(clubModal, true);
      form.reset();
      resetTable();
      resetClubSelection();
      updateCompetitionLocation();
    }

    window.addRow = addRow;
    window.removeRow = removeRow;
    window.resetTable = resetTable;

    clubRadios.forEach(function (radio) {
      if (radio.dataset.boundClubUi === 'true') return;
      radio.dataset.boundClubUi = 'true';
      radio.addEventListener('change', updateClubUI);
    });
    if (competitionMode && competitionMode.dataset.boundComp !== 'true') {
      competitionMode.dataset.boundComp = 'true';
      competitionMode.addEventListener('change', updateCompetitionLocation);
    }

    wireModalClose(clubModal, clubOkBtn);

    if (submitFrame && !submitFrame.dataset.boundClubLoad) {
      submitFrame.dataset.boundClubLoad = 'true';
      submitFrame.addEventListener('load', function () {
        if (!submissionPending) return;
        submissionPending = false;
        afterSuccess();
      });
    }

    if (!form.dataset.boundSubmit) {
      form.dataset.boundSubmit = 'true';
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        var clubChosen = document.querySelector('input[name="clubStream"]:checked');
        var prepSubChosen = document.querySelector('input[name="prepSubgroup"]:checked');

        if (!clubChosen) {
          alert('Please choose one Maths Club stream before submitting.');
          return;
        }
        if (prep6Radio && prep6Radio.checked && !prepSubChosen) {
          alert('Please choose either Prep–2 or Years 3–6 for Primary Maths Club.');
          return;
        }
        var paymentPlan = document.getElementById('paymentPlan');
        var startDate = document.getElementById('startDate');
        if (paymentPlan && !paymentPlan.value) {
          if (typeof paymentPlan.reportValidity === 'function') paymentPlan.reportValidity();
          alert('Please choose a preferred payment plan.');
          return;
        }
        if (startDate && !startDate.value) {
          if (typeof startDate.reportValidity === 'function') startDate.reportValidity();
          alert('Please choose a preferred start date.');
          return;
        }
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        var payload = collectPayload();
        if (clubStreamField) clubStreamField.value = payload.clubStream;
        if (prepSubgroupField) prepSubgroupField.value = payload.prepSubgroup;
        if (studentsField) studentsField.value = JSON.stringify(payload.students);

        if (submitFrame) {
          submissionPending = true;
          HTMLFormElement.prototype.submit.call(form);
          return;
        }

        fetch(form.action, {
          method: 'POST',
          mode: 'no-cors',
          body: new FormData(form)
        }).then(function () {
          afterSuccess();
        }).catch(function () {
          alert('There was a problem submitting the Maths Club registration. Please try again.');
        });
      });
    }

    updateClubUI();
    updateCompetitionLocation();
  }

  onReady(function () {
    initActiveNav();
    initLanguageMenu();
    initStarryHeroBackgrounds();
    initQuicklinks();
    initSelectOtherFields(document);
    initRegisterForm();
    initEnquiryForm();
    initMathsClubRegisterForm();
    initPricingTool();
  });
})();
