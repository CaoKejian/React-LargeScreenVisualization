import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import { Chart1 } from '../components/charts_1';
import { Chart2 } from '../components/charts_2';
import { Chart3 } from '../components/charts_4';
import { Chart4 } from '../components/charts_3';
import { Chart5 } from '../components/charts_5';
import { Chart6 } from '../components/charts_6';

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
        </section>
        <section className='bordered section5'>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
};
