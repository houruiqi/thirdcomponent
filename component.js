$(function(){
    var excal=$(".exmian");
    var myChart =echarts.init($(".table").get(0));
    // echarts
    var data = [["Java","1","降","-0.01%"],
        ["C","2","升","+2.44%"],
        ["Python","3","升","+1.41%"],
        ["C++","4","降","-2.58%"],
        ["C#","5","升","+2.07%"],
        ["Visual Basic.NET","6","降","-1.17%"],
        ["JavaScript","7","降","-0.85%"]];
    var ex = new Handsontable(excal.get(0),{
        data:data,
        contextMenu:false,
        // manualRowResize:!0,
        // manualColumnResize:!0,
        colWidths:150,
        className:'htCenter htMiddle',
        colHeaders:["语言名称","排名","升或降","变化幅度"]
    })
    // handsontable
    var xdata = [2000,2005,2010,2015,2020];
    var ydata = [6,9,8,8,7];
    var option={
        title:{text:"JavaScript语言排名变化"},
        tooltip:{},
        xAxis:{
            // type: 'category',
            data:xdata
        },
        yAxis:{},
        series:[{
            name:"排名",
            type:"line",
            data:ydata
        }]
    };
    myChart.setOption(option);
});