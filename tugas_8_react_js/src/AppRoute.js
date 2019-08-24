// https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg
// https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png
// https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png
// https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png
// https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg
// https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-cendol.jpg
// https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-pisang-hijau.jpg
// https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-kacang-merah.jpg
// https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-pleret.jpg
// https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-legen.jpg
// https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';

const appRoute = ()=>(
    <Router>
        <div>
            <Route path="/" exact component={App} />
        </div>
    </Router>
);

export default appRoute;