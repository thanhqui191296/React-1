import React, { Component } from 'react'
import Header from './header'
import Carousel from './carousel'

import NewLayout from './newlayout'
import Download from './download'
import HeroHeader from './heroheader'
import Box from './box'
import Code from './code'
import Trust from './trust'
import Footer from './footer'
export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='py-5'>
            <div className='container px-lg-5'>
                <Carousel/>
            </div>
        </div>
        <div className='py-5'>
            <div className='container px-lg-5'>
              <div className='row gx-lg-5'>
              <NewLayout/>
                <Download/>
                <HeroHeader/>
                <Box/>
                <Code/>
                <Trust/>
              </div>
            </div>
        </div>
        <div>
        <Footer/>
        </div>
        
      </div>
    )
  }
}
