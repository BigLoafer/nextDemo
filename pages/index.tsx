import React from "react";
import Head from "../components/head";
import Link from "next/link";
import styles from "./index.less";
import { Button } from "antd";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { withRouter} from "next/router";

@observer
class Home extends React.Component<any, any> {
  static async getInitialProps({ req }: any) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return {
      userAgent
    };
  }

  @observable name = "cehsi ";

  goToPageA = () => {
    console.log("111111111111");
    // this.props.router.push("/demo/pageA?id=10");
    // window.history.pushState(null,'','/demo/pageA?id=10')
    window.location.href='/demo/pageA?id=10';
  };

  render() {
    return (
      <div>
        <Head title="Home111" />
        <div className={styles.hero}>
          <h1 className={styles.title}>Welcome to Next!</h1>
          <p className={styles.description}>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
          <h1>hahahdha</h1>
          <h1>22222</h1>
          <span style={{color:'red'}}>111111</span>
          {/* <a href="/demo/pageA?id=10"> */}
            <Button type="primary" size="large"  onClick={this.goToPageA}>
              1111
            </Button>
          {/* </a> */}
          <span>{this.props.userAgent}</span>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
