import App, { Container } from "next/app";
import React from "react";
import Head from "../components/head";
import 'antd/dist/antd.css';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container >
        <Head title="common" />
        <span style={{color:'red'}}>1111111</span>
        <Component {...pageProps} />
      </Container>
    );
  }
}
