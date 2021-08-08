export const validateWishData = (formData) => {
  if(!formData.title){
    return {
        isValid: false,
        message: 'Title is required'
      }
  }
  return {
    isValid: true,
    message: 'Valid Input'
  }
}