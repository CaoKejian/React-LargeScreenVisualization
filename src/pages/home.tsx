import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import { Chart1 } from '../components/charts_1';
import { Chart2 } from '../components/charts_2';
import { Chart3 } from '../components/charts_4';
import { Chart4 } from '../components/charts_3';
import { Chart5 } from '../components/charts_5';
import { Chart6 } from '../components/charts_6';
import { Chart7 } from '../components/charts_7';
import { Chart8 } from '../components/charts_8';
import { Chart9 } from '../components/charts_9';
import { Chart10 } from '../components/charts_10';
import { Chart11 } from '../components/charts_11';
import { Chart12 } from '../components/charts_12';
import { Chart13 } from '../components/charts_13';
import { Chart14 } from '../components/charts_14';

export const px = (n) => n / 2420 * (window as any).pageWidth
export const Home = () => {

  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className='section1'>
          <Chart1 />
          <Chart2 />
        </section>
        <section className='section2'>
          <Chart3 />
          <Chart4 />
        </section>
        <section className='bordered section3'>
          <Chart5 />
        </section>
        <section className='section4'>
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
              <Chart10 />
              <Chart11 />
            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts">
              <Chart12 />
              <Chart13 />
            </div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
            <Chart14 />
          </div>
        </section>
      </main>
      <footer>
        豫ICP备2023004318号
      </footer>
    </div>
  );
};
