import dc from './pages/dc.js';
import Csk from './pages/csk.js';
import pk from './pages/pk.js';
import kkr from './pages/kkr.js';
import mi from './pages/mi.js';
import rcb from './pages/rcb.js';
import rr from './pages/rr.js';
import srh from './pages/srh.js';
import error404 from './pages/error.js';
import utils from './utils.js';
import Teams from './pages/team.js';

const routes = {
    '/': Teams,
    '/teams': Teams,
    '/chennai-super-kings': Csk,
    '/dc': dc,
    '/pk': pk,
    '/kkr': kkr,
    '/mi': mi,
    '/rr': rr,
    '/rcb': rcb,
    '/srh': srh
};



const router = async () => {
  
    const content = document.getElementById('page_container');
    
    let request = utils.parseRequestURL()
    console.log(request);
    
    let parsedURL = (request.resource ? '/' + request.resource : '/')
    console.log(parsedURL);
    
    
    let page = routes[parsedURL] ? routes[parsedURL] : error404
    content.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);