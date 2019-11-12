import React from 'react';
import Header from './component/includes/header';
import Footer from './component/includes/footer';
import Content from './component/content/content';
import './App.css'

const app = () => (
	<div className='container-fluid'>
		
			<Header />
      <div className="container my-5 text-center">
        <Content />
      </div>
			<Footer />
	</div>
);

export default app;
