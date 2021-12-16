import React from 'react';
import { Menu, Anchor } from 'antd';

const { Link } = Anchor;

function AppHeader() {
    return (
       <div className="header">
           <Anchor>
            <Link href="#home" title="Home" />
            <Link href="#cards" title="Cards" />
            <Link href="https://tinypng.com/" target="_blank" title="Testing" />

            {/* <Link href="#API" title="API">
                <Link href="#Anchor-Props" title="Anchor Props" />
                <Link href="#Link-Props" title="Link Props" />
            </Link> */}
        </Anchor>

       </div>
        
        // <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        //     <Menu.Item key="home">Home</Menu.Item>
        //     <Menu.Item key="about">About</Menu.Item>
        //     <Menu.Item key="contact">Contact Us</Menu.Item>
        // </Menu>


    )
}

export default AppHeader

