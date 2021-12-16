import React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import { Layout } from 'antd';
import { BackTop } from 'antd';


const { Header, Content } = Layout;
//const {Header,Footer,Content } = Layout;

function App() {
  return (
   
    <Layout className="mainLayout">
       <Header>
        <AppHeader/>
       </Header>

        <Content>
          <Hero />
          <br/>
          <Cards />
        </Content>
      <BackTop />

    </Layout>
  )
}

export default App;
