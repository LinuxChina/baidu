/**
 * Created by Administrator on 2017/5/25 0025.
 */
(function () {

    function GetDistance(map) {
        this.self = map;
        this.bool = true;

    }
    //获得经纬度并计算两点之间的距离和插入一标注图标
    GetDistance.prototype.Distance = function (event) {

        if(this.bool)
        {
            // console.log(event.point.lng); //得到当前经纬度
            // console.log(event.point.lat);
            this.pointStar = new BMap.Point(event.point.lng,event.point.lat);
            console.log(this.pointStar);
            this.self.addControl(DistanceIcon(this.pointStar));

            this.bool = false;
        }else {

            this.pointEnd = new BMap.Point(event.point.lng,event.point.lat);
            console.log(this.pointEnd);
            this.self.addControl(DistanceIcon(this.pointEnd));

            this.bool = true;
        //   当进入点击第二次的时候，将进行计算
            var Number = this.self.getDistance(this.pointStar,this.pointEnd);
            console.log(Number);
            // alert(Number);
            }

    }

    //获得当前的位置并插入当前标注图标
    GetDistance.prototype.Geolocation = function () {
        //获得当前位置
        var location =  new BMap.Geolocation();
        location.getCurrentPosition(function (locationResult) {
            
        });

    }




    //每当点击，插入一个坐标图点
    function DistanceIcon(pointStar) {
        console.log(111);
            return new BMap.Marker(pointStar,{
                icon:new BMap.Icon("map.jpg",new BMap.Size(50,50))
            });
    }

    window.GetDistance = GetDistance;
})();