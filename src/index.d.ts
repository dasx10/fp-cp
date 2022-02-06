declare global {
  namespace NodeJS {
      interface Global {
          Math: {
            PI: 3.141592653589793
          }
      }
  }
}

export default global;
