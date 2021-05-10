import React from "react";
import App from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default class CMapp extends App {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>โรงเรียนยุพราชวิทยาลัย จังหวัดเชียงใหม่ Yupparaj Wittayalai School</title>

          <link
            rel="preload"
            href="/fonts/IBMPlexSansThai/IBMPlexSansThai-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/IBMPlexSansThai/IBMPlexSansThai-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          
          <link rel="stylesheet" href="/css/gilroy-extrabold.css" />
          <link rel="stylesheet" href="/css/gilroy-light.css" />
          <link rel="stylesheet" href="/css/gilroy-semibold.css" />
          <link rel="stylesheet" href="/css/gilroy-bold.css" />
          <link rel="stylesheet" href="/css/animate.min.css" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="/css/bootstrap-select.min.css" />
          <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
          <link rel="stylesheet" href="/css/bootstrap-datepicker.min.css" />
          {/* template styles */}
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />

        </Head>

          <div className="preloader">
            <img src="/images/load.png" className="preloader__image w-50" alt />
          </div>

        <Component />
        <Footer />
        
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/TweenMax.min.js"></script>
        <script src="/js/wow.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/jquery.ajaxchimp.min.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/bootstrap-select.min.js"></script>
        <script src="/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/js/bootstrap-datepicker.min.js"></script>
        <script src="/js/isotope.js"></script>
        <script src="/js/theme.js"></script>
        <script src="/js/script.js"></script>
      </>
    );
  }
}
