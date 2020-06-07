// export const formatTime = () => 'formatted time';

// export const formatTime = ( time ) => {
//   if (time == null ) {   // without arg
//     return null;
//   } else if (isNaN(time)) {   // if NaN
//     return null; 
//   } else if ( time < 0) {   // number less than 0
//     return null;
//   } else {

export const formatTime = ( time ) => {
  if (time == null || isNaN(time) || time < 0 ) {
    return null;
  }


  let seconds = Math.floor(time % 60) + '';   
  seconds = seconds.padStart(2, '0');

  let minutes = Math.floor((time / 60) % 60) + '';
  minutes = minutes.padStart(2, '0');

  let hours = Math.floor(time / 3600) + '';     
  hours = hours.padStart(2, '0');  

  return hours + ':' + minutes + ':' + seconds;              
};

