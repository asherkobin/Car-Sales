const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carSalesReducer = (state = initialState, action) => {
console.log("carSalesReducer", state, action);
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice + state.additionalFeatures.find(f => f.id === action.payload).price,
        additionalFeatures: state.additionalFeatures.filter(f => f.id !== action.payload),
        car: {
          ...state.car,
          features: [...state.car.features, state.additionalFeatures.find(f => f.id === action.payload)]
        },
      };
    case "REMOVE_FEATURE":
      return {
        ...state,
        additionalPrice: state.additionalPrice - state.car.features.find(f => f.id === action.payload).price,
        additionalFeatures: [...state.additionalFeatures, state.car.features.find(f => f.id === action.payload)],
        car: {
          ...state.car,
          features: state.car.features.filter(f => f.id !== action.payload)
        }
      };
    default:
       return state;
  }
}