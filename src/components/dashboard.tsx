'use client';
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { SlBag } from 'react-icons/sl';
import { FiUsers } from 'react-icons/fi';
import { CiDollar } from 'react-icons/ci';
import ApexCharts, { ApexOptions } from 'apexcharts';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

export default function Dashboard() {
  const dataHr = [
    {
      total: '100+',
      paragraf: 'Total Products',
      rate: '25.36%',
      icon: FaArrowUp,
      iconImp: SlBag,
    },
    {
      total: '30,825',
      paragraf: 'Total Orders',
      rate: '25.36%',
      icon: FaArrowUp,
      iconImp: MdOutlineShoppingCart,
    },
    {
      total: '$30,825',
      paragraf: 'Total Sales',
      rate: '25.36%',
      icon: FaArrowUp,
      iconImp: CiDollar,
    },
    {
      total: '30,825+',
      paragraf: 'New Customers',
      rate: '25.36%',
      icon: FaArrowUp,
      iconImp: FiUsers,
    },
  ];

  const series = [
    {
      name: 'Total Orders',
      data: [0, 2000, 5000, 6000, 8000, 900, 12000],
    },
    {
      name: 'Total Sales',
      data: [1000, 5000, 3000, 8000, 20000, 10000, 6000],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: true,
      },
      foreColor: '#5a75d7',
    },
    stroke: {
      curve: 'smooth',
    },
  };

  const seriesTwo = [
    {
      name: 'Total Orders',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Total Sales',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];

  const optionsTwo: ApexOptions = {
    chart: {
      height: 350,
      type: 'bar',
      zoom: {
        enabled: true,
      },
      foreColor: '#5a75d7',
    },
    stroke: {
      curve: 'smooth',
    },
  };

  return (
    <div className="w-full">
      <h1 className="font-semibold mb-8 text-xl">Dashboard</h1>
      <div className="grid grid-cols-1 gap-8 w-full md:!grid md:grid-cols-2 ">
        {dataHr.map((datahr, idx) => (
          <div key={idx} className="w-full">
            <div className="flex justify-between">
              <div className="grid">
                <h1 className="font-bold text-xl">{datahr.total}</h1>
                <h1 className="font-extralight text-lg">{datahr.paragraf}</h1>
                <div className="flex items-center gap-5">
                  <span className="text-green-500">{React.createElement(datahr.icon, { size: 14 })}</span>
                  <p>{datahr.rate} Since last month</p>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-lg w-16 h-max p-5 grid justify-center items-center text-orange-500">
                <span>{React.createElement(datahr.iconImp, { size: 26 })}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card w-full mt-10">
        <h1 className="font-semibold mb-8 text-xl">Sales Report</h1>
        <div className="flex items-center mx-auto justify-center text-center gap-5">
          <div className="flex items-center gap-3">
            <h1 className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-700 rounded-full" />
              Order
            </h1>
            <h1 className="text-2xl font-bold">$8,550</h1>
            <div className="flex gap-2 items-center text-green-400">
              <FaArrowUp /> 25%
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-3">
              <h1 className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-700 rounded-full" />
                Sales
              </h1>
              <h1 className="text-2xl font-bold">$5,550</h1>
              <div className="flex gap-2 items-center text-red-500">
                <FaArrowDown /> 15%
              </div>
            </div>
          </div>
        </div>
        <ReactApexChart options={options} series={series} type="line" height={350} />
      </div>

      <div className="card w-full mt-10">
        <h1 className="font-semibold mb-8 text-xl">Sales Growth</h1>
        <div className="flex items-center mx-auto justify-center text-center gap-5">
          <div className="flex items-center gap-3">
            <h1 className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-700 rounded-full" />
              Order
            </h1>
            <h1 className="text-2xl font-bold">$8,550</h1>
            <div className="flex gap-2 items-center text-green-400">
              <FaArrowUp /> 25%
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-3">
              <h1 className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-700 rounded-full" />
                Sales
              </h1>
              <h1 className="text-2xl font-bold">$5,550</h1>
              <div className="flex gap-2 items-center text-red-500">
                <FaArrowDown /> 15%
              </div>
            </div>
          </div>
        </div>
        <ReactApexChart options={optionsTwo} series={seriesTwo} type="bar" height={350} />
      </div>

      <div className="grid grid-cols-2">
        <div className=""></div>
      </div>
    </div>
  );
}
