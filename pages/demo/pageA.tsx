import React from 'react';
import Head from '../../components/head';

export default class PageA extends React.Component{

    static async getInitialProps({req,query}: any){
        console.log(query);
        return {};
    }
    render(){
        return(
            <div>
            <Head title="PageA"/>
                PageA页面
            </div>
        );
    }
}