import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../pages/home';

export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: '#F7A110',
      grid: {
        x: px(60),
        y: px(20),
        x2: px(20),
        y2: px(50),
      },
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: '#79839e' }
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: '#79839e' }
        }
      },
      series: [{
        type: 'bar',
        data: [40, 22, 20, 18, 32],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    })
  }, [])

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};