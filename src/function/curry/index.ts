/* eslint-disable @typescript-eslint/ban-ts-comment */
import curryCount from './count/index';
import curryRight from './right/index';
import curryCore from './core/index';
import curryWrap from './wrap/index';

const curry = Object.assign(curryCore, {
	core  : curryCore,
	wrap  : curryWrap,
	count : curryCount,
	right : curryRight,
});

export default curry; 
