// P4



// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('P4'));

// 配置项
var option = {
    title: {
        text: '圖一：紅館個年代舉辦演唱會歌手數',
        left: 'center'
    },
    tooltip: {},
    xAxis: {
        data: ['80年代', '90年代', '00年代', '10年代', '20年代'],
        splitLine:{show:false}
    },
    yAxis: {
        splitLine:{show:false}
    },

    series: [{
        name: '歌手數',
        type: 'bar',
        data: [73, 120, 200, 298, 119],
        label: {
            show: true, // 显示数字
            position: 'top',
            formatter: '{c}' // 格式化数字，{c}表示该数据项的值
        },
        itemStyle: {
            color: function(params) {
                // 定义每个条形的颜色
                var colorList = ['#c23531', '#c23531', '#FFA500', '#FFA500', '#FFA500'];
                return colorList[params.dataIndex];
            }
        }
    }]
};


// 使用配置项生成图表
myChart.setOption(option);





// P5



// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('P5'));

// 配置项
var option = {
    title: {
        text: '圖二：紅館各年代演唱會場次總數對比',
        left: 'center'
    },
    tooltip: {},
    xAxis: {
        data: ['80年代', '90年代', '00年代', '10年代', '20年代'],
        splitLine:{show:false}
    },
    yAxis: {
        splitLine:{show:false}
    },

    series: [{
        name: '場次總數',
        type: 'bar',
        data: [542, 1016, 967, 1165, 368],
        label: {
            show: true, // 显示数字
            position: 'top',
            formatter: '{c}' // 格式化数字，{c}表示该数据项的值
        },
        itemStyle: {
            color: function(params) {
                // 定义每个条形的颜色
                var colorList = ['#c23531', '#c23531', '#FFA500', '#FFA500', '#FFA500'];
                return colorList[params.dataIndex];
            }
        }
    }]
};


// 使用配置项生成图表
myChart.setOption(option);



// P6

// 初始化 ECharts 实例
var chartDom = document.getElementById('P6');
var myChart = echarts.init(chartDom);

// 配置项
var option = {
    title: {
        text: '圖三：紅館各年代歌手演唱會平均舉辦場數',
        left: 'center',
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        splitLine:{show:false}
    },
    yAxis: {
        type: 'category',
        data: ['20年代', '10年代', '00年代', '90年代', '80年代'],
        splitLine:{show:false}
    },
    series: [{
        name: '平均舉辦場數',
        type: 'bar',
        data: [3.1, 3.9, 4.8, 8.5, 7.4],
        barWidth: 10, // 使柱子变细
        itemStyle: {
            color: '#FF8C00', // 设置柱子的颜色
        },
        label: {
            show: true, // 显示数字
            position: 'insideRight',
            formatter: '{c}' // 格式化数字，{c}表示该数据项的值
        },
        itemStyle: {
            color: function(params) {
                // 定义每个条形的颜色
                var colorList = ['#FFA500', '#FFA500', '#FFA500', '#c23531', '#c23531'];
                return colorList[params.dataIndex];
            }
        },
        markPoint: {
            data: [
                { 
                    name: '80年代', 
                    coord: [7.4, '80年代'], // 圆圈在条形的末端
                    symbol: 'circle', 
                    symbolSize: 20,
                    itemStyle: { color: '#c23531' }
                },
                { 
                    name: '90年代', 
                    coord: [8.47, '90年代'], 
                    symbol: 'circle', 
                    symbolSize: 20,
                    itemStyle: { color: '#c23531' }
                },
                { 
                    name: '00年代', 
                    coord: [4.84, '00年代'], 
                    symbol: 'circle', 
                    symbolSize: 20,
                    itemStyle: { color: '#FF8C00' }
                },
                { 
                    name: '10年代', 
                    coord: [3.91, '10年代'], 
                    symbol: 'circle', 
                    symbolSize: 20,
                    itemStyle: { color: '#FF8C00' }
                },
                { 
                    name: '20年代', 
                    coord: [3.09, '20年代'], 
                    symbol: 'circle', 
                    symbolSize: 20,
                    itemStyle: { color: '#FF8C00' }
                }
            ],
            label: {
                show: false // 隐藏标记点的文本标签
            },
            symbolOffset: [8, 0] // 可选：微调圆圈位置
        }
    }]
};

// 使用配置项生成图表
myChart.setOption(option);





// P15



// 初始化 ECharts 实例
var chartDom = document.getElementById('P15');
var myChart = echarts.init(chartDom);

// 配置项
var option = {
    title: {
        text: '90年代 「四大天王」 紅館演唱會場次佔比',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return `${params.name}: ${(params.value * 100).toFixed(2)}%`;
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '歌手',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 0.3188, name: '「四大天王」', itemStyle: { color: '#c23531' }},
                { value: 0.6812, name: '其他' , itemStyle: { color: '#FFD700' }},
            ],
            label: {
                formatter: function(params) {
                    return `${params.name}: ${(params.value * 100).toFixed(2)}%`;
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用配置项生成图表
myChart.setOption(option);


// P16


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P16'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '90年代歌手在紅館演出場數對比（1990-1999）',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine:{show:false}
    },
    yAxis: {
        type: 'category',
        data: [
            '黎明', '梅艷芳', '劉德華', '張學友', '郭富城', '徐小鳳', '許冠傑', '林子祥', '張國榮', '譚詠麟', 
            '王菲', '鄭秀文', '溫拿樂隊', '週華健', '林憶蓮', '李克勤', '彭羚', '許志安', '羅文', '陳慧嫻', 
            '汪明荃', 'Beyond', '鄭伊健', '陳百祥', '王傑', '尹光', '鄭少秋', '蓓蕾', '陳慧琳', '陳奕迅', 
            '杜德偉', '關淑怡', '靜婷', '林志穎', '劉韻', '吳鶯音', '週慧敏', '寶麗金群星', '草蜢', '陳百強', 
            '達明一派', '蘇永康', '巫啟賢', '張信哲', '陳潔靈', '梁漢文', '盧冠廷', '任賢齊', '張惠妹', '王靖雯'
        ],
        inverse: true, // 使条形图从上到下显示
        splitLine:{show:false},
    },
    series: [
        {
            name: '演出场次',
            type: 'bar',
            data: [
                101, 87, 79, 71, 64, 61, 51, 47, 46, 43, 35, 33, 30, 25, 21, 18, 14, 14, 13, 12, 
                11, 9, 9, 7, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1
            ],
            itemStyle: {
                color: '#c23531'  // 设置柱状图的颜色为红色
            },
            barWidth: 15, // 设置柱状图宽度
            label: {
                show: true,
                position: 'insideRight', // 标签显示在条形图内部，右侧
                color: '#ffffff' // 标签颜色为白色
            }
        }
    ],
    dataZoom: [
        {
            type: 'slider', // 使用滑动条
            yAxisIndex: 0, // 作用在y轴
            start: 0, // 数据窗口范围的起始百分比
            end: 50 // 数据窗口范围的结束百分比，默认显示50%的数据
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



// P17

// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('P17'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '00年後舉辦30場以上演唱會的歌手',
        left: 'center',
    },
    tooltip: {},
    // legend: {
    //     data: ['場次']
    // },
    xAxis: {
        type: 'value', // 数值轴
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category', // 类目轴
        data: ['郭富城', '陳奕迅', '譚詠麟', '張學友', '劉德華', '容祖兒', '許冠傑', '鄭秀文', '李克勤', '周杰倫', '草蜢', '徐小鳳', '五月天', '張敬軒', '黎明', '陳慧琳', '楊千嬅', 'Twins', '溫拿樂隊', '古巨基'], // 类目数据
        inverse: true, // 反转 Y 轴，使数据从上到下排列
        splitLine:{show:false},
    },
    series: [
        {
            name: '場次',
            type: 'bar',
            label: {
                show: true, // 显示数字
                position: 'right',
                formatter: '{c}' // 格式化数字，{c}表示该数据项的值
            },
            data: [
                { value: 111, itemStyle: { color: '#c23531' } },  // 给郭富城设置颜色
                { value: 111, itemStyle: { color: '#FFD700' } },  // 给陳奕迅设置颜色
                { value: 110, itemStyle: { color: '#c23531' } },  // 给譚詠麟设置颜色
                { value: 110, itemStyle: { color: '#c23531' } },  // 给張學友设置颜色
                { value: 101, itemStyle: { color: '#c23531' } },  // 给劉德華设置颜色
                { value: 94, itemStyle: { color: '#FFD700' } },   // 给容祖兒设置颜色
                { value: 91, itemStyle: { color: '#c23531' } },   // 给許冠傑设置颜色
                { value: 83, itemStyle: { color: '#c23531' } },   // 给鄭秀文设置颜色
                { value: 69, itemStyle: { color: '#c23531' } },   // 给李克勤设置颜色
                { value: 57, itemStyle: { color: '#FFD700' } },   // 给周杰倫设置颜色
                { value: 56, itemStyle: { color: '#c23531' } },   // 给草蜢设置颜色
                { value: 55, itemStyle: { color: '#c23531' } },   // 给徐小鳳设置颜色
                { value: 55, itemStyle: { color: '#FFD700' } },   // 给五月天设置颜色
                { value: 54, itemStyle: { color: '#FFD700' } },   // 给張敬軒设置颜色
                { value: 49, itemStyle: { color: '#c23531' } },   // 给黎明设置颜色
                { value: 43, itemStyle: { color: '#c23531' } },   // 给陳慧琳设置颜色
                { value: 42, itemStyle: { color: '#FFD700' } },   // 给楊千嬅设置颜色
                { value: 34, itemStyle: { color: '#FFD700' } },   // 给Twins设置颜色
                { value: 34, itemStyle: { color: '#c23531' } },   // 给溫拿樂隊设置颜色
                { value: 34, itemStyle: { color: '#FFD700' } }    // 给古巨基设置颜色
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





// P18


// 初始化 ECharts 实例
var chartDom = document.getElementById('P18');
var myChart = echarts.init(chartDom);

// 配置项
var option = {
    title: {
        text: '各時代主題演唱會平均場次',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['1980', '1990', '2000', '2010', '2020'], // X 轴数据
        splitLine:{show:false},
    },
    yAxis: {
        type: 'value',
        splitLine:{show:false},
    },
    series: [
        {
            name: '平均場次',
            type: 'bar',
            label: {
                show: true, // 显示数字
                position: 'top',
                formatter: '{c}' // 格式化数字，{c}表示该数据项的值
            },
            data: [
                { value: 8.279, itemStyle: { color: '#c23531' } },  // 1980年
                { value: 8.920, itemStyle: { color: '#c23531' } },  // 1990年
                { value: 4.917, itemStyle: { color: '#FFD700' } },  // 2000年
                { value: 4.000, itemStyle: { color: '#FFD700' } },  // 2010年
                { value: 5.100, itemStyle: { color: '#FFD700' } }   // 2020年
            ],
            barWidth: '50%' // 可根据需要调整柱子的宽度
        }
    ]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);







// P19


// 初始化 ECharts 实例
var chartDom = document.getElementById('P19');
var myChart = echarts.init(chartDom);

// 配置项
var option = {
    title: [
        {
            text: '00年前歌手地區佔比',
            left: '25%',
            top: '10%',
            textAlign: 'center'
        },
        {
            text: '00年後歌手地區佔比',
            left: '75%',
            top: '10%',
            textAlign: 'center'
        }
    ],
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name: '00年前',
            type: 'pie',
            radius: '40%',
            center: ['25%', '60%'],
            data: [
                { value: 1405, name: '中國香港', itemStyle: { color: '#c23531' } },
                { value: 53, name: '中國台灣', itemStyle: { color: '#FFD700' } },
                { value: 41, name: '其他', itemStyle: { color: 'gray' } }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '00年後',
            type: 'pie',
            radius: '40%',
            center: ['75%', '60%'],
            data: [
                { value: 1927, name: '中國香港', itemStyle: { color: '#c23531' } },
                { value: 299, name: '中國台灣', itemStyle: { color: '#FFD700' } },
                { value: 68, name: '其他', itemStyle: { color: 'gray' } }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);


// P21

// 初始化 ECharts 实例
var chartDom = document.getElementById('P21');
var myChart = echarts.init(chartDom);

// 配置项
var option = {
    title: [
        {
            text: '90年代',
            left: '25%',
            top: '10%',
            textAlign: 'center'
        },
        {
            text: '00年代',
            left: '75%',
            top: '10%',
            textAlign: 'center'
        },
        {
            text: '10年代',
            left: '25%',
            top: '55%',
            textAlign: 'center'
        },
        {
            text: '20年代',
            left: '75%',
            top: '55%',
            textAlign: 'center'
        }
    ],
    tooltip: {
        trigger: 'item'
    },
    series: [
        // 图一
        {
            name: '图一',
            type: 'pie',
            radius: '30%',
            center: ['25%', '30%'],
            data: [
                { value: 498, name: '90年代', itemStyle: { color: '#FFA500' } , label: {show: true, position: 'inside'}}, // 改为橙色
                { value: 480, name: '80年代', itemStyle: { color: '#c23531' } , label: {show: true, position: 'inside'}}
            ]
        },
        // 图二
        {
            name: '图二',
            type: 'pie',
            radius: '30%',
            center: ['75%', '30%'],
            data: [
                { value: 261, name: '00年代', itemStyle: { color: '#FFD700' } , label: {show: true, position: 'inside'}}, // 浅金色
                { value: 412, name: '90年代', itemStyle: { color: '#FFA500' } , label: {show: true, position: 'inside'}}, // 改为橙色
                { value: 267, name: '80年代', itemStyle: { color: '#c23531' } , label: {show: true, position: 'inside'}}
            ]
        },
        // 图三
        {
            name: '图三',
            type: 'pie',
            radius: '30%',
            center: ['25%', '75%'],
            data: [
                { value: 220, name: '10年代', itemStyle: { color: '#A9A9A9' } , label: {show: true, position: 'inside'}}, // 深灰色
                { value: 305, name: '00年代', itemStyle: { color: '#FFD700' } , label: {show: true, position: 'inside'}}, // 浅金色
                { value: 292, name: '90年代', itemStyle: { color: '#FFA500' } , label: {show: true, position: 'inside'}}, // 改为橙色
                { value: 217, name: '80年代', itemStyle: { color: '#c23531' } , label: {show: true, position: 'inside'}}
            ]
        },
        // 图四
        {
            name: '图四',
            type: 'pie',
            radius: '30%',
            center: ['75%', '75%'],
            data: [
                { value: 38, name: '20年代', itemStyle: { color: '#D3D3D3' } , label: {show: true, position: 'inside'}}, // 浅灰色
                { value: 29, name: '10年代', itemStyle: { color: '#A9A9A9' } , label: {show: true, position: 'inside'}}, // 深灰色
                { value: 71, name: '00年代', itemStyle: { color: '#FFD700' } , label: {show: true, position: 'inside'}}, // 浅金色
                { value: 113, name: '90年代', itemStyle: { color: '#FFA500' } , label: {show: true, position: 'inside'}}, // 改为橙色
                { value: 45, name: '80年代', itemStyle: { color: '#c23531' } , label: {show: true, position: 'inside'}}
            ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);








// P22



// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('P22'));

// 配置项
var option = {
    title: {
        text: '各年代開演唱會次數最多的歌星',
        left: 'center',
    },
    tooltip: {},
    legend: {
        data: ['后于四大天王', '先于四大天王'],
        left: 'center',
        bottom: 0,
        orient: 'horizontal',
        textStyle: {
            color: '#000'
        }
    },
    xAxis: [
        {
            type: 'category',
            position: 'bottom',  // 默认是在底部的 X 轴
            data: ['譚詠麟', '黎明', '李克勤', '譚詠麟', '陳奕迅'],
            axisLine: {
                onZero: false
            },
            splitLine:{show:false},
        },
        {
            type: 'category',
            position: 'top',  // 新增一个顶部的 X 轴
            data: ['80年代', '90年代', '00年代', '10年代', '20年代'],
            axisLine: {
                onZero: false
            }
        }
    ],
    yAxis: {
        splitLine:{show:false},
    },

    series: [{
        name: '場數',
        type: 'bar',
        data: [105, 101, 70, 65, 27],
        label: {
            show: true, // 显示数字
            position: 'top',
            formatter: '{c}' // 格式化数字，{c}表示该数据项的值
        },
        itemStyle: {
            color: function(params) {
                // 定义每个条形的颜色
                var colorList = ['#c23531', '#c23531', '#FFA500', '#FFA500', '#FFA500'];
                return colorList[params.dataIndex];
            }
        }
    }]
};


// 使用配置项生成图表
myChart.setOption(option);



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P23'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '香港歌手各主題舉辦演唱會的平均場數',
        left: 'center',
    },
    tooltip: {},
    legend: {
        data: ['后于四大天王', '先于四大天王'],
        left: 'center',
        bottom: 0,
        orient: 'horizontal',
        textStyle: {
            color: '#000'
        }
    },
    xAxis: {
        type: 'value',
        name: '',
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category',
        data: ['張國榮', '徐小鳳', '張學友', '梅艷芳', '陳奕迅', '王菲', '劉德華', '譚詠麟', '黎明', '許冠傑',
               '軟硬天師', '郭富城', '鄭秀文', '李克勤', '顧嘉輝', '容祖兒', '溫拿樂隊', '林子祥', '周杰倫', '陳百祥',
               '林家謙', '周華健', '陳慧琳', '葉蒨文', '黃偉文', '謝霆鋒', '楊千嬅', '張敬軒', '鄧麗君'].reverse(),
        splitLine:{show:false},
    },
    series: [
        {
            name: '',
            type: 'bar',
            label: {
                show: true, // 显示数字
                position: 'right',
                formatter: '{c}' // 格式化数字，{c}表示该数据项的值
            },
            data: [17.29, 17.18, 14.92, 14.80, 14.38, 14.33, 12.00, 11.24, 10.71, 10.60, 
                   10.00, 9.72, 9.67, 9.57, 9.00, 8.55, 8.44, 7.88, 7.13, 7.00, 
                   7.00, 6.75, 6.71, 6.50, 6.00, 6.00, 6.00, 6.00, 6.0].reverse(),
            itemStyle: {
                color: function(params) {
                    // 强制陈百祥、黃偉文、鄧麗君为红色
                    var redPriority = ['陳百祥', '黃偉文', '鄧麗君'];
                    if (redPriority.includes(params.name)) {
                        return '#c23531';  // 红色
                    }
                    // 高亮显示其他特定的分数
                    var highlightScores = [14.38, 8.55, 7.13, 7.00, 7.00, 6.00, 6.00, 6.00, 6.00];
                    if (highlightScores.includes(params.value)) {
                        return '#FFA500';  // 橙色
                    }
                    return '#c23531';  // 其他默认红色
                }
            }
        }
    ],
    dataZoom: [
        {
            type: 'slider', // 使用滑动条
            yAxisIndex: 0, // 作用在y轴
            start: 0, // 数据窗口范围的起始百分比
            end: 50 // 数据窗口范围的结束百分比，默认显示50%的数据
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);






// P24


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P24'));

// 数据
var concerts = [
    '《Amway金光燦爛徐小鳳演唱會1992》', '《許冠傑光榮引退演唱會1992》', '《許冠傑繼續微笑會歌神》', 
    '《左麟右李演唱會2003》', '《友學友95世界巡迴演唱會》', '《bossini張國榮告別樂壇演唱會》', 
    '《捷威金光燦爛徐小鳳演唱會》', '《花王百變梅艷芳夏日耀光華演唱會》', '《百變梅艷芳告別舞台演唱會》', 
    '《百變梅艷芳再展光華演唱會》', '《百事郭富城Live On Stage演唱會2000》', 
    '《FWD富衛保險陳奕迅FEAR AND DREAMS香港演唱會》', '《那一夜我們在霓虹下起舞Neon Leon Live 95》', 
    '《陳奕迅Eason\'s Life演唱會2013》', '《學與友93演唱會》', '《百事郭富城一變傾城演唱會》'
];
var scores = [43, 41, 38, 36, 34, 33, 33, 30, 30, 28, 28, 27, 26, 25, 25, 25];

// 按照分数升序排序
var data = concerts.map(function(concert, index) {
    return { name: concert, value: scores[index] };
}).sort(function(a, b) {
    return a.value - b.value;
});

// 指定图表的配置项和数据
var option = {
    title: {
        text: '場次最多的演唱會',
        left: 'center',
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        name: '',
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category',
        data: data.map(function(item) { return item.name; }),
        splitLine:{show:false},
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: data.map(function(item) { return item.value; }),
            label: {
                show: true, // 显示数字
                position: 'right',
                formatter: '{c}' // 格式化数字，{c}表示该数据项的值
            },
            itemStyle: {
                color: function(params) {
                    // 高亮显示特定的演唱会
                    var highlightConcerts = ['《FWD富衛保險陳奕迅FEAR AND DREAMS香港演唱會》', '《陳奕迅Eason\'s Life演唱會2013》'];
                    if (highlightConcerts.includes(params.name)) {
                        return '#FFA500';  // 橙色
                    }
                    return '#c23531';  // 红色
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




// P25
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P25'));

// 指定图表的配置项和数据
var option = {
    title: [
        {
            text: '80年代',
            left: '20%',
            top: '5%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '90年代',
            left: '80%',
            top: '5%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '00年代',
            left: '20%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '10年代',
            left: '50%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '20年代',
            left: '80%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
    ],
    grid: {
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}% ({d}%)'
    },
    series: [
        {
            name: '八十年代歌手分佈',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['20%', '30%'], // 调整图表的位置
            data: [
                { value: 0, name: '60歲以上', itemStyle: { color: '#D3D3D3' }, label: {show: true, position: 'inside'}},
                { value: 35.82, name: '0-30歲', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'} },
                { value: 64.18, name: '31-60歲', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'} }
            ]
        },
        {
            name: '九十年代歌手分佈',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['80%', '30%'], // 调整图表的位置
            data: [
                { value: 3.70, name: '60歲以上', itemStyle: { color: '#D3D3D3' }, label: {show: true, position: 'inside'}},
                { value: 25.14, name: '0-30歲', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'} },
                { value: 72.57, name: '31-60歲', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '零零年代歌手分佈',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['20%', '75%'], // 调整图表的位置
            data: [
                { value: 2.29, name: '60歲以上', itemStyle: { color: '#D3D3D3' }, label: {show: true, position: 'inside'}},
                { value: 25.14, name: '0-30歲', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 72.57, name: '31-60歲', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '一零年代歌手分佈',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['50%', '75%'], // 调整图表的位置
            data: [
                { value: 13.65, name: '60歲以上', itemStyle: { color: '#D3D3D3' }, label: {show: true, position: 'inside'}},
                { value: 10.84, name: '0-30歲', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 75.50, name: '31-60歲', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '二零年代歌手分佈',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['80%', '75%'], // 调整图表的位置
            data: [
                { value: 34.50, name: '60歲以上', itemStyle: { color: '#D3D3D3' }, label: {show: true, position: 'inside'}},
                { value: 4.67, name: '0-30歲', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 60.75, name: '31-60歲', itemStyle: { color: '#FFA500' } , label: {show: true, position: 'inside'}}
            ]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





// P30

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P30'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '年齡0-30以及60歲以上歌手各年代分佈比例變化',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['0-30歲歌手比例', '60歲以上歌手比例'],
        left: 'center',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: ['80年代', '90年代', '00年代', '10年代', '20年代'],
        splitLine:{show:false},
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}%'  // Y轴数据格式化为百分比
        },
        splitLine:{show:false},
    },
    series: [
        {
            name: '0-30歲歌手比例',
            type: 'line',
            data: [35.82, 35.19, 25.14, 10.84, 4.67],
            itemStyle: {
                color: '#FF4500'  // 红色
            },
            lineStyle: {
                color: '#FF4500'  // 红色
            }
        },
        {
            name: '60歲以上歌手比例',
            type: 'line',
            data: [0, 3.70, 2.29, 13.65, 34.58],
            itemStyle: {
                color: '#808080'  // 灰色
            },
            lineStyle: {
                color: '#808080'  // 灰色
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



// P31

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P31'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '不同年代在紅館開演唱會的女歌手數量變化',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['80年代', '90年代', '00年代', '10年代'],
        splitLine:{show:false},
    },
    yAxis: {
        type: 'value',
        name: '女歌手數量',
        splitLine:{show:false},
    },
    series: [
        {
            name: '女歌手數量',
            type: 'bar',
            data: [
                {value: 11, itemStyle: {color: '#FFA07A'}, label: {show: true, position: 'top'}},  // 橙色
                {value: 19, itemStyle: {color: '#FF8C00'}, label: {show: true, position: 'top'}},  // 深橙色
                {value: 38, itemStyle: {color: '#FF4500'}, label: {show: true, position: 'top'}},  // 红色
                {value: 62, itemStyle: {color: '#c23531'}, label: {show: true, position: 'top'}}   // 更深的红色
            ],
            barWidth: '50%'  // 柱状图宽度
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




// P32



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P32'));

// 指定图表的配置项和数据
var option = {
    title: [
        {
            text: '80年代女歌手佔比',
            left: '20%',
            top: '5%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '90年代女歌手佔比',
            left: '80%',
            top: '5%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '00年代女歌手佔比',
            left: '20%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '10年代女歌手佔比',
            left: '50%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
        {
            text: '20年代女歌手佔比',
            left: '80%',
            top: '50%', // 调整标题的位置
            textAlign: 'center'
        },
    ],
    grid: {
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}% ({d}%)'
    },
    series: [
        {
            name: '八十年代女歌手佔比',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['20%', '30%'], // 调整图表的位置
            data: [
                { value: 36.67, name: '80年代女歌手佔比', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 63.33, name: '80年代男歌手佔比', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '九十年代女歌手佔比',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['80%', '30%'], // 调整图表的位置
            data: [
                { value: 39.58, name: '90年代女歌手佔比', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 60.42, name: '90年代男歌手佔比', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '零零年代女歌手佔比',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['20%', '75%'], // 调整图表的位置
            data: [
                { value: 39.58, name: '00年代女歌手佔比', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 60.42, name: '00年代男歌手佔比', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '一零年代女歌手佔比',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['50%', '75%'], // 调整图表的位置
            data: [
                { value: 41.33, name: '10年代女歌手佔比', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 58.67, name: '10年代男歌手佔比', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
        {
            name: '二零年代女歌手佔比',
            type: 'pie',
            radius: ['10%', '25%'],  // 设置内外半径
            center: ['80%', '75%'], // 调整图表的位置
            data: [
                { value: 43.53, name: '20年代女歌手佔比', itemStyle: { color: '#FF4500' }, label: {show: true, position: 'inside'}},
                { value: 56.47, name: '20年代男歌手佔比', itemStyle: { color: '#FFA500' }, label: {show: true, position: 'inside'}}
            ]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




// P38

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P38'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '2023年至2024年6月香港各大場館舉辦演唱會數量對比',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['紅館', '九龍灣國際貿易中心等', '其他场馆']
    },
    series: [
        {
            name: '演唱會數量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 153, name: '紅館', itemStyle: {color: '#c23531'}},  // 红色
                {value: 117, name: '九龍灣國際貿易中心等', itemStyle: {color: '#FFA500'}},  // 浅橙色
                {value: 89, name: '其他场馆', itemStyle: {color: '#D3D3D3'}}  // 灰色
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);





// P39

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('P39'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '各场馆容量对比',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: [
            '泰國拉加曼加體育場', 
            '新加坡國家體育場', 
            '東京巨蛋', 
            '大阪巨蛋', 
            '香港亞洲國際博覽館', 
            '香港體育館', 
            '香港會議展覽中心 hall 5bc', 
            '九龍灣國際展貿中心-Hall 匯星'
        ],
        axisLabel: {
            interval: 0,
            rotate: 90  // 纵向排列
        },
        splitLine:{show:false},
    },
    yAxis: {
        type: 'value',
        name: '容量 (人)',
        splitLine:{show:false},
    },
    series: [
        {
            name: '场馆容量',
            type: 'bar',
            data: [
                {value: 65000, itemStyle: {color: '#FFA500'}, label: {show: true, position: 'inside'}},  // 橙色
                {value: 55000, itemStyle: {color: '#FFA500'}, label: {show: true, position: 'inside'}},  // 橙色
                {value: 55000, itemStyle: {color: '#FFA500'}, label: {show: true, position: 'inside'}},  // 橙色
                {value: 55000, itemStyle: {color: '#FFA500'}, label: {show: true, position: 'inside'}},  // 橙色
                {value: 14000, itemStyle: {color: '#c23531'}, label: {show: true, position: 'inside'}},  // 红色
                {value: 12500, itemStyle: {color: '#c23531'}, label: {show: true, position: 'inside'}},  // 红色
                {value: 8000, itemStyle: {color: '#c23531'}, label: {show: true, position: 'inside'}},   // 红色
                {value: 3600, itemStyle: {color: '#c23531'}, label: {show: true, position: 'inside'}}    // 红色
            ],
            barWidth: '10%',  // 使条形图变细
            markPoint: {
                data: [
                    {value: 65000, xAxis: 0, yAxis: 65000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#FFA500'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 55000, xAxis: 1, yAxis: 55000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#FFA500'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 55000, xAxis: 2, yAxis: 55000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#FFA500'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 55000, xAxis: 3, yAxis: 55000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#FFA500'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 14000, xAxis: 4, yAxis: 14000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#c23531'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 12500, xAxis: 5, yAxis: 12500, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#c23531'}, label: {show: false}},  // 与柱状图颜色相同的圆圈
                    {value: 8000, xAxis: 6, yAxis: 8000, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#c23531'}, label: {show: false}},    // 与柱状图颜色相同的圆圈
                    {value: 3600, xAxis: 7, yAxis: 3600, symbol: 'circle', symbolSize: 12, itemStyle: {color: '#c23531'}, label: {show: false}}     // 与柱状图颜色相同的圆圈
                ]
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);








// new2

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('new2'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '紅館演出歌手場數前20（1983-1989）',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        name: '场次',
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category',
        data: ['呂方', '張學友', '許冠傑', '陳百強', '甄妮', '梅艷芳', '林子祥', '徐小鳳', '張國榮', '譚詠麟'], // 倒序排列,
        splitLine:{show:false},
    },
    series: [
        {
            name: '演出場次',
            type: 'bar',
            data: [12, 15, 17, 20, 21, 43, 54, 73, 78, 105], // 数据倒序
            itemStyle: {
                color: '#c23531'  // 设置柱状图的颜色为红色
            },
            label: {
                show: true,
                position: 'insideRight',  // 将标签显示在条形图内部，靠右侧
                color: '#ffffff'  // 标签颜色设置为白色
            },
            barWidth: 40  // 设置柱状图宽度为 40px
        }
    ],
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    barCategoryGap: '2%'  // 设置条形图之间的间隔为 2px
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




// new3



// 数据定义
var singers = ['陳慧嫻', '林子祥', '羅文', '梅艷芳', '譚詠麟', '溫拿樂隊', '徐小鳳', '許冠傑', '張國榮', '張學友'];
var data80s = [8, 54, 6, 43, 105, 12, 73, 17, 78, 15];
var data90s = [12, 47, 13, 87, 43, 30, 61, 51, 46, 71];

// 计算平均值并进行排序
var combinedData = singers.map(function(singer, index) {
    return {
        singer: singer,
        average: (data80s[index] + data90s[index]) / 2,
        data80s: data80s[index],
        data90s: data90s[index]
    };
});

// 按平均值从低到高排序
combinedData.sort(function(a, b) {
    return a.average - b.average;
});

// 提取排序后的数据
var sortedSingers = combinedData.map(function(item) { return item.singer; });
var sortedData80s = combinedData.map(function(item) { return item.data80s; });
var sortedData90s = combinedData.map(function(item) { return item.data90s; });

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('new3'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '80與90年代在紅館舉辦演唱會次數都超過五場的歌手',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['80年代', '90年代'],
        left: 'center',
        bottom: 0
    },
    xAxis: {
        type: 'value',
        name: '演唱会场次',
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category',
        data: sortedSingers
    },
    series: [
        {
            name: '80年代',
            type: 'bar',
            data: sortedData80s,
            label: {
                show: true,
                position: 'right',
                formatter: '{c}',
            },
            itemStyle: {
                color: '#FFA500'  // 橙色
            },
            barGap: '0%'  // 与90年代的条形图紧贴在一起
        },
        {
            name: '90年代',
            type: 'bar',
            data: sortedData90s,
            label: {
                show: true,
                position: 'right',
                formatter: '{c}',
            },
            itemStyle: {
                color: '#c23531'  // 红色
            },
            barGap: '0%'  // 与80年代的条形图紧贴在一起
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



function TJ_GJC() {
    var chartDom = document.getElementById('point');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '音乐人影响力点图',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}'
        },
        xAxis: {
            type: 'category',
            data: ['温拿乐队', '葉蒨文', '陈慧娴', '关正杰', '罗文', '邓丽君', '黎小田', 'Raidas', '刘美君', '肥妈'],
            axisLabel: {
                rotate: 45,
                interval: 0
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [
                {value: 12, name: '温拿乐队'},
                {value: 10, name: '葉蒨文'},
                {value: 8, name: '陈慧娴'},
                {value: 7, name: '关正杰'},
                {value: 6, name: '罗文'},
                {value: 6, name: '邓丽君'},
                {value: 5, name: '黎小田'},
                {value: 4, name: 'Raidas'},
                {value: 4, name: '刘美君'},
                {value: 4, name: '肥妈'}
            ].sort((a, b) => b.value - a.value),
            type: 'scatter',
            symbolSize: function (data) {
                return data * 10; // 控制点的大小
            },
            label: {
                show: true,
                formatter: '{b}',
                position: 'right'
            }
        }]
    };

    option && myChart.setOption(option);
}


