export default {
    
    // The install method will be called with the Vue constructor as the first argument, along with possible options
    install (Vue, options) {
        
      // ES6 way of const job = options.job
      const { job } = options
      
      // Add $plugin instance method directly to Vue components
      Vue.prototype.$myInfo = (name, age) => info(name, age, job)
        
      // Add $surname instance property directly to Vue components
      Vue.prototype.$surname = 'Smith'
    }
}

  // info method returns a string with name, age and job (with default values)
  const info = (name = 'John', age = 22, job = 'student') => `My name is ${name} and I am a ${age} years old ${job}.`
