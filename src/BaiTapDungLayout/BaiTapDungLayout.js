import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import Sider from './Sider/Sider';
import "./css/style.css";
import ProductItem from './ProductItem/ProductItem';
import DataBinding from './DataBinding/DataBinding';
import HandlingEvent from './HandlingEvent/HandlingEvent';

export default class BaiTapDungLayout extends Component {
    render() {
        return (
            <div>
                {/* <Header></Header>
                <Sider></Sider>

                <ProductList>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </ProductList>

                <Footer></Footer> */}

                <DataBinding></DataBinding>
                {/* 
                <HandlingEvent></HandlingEvent> */}
            </div>
        )
    }
}
