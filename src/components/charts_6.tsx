import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import china from '../geo/china.json'
export const Chart6 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' };
  var city = [
    '河南省', '甘肃省', '山东省', '浙江省', '广东省', '河北省'
  ]
  var [data, setData] = useState(city[1]);
  useEffect(() => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 6)
      const newdata = city[random];
      setData(newdata);
      x(newdata);
    }, 1000);
  }, []);
  const x = (data) => {
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.current.setOption({
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          mapType: 'CN',
          data: [
            { name: data, value: 1 },
          ],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#ccac02',
            },
          }
        },
      ]
    });
    // 初始化高亮甘肃省
    myChart.current.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0,
    });
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data)
  }, []);
  return (
    <div className="bordered 籍贯">
      <h2>全国犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors['fg'] }} />{data}
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  )
}