/*
 * 扩展jQuery对象,添加 $.GenLoading()方法
 * 接受对象{display:true/false,$container:$(".test"),style:"height:200px;"}作为参数:
 * --------------->默认display:true==>显示loading;
 * --------------->display:false==>隐藏loading
 * --------------->$container为待加载内容容器与显示loading的容器
 * --------------->style属性为自定义样式,设置loading样式:
 * */
(function ($) {
    $.extend({
        TangLoading: function (options) {
            //默认参数
            var setting = jQuery.extend({
                display: true,
                $container: null
            }, options);

            var Height = setting.$container.height();
            var Width = setting.$container.width();
            var HeightWidth = "height:" + Height + "px;width:" + Width + "px;";
            setting.style = "font-size: 12px;line-height: 16px;color: #333;position: absolute;z-index: 999999;" + HeightWidth + options.style;//默认样式加新样式
            var $Genloading = $("#Genloading_con");
            if (!$Genloading.length) {
                var $Genloading = $('<div id="Genloading_con" style="' + setting.style + '">' +
                    '<img src="loading.gif" alt=""/>' +
                    '<span> 加载中/Loading……</span>' +
                    '</div>');
                $Genloading.find('img').attr("style", "position: relative;top: -1px;vertical-align: middle;");
            }
            setting.$container.prepend($Genloading);
            setting.display ? $Genloading.fadeIn("fast") : $Genloading.fadeOut("fast");
        }
    });
})(jQuery);