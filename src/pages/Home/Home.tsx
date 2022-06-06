import Carousel from "./Carousel/Carousel";
import React from "react";

type Props = {};

function Home(props: Props) {
  return (
    <div className="container">
      <section className="carousel bg-black pt-8 pb-10">
        <Carousel />
        <p className="text-white text-center text-3xl pt-7">
          Nhờ có Host, mọi điều đều có thể ♥
        </p>
      </section>
      <Suggestions />
    </div>
  );
}

export default Home;

function Suggestions(props: Props) {
  return (
    <section className="suggestion my-14">
      <h1 className="font-bold text-2xl mb-7 ml-28">
        Khám phá những điểm đến gần đây
      </h1>
      {/* khám phá những điểm đến gần đây */}
      <div className="grid grid-cols-4 gap-8 max-w-7xl m-auto">
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/tphcm.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Hồ Chí Minh</h3>
            <span>15p lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/cantho.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Cần Thơ</h3>
            <span>3 giờ lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/nhatrang.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Nha Trang</h3>
            <span>6.5 giờ lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/phuquoc.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Phú Quốc</h3>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/tuyhoa.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Tuy Hòa</h3>
            <span>7.5 giờ lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/bienhoa.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Biên Hòa</h3>
            <span>45p lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/thuanan.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thị Xã Thuận An</h3>
            <span>30p lái xe</span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <img
            src="./img/Suggestions/thapcham.jpg"
            width={80}
            height={20}
            alt="..."
            className="rounded-xl mr-4"
          />
          <div>
            <h3 className="font-bold">Thành Phố Phan Rang</h3>
            <span>5 giờ lái xe</span>
          </div>
        </div>
      </div>
      {/* ở bức cứ đâu */}
      <div className="max-w-7xl m-auto">
        <h2 className="font-bold text-2xl my-8 ">Ở bức cứ đâu</h2>
        <section className="flex">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/nhadalat.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Toàn Bộ Nhà</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/nhatrencay.jpg" />
              </div>
              <div className="contentBx">
                <br />
                <h3>Chỗ ở độc đáo</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/trangtrai.jpg" />
              </div>
              <div className="contentBx">
              <br />
                <h3>Trang trại và thiên nhiên</h3>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="./img/Suggestions/cho.jpg" />
              </div>
              <div className="contentBx">
              <br />
                <h3>Cho phép mang thú cưng</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
