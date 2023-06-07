import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../pages/home'

export const Chart1 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(69, 95, 174, 0.5)",
        borderWidth: 1,
        textStyle: {  // 添加文本样式
          color: 'white',  // 修改文本颜色为白色
        },
        formatter: (params) => {
          let str = params[0].name + " : " + params[0].value + "件";
          return str;
        },
      },
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: ['兰州新区', '2', '3', '4', '5', '6', '7', '8', '9'],
        axisTick: { show: false },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val
            }
          }
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [
        {
          data: [10, 20, 36, 41, 15, 26, 37, 19, 29],
          type: 'bar'
        }
      ]
    });
  }, [])
  return (
    <div className='bordered 管辖统计' >
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className='chart'>
      </div>
    </div>
  )
}