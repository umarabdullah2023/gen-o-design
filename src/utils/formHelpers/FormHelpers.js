export default class FormHelpers {
  static getFormikInitialValues = (data) => {
    return data.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.name]: '',
      }), {})
  };
}
