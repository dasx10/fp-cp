import or from './or/index';

const logic = Object.assign(<When, R1, R2>(when: When, success: (value: When) => R1, fail?: (value: When) => R2) => when 
	? success(when) 
	: fail ? fail(when) : when, {
	or: or,
});

export default logic;
