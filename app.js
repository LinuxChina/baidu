/**
 * Created by Administrator on 2017/5/25 0025.
 */
(function () {

    //初始化地图
    var map = new BMap.Map('container');
    map.centerAndZoom('广州',15);

    //实例一个计算距离的对象
    var tance = new GetDistance(map);

    //点击按钮将传递的像素值传递过去，调用方法执行
    map.addEventListener('click',function (event) {
        tance.Distance(event);

    });

    map







})();