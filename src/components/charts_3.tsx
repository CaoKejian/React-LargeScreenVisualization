import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../pages/home'

export const Chart4 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(20),
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: "rgba(69, 95, 174, 0.5)",
        textStyle: {  // 添加文本样式
          color: 'white',  // 修改文本颜色为白色
          fontSize: px(12)
        },
        formatter: (item) => {
          return `${item[0].axisValue}时 占比  ${item[0].axisValue}%`
        }
      },
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
      title: { show: false },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: { width: px(2) },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    })
  }, [])
  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}