<template>
    <div>
      <button @click="showBarChart">显示柱形图</button>
      <button @click="showLineChart">显示折线图</button>
      
      <div v-show="isBarChartVisible">
        <div id="barChart" style="width: 600px; height: 400px;"></div>
        <div>
          <button @click="showWeekDataForBar">近一周</button>
          <button @click="showMonthDataForBar">一个月</button>
        </div>
      </div>
      
      <div v-show="isLineChartVisible">
        <div id="lineChart" style="width: 600px; height: 400px;"></div>
        <div>
          <button @click="showWeekDataForLine">近一周</button>
          <button @click="showMonthDataForLine">一个月</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    data() {
      return {
        isBarChartVisible: false,
        isLineChartVisible: false,
        barChartData: {
          weekData: [10, 20, 30, 40, 50, 60],
          monthData: [20, 30, 40, 50, 60, 70, 32, 44]
        },
        lineChartData: {
          weekData: [30, 40, 20, 50, 80, 70],
          monthData: [50, 60, 40, 70, 90, 80, 32, 44]
        }
      };
    },
    methods: {
      showBarChart() {
        this.isBarChartVisible = true;
        this.isLineChartVisible = false;
        this.renderBarChart(this.barChartData.weekData);
      },
      showLineChart() {
        this.isBarChartVisible = false;
        this.isLineChartVisible = true;
        this.renderLineChart(this.lineChartData.weekData);
      },
      renderBarChart(data) {
        const chartDom = document.getElementById('barChart');
        const myChart = echarts.init(chartDom);
  
        const option = {
          xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E', 'F']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: data,
            type: 'bar'
          }]
        };
  
        myChart.setOption(option);
      },
      renderLineChart(data) {
        const chartDom = document.getElementById('lineChart');
        const myChart = echarts.init(chartDom);
  
        const option = {
          xAxis: {
            type: 'category',
            data: [1,2,3,4,5,6,7,8,9,10]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: data,
              type: 'line',
              name: 'Line 1'
            },
            {
              data: [20, 30, 10, 40, 60, 50],
              type: 'line',
              name: 'Line 2'
            }
          ]
        };
  
        myChart.setOption(option);
      },
      showWeekDataForBar() {
        this.renderBarChart(this.barChartData.weekData);
      },
      showMonthDataForBar() {
        this.renderBarChart(this.barChartData.monthData);
      },
      showWeekDataForLine() {
        this.renderLineChart(this.lineChartData.weekData);
      },
      showMonthDataForLine() {
        this.renderLineChart(this.lineChartData.monthData);
      }
    }
  }
  </script>
  