import "./index.scss";
import $ from "jquery"
import SmoothScroll from 'smooth-scroll';

function run() {
    $(window).on('load', () => {
        const window_width = $(window).width();
        let num = 50;
        const headerHeight = $('nav').height() + num;

        const options = {
            selector: '[data-scroll]', // スムーススクロールが有効なリンクに付ける属性
            selectorHeader: '[data-scroll-header]', // 固定ナビに付ける属性
            speed: 500, // 到達するまでの総時間(ミリ秒)
            // easing: 'easeInOutCubic', // スピードの種類
            offset: headerHeight, // 到達場所からズラすピクセル数
            // updateURL: true, // URLを[#〜]に変更するか？
            // callback: function () {}, // コールバック関数 (到達時に実行される関数)};
        };
        SmoothScroll('a[href*="#"]', options);
    })
}

run()
