// ==UserScript==
// @name         获取AppStore横板预览图
// @version      1.0
// @description  在AppStore网页上左上角添加一个按钮，点击后可以获取横板预览图
// @author       https://t.me/geekshare
// @match        https://apps.apple.com/us/app/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建一个按钮元素
    var btn = document.createElement('button');
    btn.innerHTML = '一键获取';
    btn.style.position = 'fixed';
    btn.style.top = '10px';
    btn.style.left = '10px';
    btn.style.zIndex = '9999';

    // 将按钮添加到页面
    document.body.appendChild(btn);

    // 添加按钮点击事件处理程序
    btn.addEventListener('click', function() {
        // 查找页面中的meta标签
        var metaTags = document.querySelectorAll('meta[property="og:image"]');

        // 如果找到meta标签
        if (metaTags.length > 0) {
            // 获取图片链接
            var imgUrl = metaTags[0].getAttribute('content');

            // 打开新标签显示图片
            window.open(imgUrl, '_blank');
        } else {
            alert('未找到图片链接');
        }
    });
})();
