let refValue = null;

const setDropdownRefValue = (ref) => {
	refValue = ref;
};

export default () => refValue;
export { setDropdownRefValue };
