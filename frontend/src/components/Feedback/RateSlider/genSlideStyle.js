const genSlideStyle = value => {
  return {
    point: {
      left: `calc(${value * 20}% - ${5 + 3 * value}px)`
    },
    range: {
      width: `${value * 20}%`
    }
  };
};

export default genSlideStyle;
