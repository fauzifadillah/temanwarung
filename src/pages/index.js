import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
// eslint-disable-next-line no-unused-vars
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import SvgCharts from '../svg/SvgCharts';
import temanwarung from '../svg/temanwarung.png';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">
            Selalu ada teman
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light italic">
            Social Commerce Platform for Warung
          </p>
          <p className="mt-2 md:mt-12">
            <Button size="lg">Gabung Yuk!</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* <HeroImage /> */}
          <img src={temanwarung} alt={temanwarung} />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Values</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Social Impact</p>
              <p className="mt-4">
                Menjual produk PPOB, aksesoris gadget dan Voucher Game untuk Warung via
                chat-platform
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Less Risk</p>
              <p className="mt-4">Tidak perlu modal untuk mengembangkan usaha</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Friendly</p>
              <p className="mt-4">
                Komunikasi 2-arah dengan dukungan <br />
                <span className="italic">NLP-backed Social Commerce </span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="goal" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Capaian Kita</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Rata-rata SROI / Warung" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+10000" secondaryText="Jumlah Teman" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="100000" secondaryText="Total Transaksi" />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Mulai berteman?</h3>
      <p className="mt-8 text-xl font-light">
        Berkembang bersama teman, hanya dengan TemanWarung
      </p>
      <p className="mt-8">
        <Button size="xl">Gabung Yuk!</Button>
      </p>
    </section>
  </Layout>
);
