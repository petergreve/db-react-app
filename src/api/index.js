const fetchPerson = id => {
  // mocking http://fubar.com/person/$input$ 
  return new Promise((resolve, reject) => {
    if (!id) {
      reject()
    }
    resolve({
      val1: 100,
      val2: 200,
    })
  })
}

const fetchFacility = val1 => {
  // mocking http://fubar.com/facility/$val1$ 
  return new Promise((resolve, reject) => {
    if (!val1) {
      reject()
    }
    resolve({
      val3: 300,
      val4: 400,
    })
  })
}

const fetchExposure = val2 => {
  // mocking http://fubar.com/exposure/$val2$ 
  return new Promise((resolve, reject) => {
    if (!val2) {
      reject()
    }
    resolve({
      val5: 500,
    })
  })
}

export default {
  fetchPerson,
  fetchFacility,
  fetchExposure,
}