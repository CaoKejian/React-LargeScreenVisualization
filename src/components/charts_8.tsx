import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../pages/home';

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    let pieChartsData = []
    pieChartsData = [// A类
      { value: 7, select: true, name: '7%', a: "0-14", nameType: '01', itemStyle: { color: '#4aa3ff' }, label: { color: '#91b2d1' }, labelLine: { show: true } },
      { value: 1, select: false, name: '', itemStyle: { color: 'transparent' }, label: { show: false }, tooltip: { show: false }, emphasis: { label: { color: 'transparent' }, itemStyle: { color: 'transparent' } } },
      { value: 10, select: true, name: '10%', a: "14-18", nameType: '02', itemStyle: { color: '#fe6b5d' }, label: { color: '#91b2d1' }, labelLine: { show: true } },
      { value: 1, select: false, name: '', itemStyle: { color: 'transparent' }, label: { show: false }, tooltip: { show: false }, emphasis: { label: { color: 'transparent' }, itemStyle: { color: 'transparent' } } },
      { value: 23, select: true, name: '23%', a: "18-26", nameType: '03', itemStyle: { color: '#f99117' }, label: { color: '#91b2d1' }, labelLine: { show: true } },
      { value: 1, select: false, name: '', itemStyle: { color: 'transparent' }, label: { show: false }, tooltip: { show: false }, emphasis: { label: { color: 'transparent' }, itemStyle: { color: 'transparent' } } },
      { value: 28, select: true, name: '28%', a: "26-35", nameType: '05', itemStyle: { color: '#4aa3ff' }, label: { color: '#91b2d1' }, labelLine: { show: true } },
      { value: 1, select: false, name: '', itemStyle: { color: 'transparent' }, label: { show: false }, tooltip: { show: false }, emphasis: { label: { color: 'transparent' }, itemStyle: { color: 'transparent' } } },
      { value: 32, select: true, name: '32%', a: "35以上", nameType: '08', itemStyle: { color: '#4aa3ff' }, label: { color: '#91b2d1' }, labelLine: { show: true } },
      {
        value: 33, select: false, name: '', itemStyle: { color: 'transparent' }, label: { show: false }, tooltip: { show: false }, emphasis: { label: { color: 'transparent' }, itemStyle: { color: 'transparent' } }
      }
    ]
    pieChartsData[0].itemStyle.color = '#f06c22'
    pieChartsData[0].label.color = '#f06c22'
    function _pieData(type) { // 蓝色的圈
      const dataArr = []
      if (type === 1) {
        for (let i = 0; i < 80; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                color: 'rgb(126,190,255)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            })
          }
        }
      } else if (type === 2) {
        for (let i = 0; i < 140; i++) {
          if (i % 2 === 0 && i < 70) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                color: 'rgb(6,255,254)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: 'rgba(0,0,0,0)'
              }
            })
          }
        }
      }
      return dataArr
    }
    myChart.setOption({
      // backgroundColor: '#031a40',
      legend: {
        show: false
      },
      graphic: [
        {
          type: 'image',
          id: 'wgpjTitleImg',
          left: 'center',
          top: 'center',
          style: {
            image: '/wgpj_title.png',
            width: 30,
            height: 30
          }
        }
      ],
      tooltip: {
        trigger: 'item',
        borderColor: "rgba(69, 95, 174, 0.5)",// 边框颜色
        backgroundColor: "rgba(69, 95, 174, 0.7)",
        textStyle: {  // 添加文本样式
          color: 'white',  // 修改文本颜色为白色
          fontSize: px(12)
        },
        formatter: (item) => {
          return `<div style="display:flex;flex-direction: column;align-items: flex-start;"><span>犯罪年龄段：${item.data.a}</span><span style="margin-top:12px;">占比：${item.data.value}%</span></div>`
        }

      },
      series: [
        {
          type: 'pie',
          zlevel: 4,
          silent: true,
          radius: ['38%', '39%'],
          label: {
            show: false
          },
          data: _pieData(1),
        },
        {
          name: 'ring',
          type: 'pie',
          silent: true,
          radius: ['44%', '47%'],
          roseType: 'radius',
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          itemStyle: { color: '#06fffe' },
          data: [
            { value: 10, name: 'rose1' },
            { value: 20, name: 'rose2' },
            { value: 10, name: 'rose3' },
            { value: 20, name: 'rose4' },
            { value: 10, name: 'rose5' },
            { value: 10, name: 'rose6' },
            { value: 10, name: 'rose7' },
            { value: 20, name: 'rose8' }
          ]
        },
        {
          name: 'ring2',
          type: 'pie',
          zlevel: 4,
          silent: true,
          radius: ['33%', '34.5%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: _pieData(2)
        },
        {
          name: '年龄段',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 0,
          hoverOffset: 0,
          radius: ['50%', '65%'],
          label: {
            fontSize: 10,
            borderWidth: 1,
            borderRadius: 4
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: { color: '#f06c22' },
            itemStyle: { color: '#f06c22' }
          },
          data: pieChartsData
        }
      ]
    })
  }, [])

  return (
    <div className="年龄段-图2">
      <div ref={divRef} className="chart">

      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />10-20
        <span style={{ background: colors[1] }} />20-30
        <span style={{ background: colors[2] }} />30-40
        <span style={{ background: colors[3] }} />40-50
        <span style={{ background: colors[4] }} />50-60
      </div>
    </div>
  );
};